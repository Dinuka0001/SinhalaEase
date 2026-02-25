# සිංහලEase — Learn Sinhala

A modern, interactive Sinhala language learning web app built with vanilla HTML, CSS & JavaScript. No frameworks, no build tools — just open `index.html` in a browser.

![SinhalaEase](assets/images/app-logo.png)

---

## ✨ Features

| Section | Description |
| --- | --- |
| 📚 **Lessons** | 18 vocabulary categories (greetings, numbers, colors, food, etc.) with images, emojis, and audio |
| 🃏 **Flashcards** | Flip-card practice with Easy / Hard rating and progress tracking |
| 🧠 **Quiz** | Multiple-choice quizzes — see the English word + image, then pick the matching Sinhala word with romanization and audio |
| 🔄 **SRS Review** | Spaced Repetition System — revisits words at 1, 3, 7, 14 & 30-day intervals |
| 💬 **Phrasebook** | 7 categories of practical phrases (survival, restaurant, directions, shopping, and more) with audio |
| 🗣️ **Conversations** | 7 real-life dialog scenarios (café, shopping, directions, pharmacy, transport, etc.) in a chat-bubble UI |
| 🔤 **Alphabet** | Interactive Sinhala vowels & consonants with pronunciation audio |
| 📊 **Progress** | XP points, day streak, words learned, category completion and activity log |
| ℹ️ **About** | App and creator information |

---

## 🚀 Getting Started

### Run locally

Since the app is a single-page static site, you can open it directly:

```text
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

```text
├── index.html              # Single-page app entry point
├── css/
│   └── style.css           # All styles (design tokens, layout, components)
├── js/
│   ├── app.js              # Main application controller
│   ├── data.js             # Vocabulary, phrasebook, conversation & alphabet data
│   └── srs.js              # Spaced Repetition System + progress tracking
├── tools/
│   └── verify-assets.mjs   # Checks missing image/audio files referenced in data.js
└── assets/
    ├── Fonts/              # Sinhala display font
    ├── images/             # Word images organised by category
    └── audio/              # Audio clips organised by category
```

---

## 🗂️ Vocabulary Categories

Greetings · Numbers · Time · Colors · Family · Food · Home · City · Nature · Pronouns · Body · Animals · Jobs · Clothes · Health · Verbs · Adjectives · Questions

---

## 🗣️ Conversation Topics

Everyday Greetings · At a Café · Shopping · Getting Directions · Introductions & Small Talk · At a Pharmacy · Public Transport

---

## 🛠️ Tech Stack

- **HTML5** — semantic single-page structure
- **CSS3** — custom properties, flexbox/grid, responsive layout
- **Vanilla JavaScript** — IIFE module pattern, no dependencies
- **Web Speech API** — browser-native Sinhala TTS fallback
- **localStorage** — persists SRS cards, XP, streak, and progress

---

## 🧪 Asset Verification

Run this optional check to find missing files referenced from `js/data.js`:

```bash
node tools/verify-assets.mjs
```

Generate a full checklist file (`ASSETS_MISSING.txt`) with all missing image/audio paths:

```bash
node tools/verify-assets.mjs --write-manifest
```

---

## 🔤 Font

Sinhala text is rendered using **Noto Serif Sinhala** (`assets/Fonts/Noto Serif Sinhala.ttf`), with Iskoola Pota / Nirmala UI as fallbacks.

---

## 📝 Adding Audio Files

Place `.mp3` files in the appropriate asset folders to replace TTS:

- **Vocabulary:** `assets/audio/<category>/<filename>.mp3`  
  (filenames match the `audio` property in `js/data.js`)
- **Alphabet:** `assets/audio/alphabet/<roman>.mp3`  
  (e.g., `a.mp3`, `ka.mp3`, `ga.mp3`)
- **Conversations:** `assets/audio/dialogs/<filename>.mp3`  
  (filenames match the `audio` property in `DIALOGS_DATA` in `js/data.js`)
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
