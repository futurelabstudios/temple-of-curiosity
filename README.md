# Temple of Curiosity

Static MVP for an AI-powered quizzing platform with two user paths:

- `/quizmasters/`: choose a quiz master and generate style-led sets
- `/topics/`: choose a topic and generate mixed-model sets

Both demos include royalty and credit progression logic.

## Run locally

```bash
python3 -m http.server 8000
```

Open:

- `http://localhost:8000/`
- `http://localhost:8000/quizmasters/`
- `http://localhost:8000/topics/`

## Deploy

This project is static and includes `netlify.toml` for Netlify publishing from
the repository root.
