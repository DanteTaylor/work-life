# Work + Life Monorepo

This repository powers the **Work + Life** ecosystem — a unified workspace combining an **Astro front-end** for the public site and a **Sanity Studio** for content management.  
The two projects live together in a single **pnpm monorepo** for simplicity, shared dependencies, and synchronized development.

---

## 📂 Project Structure

```
work-life/
│
├── apps/
│   ├── site/        # Astro website
│   └── studio/      # Sanity CMS
│
├── packages/        # (optional) shared code or UI components
│
├── package.json     # root scripts for the workspace
├── pnpm-workspace.yaml
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1. Install pnpm
If you don’t have it yet:

```bash
npm install -g pnpm
```

### 2. Install dependencies
Run this in the root directory:

```bash
pnpm install
```

### 3. Start both apps
Run both the Astro site and Sanity Studio at once:

```bash
pnpm dev
```

This will start:

- **Astro site:** [http://localhost:4321](http://localhost:4321)  
- **Sanity Studio:** [http://localhost:3333](http://localhost:3333)

---

## 🧩 Scripts

| Command | Description |
|----------|-------------|
| `pnpm install` | Install dependencies across all workspaces |
| `pnpm dev` | Start Astro + Sanity in parallel |
| `pnpm -F site dev` | Start only the Astro app |
| `pnpm -F studio dev` | Start only the Sanity app |
| `pnpm build` | Build all apps for production |

---

## ⚙️ Environment Variables

Each app has its own environment file:

- `apps/site/.env` – used by Astro  
- `apps/studio/.env` – used by Sanity  

> Never commit these files. Keep sensitive API keys and tokens private.

---

## 🧱 Deployment

| App | Recommended Host |
|------|------------------|
| Astro site | Vercel / Netlify / Static hosting |
| Sanity studio | Sanity Managed Hosting (`sanity deploy`) or custom host |

You can deploy both separately or through a unified pipeline.

---

## 🛠 Tech Stack

- **Astro** — fast front-end framework  
- **Sanity v3** — content platform and CMS  
- **pnpm Workspaces** — efficient dependency management  
- **TypeScript** — shared types (optional)  
- **Git + GitHub** — version control and collaboration

---

## 🤝 Contributing

1. Fork this repository  
2. Create a new branch:  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Make changes and commit:  
   ```bash
   git commit -m "Add new feature"
   ```
4. Push and open a Pull Request

---

## 🧰 Common Issues

| Problem | Solution |
|----------|-----------|
| `zsh: command not found: pnpm` | Install pnpm globally: `npm install -g pnpm` |
| `Unexpected token //` in `package.json` | JSON can’t contain comments — remove `//` lines |
| `files.map is not a function` | Check API response shape or normalize returned data |
| Port conflicts | Change the port: `astro dev --port 4321` or `sanity dev --port 3333` |

---

## 🪶 License

MIT © 2025 Work + Life
