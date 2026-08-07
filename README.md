# Vika Naili — Creative Portfolio

A one-page portfolio site built from your PDF portfolio content. Plain HTML/CSS/JS — no build tools, no dependencies to install.

```
portfolio-site/
├── index.html
├── styles.css
├── script.js
└── assets/
    ├── portrait.png
    ├── project-zenius.jpg
    └── project-event.jpg
```

## 1. Preview it locally (optional)

Just double-click `index.html` to open it in a browser — or, for the best results (some browsers block local images without a server), run a tiny local server from this folder:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## 2. Put it on GitHub

1. Create a new repository on GitHub. For a **personal site at `yourusername.github.io`**, name the repo exactly `yourusername.github.io`. For a **project site** (hosted at `yourusername.github.io/repo-name`), name it whatever you like — e.g. `portfolio`.
2. Upload these files to the repo. Easiest way without the command line:
   - Go to your new repo → **Add file → Upload files**
   - Drag in `index.html`, `styles.css`, `script.js`, and the whole `assets` folder
   - Commit the changes
   
   Or with git:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

## 3. Turn on GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Under **Branch**, pick **main** and folder **/ (root)** → **Save**.
4. Wait a minute, then refresh — GitHub shows the live URL at the top of that page:
   - `https://yourusername.github.io` (if you named the repo `yourusername.github.io`)
   - `https://yourusername.github.io/your-repo-name` (for any other repo name)

That's it — the site is live and will redeploy automatically every time you push changes to `main`.

## Making changes later

- **Text/copy** — edit directly in `index.html`.
- **Colors/fonts/spacing** — all in `styles.css`, defined as CSS variables at the top (`:root { ... }`) so you can retheme by changing a handful of values.
- **Photos** — swap files in `assets/` and keep the same filenames, or update the `src` paths in `index.html`.
- **Tool percentages** — each ring in the Tools section has a `data-pct="XX"` attribute in `index.html`; change the number and update the visible `XX%` label next to it.
