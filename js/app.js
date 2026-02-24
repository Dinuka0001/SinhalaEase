/* ═══════════════════════════════════════════════════════════
   app.js  –  SinhalaEase Main Application Controller
   ═══════════════════════════════════════════════════════════ */

const App = (() => {

  /* ────────────────────────────────────────────────────────
     STATE
  ────────────────────────────────────────────────────────── */
  let currentSection = 'lessons';
  let activeLesson   = null;       // current category object
  let fcDeck         = [];         // flashcard deck (word objects)
  let fcIndex        = 0;
  let fcFlipped      = false;

  let quizDeck       = [];
  let quizIndex      = 0;
  let quizScore      = 0;
  let quizTotal      = 0;
  let quizCategory   = null;
  let wordOrderAnswer= [];
  let wordOrderAll   = [];

  let srsQueue       = [];
  let srsIndex       = 0;
  let srsFlipped     = false;

  let currentAudioWord = null;  // word object for current audio

  let dictData          = null;  // dictionary.json loaded
  let dictDirection     = 'en';  // 'en' = eng→sin, 'si' = sin→eng
  let dictEntries       = [];    // array of {eng, sin}
  let activePhraseCat   = null;  // phrasebook detail category

  /* ────────────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────────────── */
  function init() {
    SRS.updateStreak();
    refreshHomeStats();
    buildLessonGrid();
    buildQuizTopicGrid();
    buildPhrasebookGrid();
    loadDictionary();
    showAlphabetTab('vowels', null);
    showScreen('screen-home');
  }

  /* ────────────────────────────────────────────────────────
     NAVIGATION
  ────────────────────────────────────────────────────────── */
  function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); el.scrollTop = 0; }
  }

  function showSection(section) {
    currentSection = section;
    // Update nav button highlights
    document.querySelectorAll('.nav-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.section === section);
    });
    const map = {
      lessons:    'screen-lessons',
      flashcards: 'screen-flashcards',
      quiz:       'screen-quiz',
      review:     'screen-review',
      progress:   'screen-progress',
      phrasebook: 'screen-phrasebook',
      dictionary: 'screen-dictionary',
      alphabet:   'screen-alphabet',
      about:      'screen-about'
    };
    if (section === 'review')    refreshSRSScreen();
    if (section === 'progress')  refreshProgressScreen();
    if (section === 'flashcards') startFlashcardsAll();
    showScreen(map[section] || 'screen-home');
  }

  function goHome() {
    showScreen('screen-home');
    refreshHomeStats();
  }

  /* ────────────────────────────────────────────────────────
     HOME STATS
  ────────────────────────────────────────────────────────── */
  function refreshHomeStats() {
    const p = SRS.getProgress();
    setText('stat-streak', p.streak || 0);
    setText('stat-words',  (p.wordsLearned || []).length);
    setText('stat-xp',     p.xp || 0);

    // Daily goal
    const today = new Date().toDateString();
    const done  = p.dailyGoalDate === today ? (p.dailyGoalCount || 0) : 0;
    const goal  = 10;
    const pct   = Math.min(100, Math.round((done / goal) * 100));
    setStyle('goal-bar', 'width', pct + '%');
    setText('goal-text', `${done} / ${goal} words`);
  }

  /* ────────────────────────────────────────────────────────
     LESSONS
  ────────────────────────────────────────────────────────── */
  function buildLessonGrid() {
    const grid = document.getElementById('lesson-grid');
    if (!grid) return;
    const p = SRS.getProgress();
    grid.innerHTML = VOCAB_DATA.map(cat => {
      const known  = (p.categoryProgress[cat.id] || []).length;
      const total  = cat.words.length;
      const pct    = Math.round((known / total) * 100);
      const done   = known === total;
      return `
        <div class="topic-card ${done?'completed':''}" onclick="App.openLesson('${cat.id}')" style="border-top:4px solid ${cat.color}">
          ${done ? '<span class="card-badge">✓ Done</span>' : ''}
          <div class="card-icon">${cat.icon}</div>
          <div class="card-title">${cat.title}</div>
          <div class="card-count">${known}/${total} words</div>
          <div style="margin-top:8px;height:5px;background:#eee;border-radius:10px;overflow:hidden">
            <div style="height:100%;width:${pct}%;background:${cat.color};border-radius:10px;transition:width .6s"></div>
          </div>
        </div>`;
    }).join('');
  }

  function openLesson(categoryId) {
    activeLesson = VOCAB_DATA.find(c => c.id === categoryId);
    if (!activeLesson) return;
    setText('lesson-detail-title', `${activeLesson.icon} ${activeLesson.title}`);
    const p    = SRS.getProgress();
    const known= p.categoryProgress[categoryId] || [];
    const list = document.getElementById('lesson-word-list');
    
    // We wrap the image and emoji in a container. The onerror switches display to the emoji
    list.innerHTML = activeLesson.words.map(w => `
      <div class="word-row ${known.includes(w.id)?'known':''}">
        <div class="word-thumb-container">
          <img class="word-thumb" src="assets/images/${w.image}" alt="${w.english}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
          <div class="word-emoji-fallback" style="display:none;">${w.emoji || ''}</div>
        </div>
        <div class="word-meta">
          <div class="word-sinhala">${w.sinhala}</div>
          <div class="word-roman">${w.roman}</div>
          <div class="word-english">${w.english}</div>
        </div>
        <button class="word-audio-btn" title="Play audio"
          onclick="App.playWordAudio(event, '${w.audio}')">🔊</button>
      </div>`).join('');
    showScreen('screen-lesson-detail');
    SRS.logActivity(`📚 Opened lesson: ${activeLesson.title}`);
  }

  function startFlashcardsForLesson() {
    if (!activeLesson) return;
    fcDeck  = shuffle([...activeLesson.words]);
    fcIndex = 0;
    showScreen('screen-flashcards');
    renderFlashcard();
  }

  function startQuizForLesson() {
    if (!activeLesson) return;
    startQuiz(activeLesson.id);
  }

  /* ────────────────────────────────────────────────────────
     FLASHCARDS (general)
  ────────────────────────────────────────────────────────── */
  function startFlashcardsAll() {
    const allWords = VOCAB_DATA.flatMap(c => c.words);
    fcDeck  = shuffle([...allWords]).slice(0, 20);
    fcIndex = 0;
    renderFlashcard();
  }

  function renderFlashcard() {
    if (fcIndex >= fcDeck.length) {
      showToast('🎉 Flashcard session complete!');
      exitFlashcards();
      return;
    }
    const w = fcDeck[fcIndex];
    currentAudioWord = w;
    fcFlipped = false;
    const card = document.getElementById('flashcard');
    card.classList.remove('flipped');

    // Find category for label
    const cat  = VOCAB_DATA.find(c => c.words.some(x => x.id === w.id));
    setText('fc-category',   cat ? cat.title : '');
    setText('fc-word',       w.sinhala);
    setText('fc-romanized',  w.roman);
    setText('fc-translation',w.english);
    setText('fc-example',    w.example || '');
    setText('fc-counter',    `${fcIndex+1} / ${fcDeck.length}`);

    const img = document.getElementById('fc-image');
    let fallback = document.getElementById('fc-emoji-fallback');
    
    // Inject fallback div if not present
    if (!fallback && img) {
      fallback = document.createElement('div');
      fallback.id = 'fc-emoji-fallback';
      fallback.className = 'fc-emoji-fallback';
      img.parentNode.insertBefore(fallback, img.nextSibling);
    }

    img.src = `assets/images/${w.image}`;
    img.alt = w.english;
    img.style.display = 'block';

    if (fallback) {
      fallback.style.display = 'none';
      fallback.innerHTML = w.emoji || '';
    }

    img.onerror = () => {
      img.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    };

    // Progress bar
    const pct = Math.round(((fcIndex) / fcDeck.length) * 100);
    setStyle('fc-progress-bar', 'width', pct + '%');

    // Mark as seen for SRS
    const cardData = SRS.getCard(w.id);
    if (cardData.seen === 0) {
      SRS.updateCard(w.id, 'hard');  // initialise
    }
    const catId = cat ? cat.id : null;
    SRS.markWordLearned(w.id, catId);
  }

  function flipCard() {
    fcFlipped = !fcFlipped;
    document.getElementById('flashcard').classList.toggle('flipped', fcFlipped);
  }

  function rateCard(rating) {
    const w = fcDeck[fcIndex];
    if (w) {
      SRS.updateCard(w.id, rating);
      if (rating === 'easy') SRS.addXP(5, `Flashcard easy: ${w.english}`);
    }
    nextCard();
  }

  function nextCard() {
    fcIndex++;
    renderFlashcard();
  }

  function exitFlashcards() {
    if (activeLesson) showSection('lessons');
    else goHome();
  }

  function playAudio(e) {
    e.stopPropagation();
    if (currentAudioWord) playWordAudio(null, currentAudioWord.audio);
  }

  function playWordAudio(e, audioPath) {
    if (e) e.stopPropagation();
    try {
      const audio = new Audio(`assets/audio/${audioPath}`);
      audio.play().catch(() => showToast('🔇 Audio file not found'));
    } catch(err) {
      showToast('🔇 Audio file not found');
    }
  }

  /* ── Text-to-Speech helper for Sinhala ────────────────── */
  function speakSinhala(text, audioPath) {
    // Try audio file first, fall back to TTS
    if (audioPath) {
      const audio = new Audio(audioPath);
      audio.play().then(() => {}).catch(() => fallbackTTS(text));
    } else {
      fallbackTTS(text);
    }
  }

  function fallbackTTS(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'si-LK';
      utter.rate = 0.85;
      // Try to find Sinhala voice, else default
      const voices = window.speechSynthesis.getVoices();
      const sinVoice = voices.find(v => v.lang === 'si-LK' || v.lang.startsWith('si'));
      if (sinVoice) utter.voice = sinVoice;
      window.speechSynthesis.speak(utter);
    } else {
      showToast('🔇 Audio not available');
    }
  }

  /* ────────────────────────────────────────────────────────
     QUIZ
  ────────────────────────────────────────────────────────── */
  function buildQuizTopicGrid() {
    const grid = document.getElementById('quiz-topic-grid');
    if (!grid) return;
    grid.innerHTML = `
      <div class="topic-card" onclick="App.startQuiz('all')" style="border-top:4px solid #5B4FCF">
        <div class="card-icon">🌟</div>
        <div class="card-title">All Topics</div>
        <div class="card-count">Mixed quiz</div>
      </div>` +
      VOCAB_DATA.map(cat => `
        <div class="topic-card" onclick="App.startQuiz('${cat.id}')" style="border-top:4px solid ${cat.color}">
          <div class="card-icon">${cat.icon}</div>
          <div class="card-title">${cat.title}</div>
          <div class="card-count">${cat.words.length} words</div>
        </div>`).join('');
  }

  function startQuiz(categoryId) {
    quizCategory = categoryId;
    let pool;
    if (categoryId === 'all') {
      pool = VOCAB_DATA.flatMap(c => c.words);
    } else {
      const cat = VOCAB_DATA.find(c => c.id === categoryId);
      pool = cat ? [...cat.words] : [];
    }
    if (pool.length < 4) { showToast('Not enough words for a quiz.'); return; }
    quizDeck  = shuffle(pool).slice(0, 10);
    quizIndex = 0;
    quizScore = 0;
    quizTotal = quizDeck.length;
    wordOrderAnswer = [];
    wordOrderAll    = [];

    hide('quiz-picker');
    hide('quiz-results');
    show('quiz-active');
    setText('quiz-score-badge', 'Score: 0');
    SRS.logActivity(`🧠 Started quiz: ${categoryId}`);
    renderQuizQuestion();
  }

  /* Multiple Choice only */
  function renderQuizQuestion() {
    if (quizIndex >= quizTotal) { endQuiz(); return; }
    const w = quizDeck[quizIndex];

    // Progress
    const pct = Math.round((quizIndex / quizTotal) * 100);
    setStyle('quiz-prog-bar', 'width', pct + '%');
    setText('quiz-q-counter', `Q ${quizIndex+1} / ${quizTotal}`);

    hide('quiz-feedback');
    hide('quiz-next-btn');

    // Image logic with emoji fallback
    const img = document.getElementById('quiz-img');
    let fallback = document.getElementById('quiz-emoji-fallback');
    
    // Inject fallback div if not present
    if (!fallback && img) {
      fallback = document.createElement('div');
      fallback.id = 'quiz-emoji-fallback';
      fallback.className = 'quiz-emoji-fallback';
      img.parentNode.insertBefore(fallback, img.nextSibling);
    }

    img.src = `assets/images/${w.image}`;
    img.alt = w.english;
    img.style.display = 'block';

    if (fallback) {
      fallback.style.display = 'none';
      fallback.innerHTML = w.emoji || '';
    }

    img.onerror = () => {
      img.style.display = 'none';
      if (fallback) fallback.style.display = 'flex';
    };

    // Always Multiple Choice
    setText('quiz-type-badge', 'Multiple Choice');
    setText('quiz-question', w.sinhala);
    setText('quiz-subtext', `(${w.roman}) — choose the meaning`);
    show('quiz-options');
    buildMCOptions(w);
  }

  function buildMCOptions(correctWord) {
    // Get 3 distractors from same or other categories
    const all      = VOCAB_DATA.flatMap(c => c.words);
    const distractors = shuffle(all.filter(w => w.id !== correctWord.id)).slice(0, 3);
    const options  = shuffle([correctWord, ...distractors]);
    const container= document.getElementById('quiz-options');
    container.innerHTML = options.map(o => `
      <button class="quiz-opt-btn" onclick="App.selectMC(this,'${o.id}','${correctWord.id}')">
        ${o.english}
      </button>`).join('');
  }

  function selectMC(btn, selectedId, correctId) {
    // Disable all buttons
    document.querySelectorAll('.quiz-opt-btn').forEach(b => b.disabled = true);
    const correct = selectedId === correctId;
    btn.classList.add(correct ? 'correct' : 'wrong');
    if (!correct) {
      document.querySelectorAll('.quiz-opt-btn').forEach(b => {
        if (b.onclick && b.getAttribute('onclick').includes(correctId)) b.classList.add('correct');
      });
    }
    showFeedback(correct, quizDeck[quizIndex]);
  }

  function showFeedback(correct, word) {
    if (correct) {
      quizScore++;
      SRS.updateCard(word.id, 'easy');
      SRS.addXP(10, `Quiz correct: ${word.english}`);
      const cat = VOCAB_DATA.find(c => c.words.some(x => x.id === word.id));
      SRS.markWordLearned(word.id, cat ? cat.id : null);
    } else {
      SRS.updateCard(word.id, 'again');
    }
    setText('quiz-score-badge', `Score: ${quizScore}`);
    const fb = document.getElementById('quiz-feedback');
    fb.className = 'quiz-feedback ' + (correct ? 'correct' : 'wrong');
    fb.innerHTML = correct
      ? `✅ Correct! <strong>${word.sinhala}</strong> = ${word.english}`
      : `❌ Not quite. <strong>${word.sinhala}</strong> (${word.roman}) = ${word.english}`;
    show('quiz-feedback');
    show('quiz-next-btn');
  }

  function nextQuizQ() {
    quizIndex++;
    renderQuizQuestion();
  }

  function endQuiz() {
    SRS.recordQuiz();
    const xpEarned = quizScore * 10;
    SRS.addXP(xpEarned, `Completed quiz: ${quizCategory}`);
    SRS.logActivity(`✅ Quiz done – ${quizScore}/${quizTotal} correct`);

    hide('quiz-active');
    show('quiz-results');

    const pct = Math.round((quizScore / quizTotal) * 100);
    let emoji = '😓', title = 'Keep practising!';
    if (pct >= 90)      { emoji = '🏆'; title = 'Outstanding!'; }
    else if (pct >= 70) { emoji = '🎉'; title = 'Great job!'; }
    else if (pct >= 50) { emoji = '😊'; title = 'Good effort!'; }

    setText('result-emoji',   emoji);
    setText('result-title',   title);
    setText('result-summary', `You scored ${quizScore} out of ${quizTotal} (${pct}%)`);
    setText('result-xp',      `+${xpEarned} XP earned ⭐`);
    refreshHomeStats();
  }

  function retryQuiz() {
    startQuiz(quizCategory);
  }

  function exitQuiz() {
    const quizActive  = document.getElementById('quiz-active');
    const quizResults = document.getElementById('quiz-results');
    const isInQuiz    = (quizActive && !quizActive.classList.contains('hidden')) ||
                        (quizResults && !quizResults.classList.contains('hidden'));

    if (isInQuiz) {
      // From active quiz / results → back to topic picker
      hide('quiz-active');
      hide('quiz-results');
      show('quiz-picker');
      showScreen('screen-quiz');
    } else {
      // From topic picker → back to home
      goHome();
    }
  }

  /* ────────────────────────────────────────────────────────
     SRS REVIEW
  ────────────────────────────────────────────────────────── */
  function refreshSRSScreen() {
    const dueIds = SRS.getDueWords();
    setText('srs-due-count', dueIds.length);
    const btn = document.getElementById('srs-start-btn');
    if (btn) btn.disabled = dueIds.length === 0;
  }

  function startSRS() {
    const dueIds = SRS.getDueWords();
    if (!dueIds.length) { showToast('No words due right now. Come back later!'); return; }
    const allWords = VOCAB_DATA.flatMap(c => c.words);
    srsQueue = dueIds.map(id => allWords.find(w => w.id === id)).filter(Boolean);
    srsQueue = shuffle(srsQueue).slice(0, 15);
    srsIndex  = 0;
    srsFlipped= false;
    hide('srs-info');
    hide('srs-done');
    show('srs-active');
    renderSRSCard();
    SRS.logActivity(`🔄 Started SRS review (${srsQueue.length} words)`);
  }

  function renderSRSCard() {
    if (srsIndex >= srsQueue.length) { endSRS(); return; }
    const w = srsQueue[srsIndex];
    currentAudioWord = w;
    srsFlipped = false;
    document.getElementById('srs-card').classList.remove('flipped');
    setText('srs-word',  w.sinhala);
    setText('srs-roman', w.roman);
    setText('srs-trans', w.english);
    setText('srs-count-text', `Card ${srsIndex+1} of ${srsQueue.length}`);
  }

  function flipSRS() {
    srsFlipped = !srsFlipped;
    document.getElementById('srs-card').classList.toggle('flipped', srsFlipped);
  }

  function rateSRS(rating) {
    const w = srsQueue[srsIndex];
    if (w) {
      SRS.updateCard(w.id, rating);
      if (rating === 'easy') SRS.addXP(5, `SRS easy: ${w.english}`);
    }
    srsIndex++;
    renderSRSCard();
  }

  function playSRSAudio(e) {
    if (e) e.stopPropagation();
    if (currentAudioWord) playWordAudio(null, currentAudioWord.audio);
  }

  function endSRS() {
    hide('srs-active');
    show('srs-done');
    const msg = `Reviewed ${srsQueue.length} words. Next review scheduled automatically!`;
    setText('srs-done-msg', msg);
    SRS.updateStreak();
    refreshHomeStats();
  }

  /* ────────────────────────────────────────────────────────
     PROGRESS SCREEN
  ────────────────────────────────────────────────────────── */
  function refreshProgressScreen() {
    const p = SRS.getProgress();
    setText('p-streak',  p.streak || 0);
    setText('p-words',   (p.wordsLearned || []).length);
    setText('p-xp',      p.xp || 0);
    setText('p-quizzes', p.quizzesDone || 0);

    // Category progress bars
    const catList = document.getElementById('category-progress-list');
    catList.innerHTML = VOCAB_DATA.map(cat => {
      const known = (p.categoryProgress[cat.id] || []).length;
      const total = cat.words.length;
      const pct   = Math.round((known / total) * 100);
      return `
        <div class="cat-prog-row">
          <div class="cat-title">
            <span>${cat.icon} ${cat.title}</span>
            <span>${known}/${total}</span>
          </div>
          <div class="cat-bar-outer">
            <div class="cat-bar-inner" style="width:${pct}%"></div>
          </div>
        </div>`;
    }).join('');

    // Activity
    const acts = SRS.getActivity();
    const log  = document.getElementById('activity-log');
    if (acts.length === 0) {
      log.innerHTML = '<p style="color:var(--text-muted);font-size:.9rem">No activity yet. Start learning!</p>';
    } else {
      log.innerHTML = acts.slice(0,12).map(a => `
        <div class="activity-item">
          <span class="act-icon">📝</span>
          <span class="act-text">${a.text}</span>
          <span class="act-time">${a.time}</span>
        </div>`).join('');
    }
  }

  function resetProgress() {
    if (confirm('Reset all progress? This cannot be undone.')) {
      SRS.resetAll();
      refreshProgressScreen();
      refreshHomeStats();
      buildLessonGrid();
      showToast('Progress reset.');
    }
  }

  /* ────────────────────────────────────────────────────────
     PHRASEBOOK (Grid → Detail, like Lessons)
  ────────────────────────────────────────────────────────── */
  function buildPhrasebookGrid() {
    const grid = document.getElementById('phrasebook-grid');
    if (!grid) return;
    const catColors = ['#5B4FCF','#FF6B35','#27AE60','#E74C3C','#9B59B6','#F39C12','#1ABC9C','#2980B9'];
    grid.innerHTML = PHRASEBOOK.map((cat, i) => {
      const color = catColors[i % catColors.length];
      return `
        <div class="topic-card" onclick="App.openPhraseCategory(${i})" style="border-top:4px solid ${color}">
          <div class="card-icon">${cat.icon}</div>
          <div class="card-title">${cat.category}</div>
          <div class="card-count">${cat.phrases.length} phrases</div>
        </div>`;
    }).join('');
  }

  function openPhraseCategory(index) {
    activePhraseCat = PHRASEBOOK[index];
    if (!activePhraseCat) return;
    setText('phrasebook-detail-title', `${activePhraseCat.icon} ${activePhraseCat.category}`);
    const searchInput = document.getElementById('phrase-search');
    if (searchInput) searchInput.value = '';
    renderPhraseDetail('');
    showScreen('screen-phrasebook-detail');
  }

  function searchPhrasesInDetail(query) {
    renderPhraseDetail(query);
  }

  function renderPhraseDetail(query) {
    if (!activePhraseCat) return;
    const q = (query || '').toLowerCase().trim();
    const phrases = activePhraseCat.phrases.filter(p =>
      !q ||
      p.english.toLowerCase().includes(q) ||
      p.roman.toLowerCase().includes(q) ||
      p.sinhala.includes(q)
    );
    const list = document.getElementById('phrasebook-list');
    if (!phrases.length) {
      list.innerHTML = '<p style="color:var(--text-muted);padding:20px">No phrases found.</p>';
      return;
    }
    list.innerHTML = phrases.map(p => {
      const audioFile = p.audio || '';
      return `
      <div class="phrase-row">
        <div class="phrase-text-block">
          <div class="phrase-sinhala">${p.sinhala}</div>
          <div class="phrase-roman">${p.roman}</div>
          <div class="phrase-english">${p.english}</div>
        </div>
        <button class="phrase-audio-btn" onclick="event.stopPropagation(); App.speakSinhala('${p.sinhala.replace(/'/g, "\\'")}'${audioFile ? ", 'assets/audio/phrasebook/" + audioFile + "'" : ', null'})">🔊</button>
      </div>`;
    }).join('');
  }

  /* ────────────────────────────────────────────────────────
     DICTIONARY
  ────────────────────────────────────────────────────────── */
  function loadDictionary() {
    try {
      if (typeof DICTIONARY_DATA !== 'undefined') {
        dictData = DICTIONARY_DATA;
        dictEntries = Object.entries(dictData).map(([eng, sin]) => ({ eng, sin }));
        const statsEl = document.getElementById('dict-stats');
        if (statsEl) statsEl.textContent = `${dictEntries.length.toLocaleString()} entries loaded. Type to search.`;
      } else {
        const statsEl = document.getElementById('dict-stats');
        if (statsEl) statsEl.textContent = 'Failed to load dictionary.';
      }
    } catch(e) {
      const statsEl = document.getElementById('dict-stats');
      if (statsEl) statsEl.textContent = 'Failed to load dictionary.';
    }
  }

  function setDictDirection(dir) {
    dictDirection = dir;
    document.getElementById('dict-dir-en').classList.toggle('active', dir === 'en');
    document.getElementById('dict-dir-si').classList.toggle('active', dir === 'si');
    const searchVal = document.getElementById('dict-search').value;
    if (searchVal) searchDictionary(searchVal);
  }

  function searchDictionary(query) {
    const q = (query || '').toLowerCase().trim();
    const container = document.getElementById('dict-results');
    if (!dictEntries.length || !q) {
      container.innerHTML = q ? '<p class="dict-empty">Loading dictionary...</p>' : '';
      return;
    }

    let results;
    if (dictDirection === 'en') {
      // Exact matches first, then starts-with, then contains
      const exact   = dictEntries.filter(e => e.eng.toLowerCase() === q);
      const starts  = dictEntries.filter(e => e.eng.toLowerCase().startsWith(q) && e.eng.toLowerCase() !== q);
      const contains= dictEntries.filter(e => e.eng.toLowerCase().includes(q) && !e.eng.toLowerCase().startsWith(q));
      results = [...exact, ...starts, ...contains].slice(0, 50);
    } else {
      results = dictEntries.filter(e => e.sin.includes(q)).slice(0, 50);
    }

    if (!results.length) {
      container.innerHTML = '<p class="dict-empty">No matches found.</p>';
      return;
    }

    container.innerHTML = results.map(r => `
      <div class="dict-row">
        <div class="dict-eng">${highlightMatch(r.eng, q, dictDirection === 'en')}</div>
        <div class="dict-sin">${highlightMatch(r.sin, q, dictDirection === 'si')}</div>
      </div>`).join('');
  }

  function highlightMatch(text, query, doHighlight) {
    if (!doHighlight || !query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  /* ────────────────────────────────────────────────────────
     ALPHABET
  ────────────────────────────────────────────────────────── */
  function showAlphabetTab(tab, btn) {
    if (btn) {
      document.querySelectorAll('#alphabet-tabs .phrase-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    }
    const container = document.getElementById('alphabet-content');
    if (!container) return;

    let data;
    if (tab === 'vowels')          data = SINHALA_ALPHABET.vowels;
    else                            data = SINHALA_ALPHABET.consonants;

    container.innerHTML = data.map(item => `
      <div class="alpha-card">
        <div class="alpha-char">${item.char}</div>
        <div class="alpha-roman">${item.roman}</div>
        <div class="alpha-name">${item.name || ''}</div>
        <button class="alpha-audio-btn" onclick="event.stopPropagation(); App.speakSinhala('${item.char}', 'assets/audio/alphabet/${item.roman}.mp3')" title="Listen">🔊</button>
      </div>`).join('');
  }

  /* ────────────────────────────────────────────────────────
     UTILITIES
  ────────────────────────────────────────────────────────── */
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  }

  function setStyle(id, prop, val) {
    const el = document.getElementById(id);
    if (el) el.style[prop] = val;
  }

  function show(id) {
    const el = document.getElementById(id);
    if (el) el.classList.remove('hidden');
  }

  function hide(id) {
    const el = document.getElementById(id);
    if (el) el.classList.add('hidden');
  }

  let toastTimer;
  function showToast(msg) {
    const t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg;
    t.classList.remove('hidden');
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.classList.remove('show');
      setTimeout(() => t.classList.add('hidden'), 400);
    }, 2400);
  }

  /* ────────────────────────────────────────────────────────
     PUBLIC API
  ────────────────────────────────────────────────────────── */
  return {
    init,
    showSection,
    goHome,
    openLesson,
    startFlashcardsForLesson,
    startQuizForLesson,
    flipCard,
    rateCard,
    nextCard,
    exitFlashcards,
    playAudio,
    playWordAudio,
    startQuiz,
    selectMC,
    nextQuizQ,
    retryQuiz,
    exitQuiz,
    startSRS,
    flipSRS,
    rateSRS,
    playSRSAudio,
    resetProgress,
    openPhraseCategory,
    searchPhrasesInDetail,
    searchDictionary,
    setDictDirection,
    showAlphabetTab,
    speakSinhala
  };

})();

/* ── BOOT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => App.init());
