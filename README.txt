# RCH Group Website (Static)

This is a simple, fast, one-page website for **RCH Group | Property & Rentals**.

## Make the contact form work (Formspree)
1. Create a free form at Formspree.
2. Copy your form endpoint ID (looks like `https://formspree.io/f/xxxxxxx`).
3. Open `index.html` and replace:
   `https://formspree.io/f/REPLACE_WITH_YOUR_ID`
   with your real Formspree URL.

## Deploy for free (GitHub Pages)
1. Create a GitHub repository (any name).
2. Upload all files from this folder.
3. In GitHub repo → Settings → Pages:
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
4. GitHub will give you a URL.

## Point rchgroup.uk to GitHub Pages (GoDaddy DNS)
In GoDaddy DNS:
- A records for `@` (root):
  - 185.199.108.153
  - 185.199.109.153
  - 185.199.110.153
  - 185.199.111.153
- CNAME for `www`:
  - `www` → `YOUR_GITHUB_USERNAME.github.io`

(If you want, you can use Netlify instead — it’s often even easier.)
