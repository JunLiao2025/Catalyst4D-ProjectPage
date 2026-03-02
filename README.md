# Catalyst4D Project Page

This is the project page for "Catalyst4D: High-Fidelity 3D-to-4D Scene Editing via Dynamic Propagation".

## Local Preview

You can preview the website locally by opening `index.html` in your browser, or running a local server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment (GitHub Pages)

This project is ready to be deployed as a static website. The easiest way is using **GitHub Pages**.

### Steps:

1.  **Create a GitHub Repository**:
    *   Go to [GitHub](https://github.com) and create a new repository (e.g., `Catalyst4D-Page`).
    *   Make sure it is **Public** (unless you have GitHub Pro).

2.  **Upload Files**:
    *   Initialize git in this folder (if not already done):
        ```bash
        git init
        git add .
        git commit -m "Initial commit"
        ```
    *   Push to your new repository:
        ```bash
        git branch -M main
        git remote add origin https://github.com/YOUR_USERNAME/Catalyst4D-Page.git
        git push -u origin main
        ```

3.  **Enable GitHub Pages**:
    *   Go to your repository **Settings** -> **Pages**.
    *   Under **Source**, select `Deploy from a branch`.
    *   Under **Branch**, select `main` and `/ (root)`.
    *   Click **Save**.

4.  **Visit your site**:
    *   After a minute or two, your site will be live at `https://YOUR_USERNAME.github.io/Catalyst4D-Page/`.
