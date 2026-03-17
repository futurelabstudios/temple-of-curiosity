# Temple of Curiosity

Static MVP for a mobile-first AI-powered quizzing platform with two user paths:

- `/host/`: creator studio for hosting quizzes and extending quizmaster taste
- `/themes/`: immersive full-screen theme-led play

The prototype includes mobile-first interaction patterns, an INR 199 pricing
model, credits, royalties, and best-effort copy-shield behavior.

## Run locally

```bash
python3 -m http.server 8000
```

Open:

- `http://localhost:8000/`
- `http://localhost:8000/host/`
- `http://localhost:8000/themes/`

## Deploy

This project is static and includes `netlify.toml` for Netlify publishing from
the repository root.
