# සිංහලEase — Learn Sinhala

A modern, interactive Sinhala language learning web app built with vanilla HTML, CSS & JavaScript. No frameworks, no build tools — just open `index.html` in a browser.

![SinhalaEase](assets/images/app-logo.png)

---

## ✨ Features

| Section | Description |
|---|---|
| 📚 **Lessons** | 16 vocabulary categories (greetings, numbers, colors, food, etc.) with images and audio |
| 🃏 **Flashcards** | Flip-card practice with Easy / Hard rating and progress tracking |
| 🧠 **Quiz** | Multiple-choice quizzes per category or across all vocabulary |
| 🔄 **SRS Review** | Spaced Repetition System — revisits words at 1, 3, 7, 14 & 30-day intervals |
| 💬 **Phrasebook** | 7 categories of practical phrases (survival, restaurant, directions, shopping, and more) with audio |
| 📖 **Dictionary** | 54,000+ word English ↔ Sinhala dictionary with instant search |
| 🔤 **Alphabet** | Interactive Sinhala vowels & consonants with pronunciation audio |
| 📊 **Progress** | XP points, day streak, words learned, category completion and activity log |
| ℹ️ **About** | App and creator information |

---

## 🚀 Getting Started

### Run locally

Since the dictionary is loaded via a JavaScript file (no server required), you can open the app directly:

```
index.html  ← double-click to open in any browser
```

> **Note:** Audio playback uses the Web Speech API as a fallback when `.mp3` files are not present, so the app works even without audio assets.

### Host on GitHub Pages

1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)` folder
4. Your app will be live at `https://<your-username>.github.io/<repo-name>/`

---

## 📁 Project Structure

```
├── index.html              # Single-page app entry point
├── css/
│   └── style.css           # All styles (design tokens, layout, components)
├── js/
│   ├── app.js              # Main application controller
│   ├── data.js             # Vocabulary, phrasebook, alphabet data
│   ├── srs.js              # Spaced Repetition System + progress tracking
│   ├── dictionary.json     # 54,000+ word EN↔SI dictionary (source)
│   └── dictionary-data.js  # dictionary.json wrapped as a JS variable
└── assets/
    ├── Fonts/
    │   └── UN-Bindumathi.ttf   # Sinhala display font
    ├── images/             # Word images organised by category
    └── audio/              # Audio clips organised by category
```

---

## 🗂️ Vocabulary Categories

Greetings · Numbers · Time · Colors · Family · Food · Home · City · Nature · Pronouns · Body · Animals · Jobs · Clothes · Health · Verbs & Adjectives · Questions

---

## 🛠️ Tech Stack

- **HTML5** — semantic single-page structure
- **CSS3** — custom properties, flexbox/grid, responsive layout
- **Vanilla JavaScript** — IIFE module pattern, no dependencies
- **Web Speech API** — browser-native Sinhala TTS fallback
- **localStorage** — persists SRS cards, XP, streak, and progress

---

## 🔤 Font

Sinhala text is rendered using **UN-Bindumathi** (`assets/Fonts/UN-Bindumathi.ttf`), with Iskoola Pota / Nirmala UI as fallbacks.

---

## 📝 Adding Audio Files

Place `.mp3` files in the appropriate asset folders to replace TTS:

- **Vocabulary:** `assets/audio/<category>/<filename>.mp3`  
  (filenames match the `audio` property in `js/data.js`)
- **Alphabet:** `assets/audio/alphabet/<roman>.mp3`  
  (e.g., `a.mp3`, `ka.mp3`, `ga.mp3`)
- **Phrasebook:** `assets/audio/phrasebook/<filename>.mp3`  
  (add an `audio` property to the phrase entry in `js/data.js`)

---

## 👤 Author

**Dinuka Adasooriya**  
✉️ [dinuka0001@gmail.com](mailto:dinuka0001@gmail.com)  
🐙 [github.com/Dinuka0001](https://github.com/Dinuka0001)

---

## 📄 License

© 2026 Dinuka Adasooriya. All rights reserved.
