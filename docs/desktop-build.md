# Desktop Build

LivePlan can be packaged as a Windows desktop app with Electron.

## Install Dependencies

```powershell
npm install
```

## Run Desktop App In Development

```powershell
npm start
```

## Build Windows Installer And Portable EXE

```powershell
npm run build:win
```

Artifacts are written to:

```text
dist/
```

Expected outputs include an NSIS installer and a portable `.exe`.

## Why Electron

The current project is already a static web app. Electron lets the desktop version reuse the same `frontend/` and `data/` folders, while adding only a small desktop entry point in `desktop/main.cjs`.

## Current Limitation

The desktop shell reads the bundled `data/live-market.json`. Future official-source sync can be added as a separate command or background updater.
