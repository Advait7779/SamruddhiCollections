# समृद्धी कलेक्शन (Samruddhi Collection)

Official responsive web application for **Samruddhi Collection** (समृद्धी कलेक्शन), a traditional family clothing and Yeola Paithani saree store located at Swaroopchand Gandhi Market, Pratappur Road, Ashwi Bk, Tal Sangamner, Maharashtra.

---

## 🚀 Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7 (Single Page Application)
- **Icons**: Phosphor Icons React
- **Production Server**: Multi-stage Nginx Alpine with gzip compression and SPA fallback rewriting

---

## 📦 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploying to Hostinger via Coolify Panel

This project includes a production-ready **`Dockerfile`** and **`nginx.conf`** pre-configured with:
- **SPA Fallback Routing**: Prevents 404 errors when refreshing `/collections`, `/about`, or `/contact`.
- **Gzip Compression**: Pre-enabled for ultra-fast page delivery.
- **Cache-Control Headers**: 1-year caching for hashed static assets in `/assets/`, 30 days for images.
- **Clean Nginx Alpine Container**: Lightweight and secure.

### Step-by-Step Deployment Instructions:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit for Samruddhi Collection"
   git branch -M main
   git remote add origin https://github.com/<your-username>/samruddhi-collection.git
   git push -u origin main
   ```

2. **Open Coolify Panel on Hostinger VPS**:
   - Navigate to your Coolify dashboard (e.g. `http://<your-vps-ip>:8000` or custom Coolify domain).
   - Go to your Project $\rightarrow$ Environment.

3. **Add New Application**:
   - Click **+ New** $\rightarrow$ **Application**.
   - Select **Public Repository** or **GitHub App** (Private Repository).
   - Paste your GitHub repository URL: `https://github.com/<your-username>/samruddhi-collection`.
   - Branch: `main`.

4. **Configure Build Settings in Coolify**:
   - **Build Pack**: Select **Dockerfile** *(Coolify will automatically detect the root `Dockerfile` and `nginx.conf`)*.
   - **Ports Exposes**: `80`.
   - **Base Directory**: `/`.

5. **Set Domain & SSL**:
   - In the **Domains** field, enter your domain name (e.g., `https://samruddhicollection.com` or `https://www.samruddhicollection.com`).
   - Coolify will automatically provision a free Let's Encrypt SSL certificate via Traefik.

6. **Deploy**:
   - Click **Deploy** in the top-right corner.
   - Coolify will pull the repo, build the Vite app in Docker, and start Nginx.
   - Future `git push` commits to `main` will automatically trigger zero-downtime redeployments!
