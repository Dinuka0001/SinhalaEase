/* ═══════════════════════════════════════════════════════════
   srs.js  –  Spaced Repetition System + Progress Tracking
   ═══════════════════════════════════════════════════════════
   Intervals (days): Again→0  Hard→1  Easy→ 1,3,7,14,30
   ═══════════════════════════════════════════════════════════ */

const SRS = (() => {

  const STORAGE_KEY = 'sinhala_ease_srs';
  const PROG_KEY    = 'sinhala_ease_progress';
  const ACTIVITY_KEY= 'sinhala_ease_activity';

  /* ── INTERVAL SCHEDULE (in ms) ─────────────────────────── */
  const INTERVALS = {
    new:   0,
    again: 0,
    hard:  1  * 86400000,   // 1 day
    good:  3  * 86400000,   // 3 days
    easy:  7  * 86400000    // 7 days  (then 14, 30 on repeats)
  };
  const ESCALATE = [1, 3, 7, 14, 30]; // days per level

  /* ── LOAD / SAVE ─────────────────────────────────────────── */
  function loadCards() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch(e) { return {}; }
  }
  function saveCards(db) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(db));
  }
  function loadProgress() {
    try {
      return JSON.parse(localStorage.getItem(PROG_KEY)) || {
        streak: 0, lastStudyDate: null, xp: 0, wordsLearned: [],
        quizzesDone: 0, dailyGoalCount: 0, dailyGoalDate: null,
        categoryProgress: {}
      };
    } catch(e) {
      return { streak:0, lastStudyDate:null, xp:0, wordsLearned:[],
               quizzesDone:0, dailyGoalCount:0, dailyGoalDate:null,
               categoryProgress:{} };
    }
  }
  function saveProgress(p) {
    localStorage.setItem(PROG_KEY, JSON.stringify(p));
  }
  function loadActivity() {
    try { return JSON.parse(localStorage.getItem(ACTIVITY_KEY)) || []; }
    catch(e) { return []; }
  }
  function saveActivity(a) {
    localStorage.setItem(ACTIVITY_KEY, JSON.stringify(a.slice(0,40)));
  }

  /* ── CARD OPERATIONS ─────────────────────────────────────── */
  function getCard(wordId) {
    const db = loadCards();
    return db[wordId] || { wordId, level:0, nextReview:0, seen:0, correct:0 };
  }
  function updateCard(wordId, rating) {
    const db  = loadCards();
    const card = db[wordId] || { wordId, level:0, nextReview:0, seen:0, correct:0 };
    card.seen++;
    if (rating === 'again') {
      card.level = Math.max(0, card.level - 1);
    } else if (rating === 'hard') {
      // stay at same level
    } else {
      card.level = Math.min(card.level + 1, ESCALATE.length - 1);
      card.correct++;
    }
    const daysMs = ESCALATE[card.level] * 86400000;
    card.nextReview = Date.now() + daysMs;
    db[wordId] = card;
    saveCards(db);
    return card;
  }

  /* ── DUE WORDS ───────────────────────────────────────────── */
  function getDueWords() {
    const db  = loadCards();
    const now = Date.now();
    // All known words whose next review time has passed
    const due = Object.values(db).filter(c => c.nextReview <= now && c.seen > 0);
    // Also include unseen words (capped at 10 new per session)
    const allIds = VOCAB_DATA.flatMap(cat => cat.words.map(w => w.id));
    const newIds = allIds.filter(id => !db[id] || db[id].seen === 0).slice(0, 10);
    const dueIds = due.map(c => c.wordId);
    return [...new Set([...dueIds, ...newIds])];
  }

  /* ── PROGRESS HELPERS ────────────────────────────────────── */
  function markWordLearned(wordId, categoryId) {
    const p = loadProgress();
    if (!p.wordsLearned.includes(wordId)) {
      p.wordsLearned.push(wordId);
    }
    if (categoryId) {
      if (!p.categoryProgress[categoryId]) p.categoryProgress[categoryId] = [];
      if (!p.categoryProgress[categoryId].includes(wordId)) {
        p.categoryProgress[categoryId].push(wordId);
      }
    }
    // Daily goal
    const today = new Date().toDateString();
    if (p.dailyGoalDate !== today) {
      p.dailyGoalCount = 0;
      p.dailyGoalDate  = today;
    }
    p.dailyGoalCount++;
    saveProgress(p);
    return p;
  }

  function addXP(amount, reason) {
    const p = loadProgress();
    p.xp = (p.xp || 0) + amount;
    saveProgress(p);
    logActivity(`+${amount} XP – ${reason}`);
    return p.xp;
  }

  function recordQuiz() {
    const p = loadProgress();
    p.quizzesDone = (p.quizzesDone || 0) + 1;
    saveProgress(p);
  }

  function updateStreak() {
    const p    = loadProgress();
    const today= new Date().toDateString();
    if (p.lastStudyDate === today) return p.streak;
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    if (p.lastStudyDate === yesterday) {
      p.streak = (p.streak || 0) + 1;
    } else {
      p.streak = 1;
    }
    p.lastStudyDate = today;
    saveProgress(p);
    return p.streak;
  }

  function getProgress() { return loadProgress(); }

  function resetAll() {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(PROG_KEY);
    localStorage.removeItem(ACTIVITY_KEY);
  }

  /* ── ACTIVITY LOG ────────────────────────────────────────── */
  function logActivity(text) {
    const log  = loadActivity();
    const time = new Date().toLocaleTimeString([], {hour:'2-digit', minute:'2-digit'});
    log.unshift({ text, time, date: new Date().toDateString() });
    saveActivity(log);
  }
  function getActivity() { return loadActivity(); }

  /* ── PUBLIC API ──────────────────────────────────────────── */
  return {
    getDueWords,
    updateCard,
    getCard,
    markWordLearned,
    addXP,
    recordQuiz,
    updateStreak,
    getProgress,
    resetAll,
    logActivity,
    getActivity
  };
})();
