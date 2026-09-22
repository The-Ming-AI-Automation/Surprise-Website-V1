# Surprise Website V1

A GitHub-ready interactive landing-page prototype for Ming AI Automations.

## Working journey

1. Frosted-glass passcode entrance
2. Personal hero message
3. Surprise-object selection
4. Interactive Three.js particle heart
5. Big Bang memory dispersion
6. Six memory cards
7. Final message and replay

Heart / For Love is active in V1. Birthday Cake and Movie Ticket are intentionally shown as upcoming templates.

## Demo passcode

`0922`

The passcode is SHA-256 hashed in `src/main.js`. This is an emotional lock for a static website, not high-security authentication.

## Run locally

```bash
npm install
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
```

## Personalise

Edit `CONFIG` and the language copy inside `src/main.js`. Update the memory titles, dates and final message in `index.html`.

Create a new four-digit passcode hash on macOS:

```bash
printf '1234' | shasum -a 256
```

Copy the resulting hash into `passcodeHash`.

## GitHub Pages

The repository includes a GitHub Actions deployment workflow.

1. Push the project to a GitHub repository.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push to `main` whenever you want to deploy an update.

## Privacy

- Keep real client source files in a private repository.
- Use a difficult-to-guess deployment URL.
- Keep `noindex, nofollow` enabled.
- Do not publish highly sensitive information.
- Confirm permission for every photograph and audio file.

