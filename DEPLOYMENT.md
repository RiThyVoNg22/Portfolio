# Deployment Guide - Portfolio Website

This guide will help you deploy your portfolio website so everyone can see it online.

## Option 1: Netlify (Recommended - Easiest)

### Steps:
1. **Create a Netlify account:**
   - Go to [https://www.netlify.com](https://www.netlify.com)
   - Sign up for free (you can use GitHub, GitLab, or email)

2. **Deploy your site:**
   - Click "Add new site" → "Deploy manually"
   - Drag and drop your project folder OR
   - Connect to GitHub (if you push to GitHub first)

3. **Your site will be live instantly!**
   - Netlify will give you a URL like: `your-portfolio.netlify.app`
   - You can customize the domain name in settings

### Advantages:
- ✅ Free hosting
- ✅ Automatic HTTPS
- ✅ Custom domain support
- ✅ Easy deployment
- ✅ No server setup needed

---

## Option 2: Vercel (Also Very Easy)

### Steps:
1. **Create a Vercel account:**
   - Go to [https://vercel.com](https://vercel.com)
   - Sign up for free (GitHub recommended)

2. **Deploy:**
   - Click "Add New Project"
   - Import your GitHub repository OR
   - Drag and drop your project folder

3. **Done!**
   - Your site will be live at: `your-portfolio.vercel.app`

### Advantages:
- ✅ Free hosting
- ✅ Fast CDN
- ✅ Automatic HTTPS
- ✅ Easy to use

---

## Option 3: GitHub Pages (Free with GitHub)

### Steps:
1. **Create a GitHub repository:**
   ```bash
   # Create a new repository on GitHub.com
   # Then run these commands:
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click "Settings" → "Pages"
   - Under "Source", select "main" branch
   - Click "Save"

3. **Your site will be live at:**
   - `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Advantages:
- ✅ Free hosting
- ✅ Integrated with GitHub
- ✅ Custom domain support
- ✅ Version control built-in

---

## Option 4: Surge.sh (Simple Command Line)

### Steps:
1. **Install Surge:**
   ```bash
   npm install -g surge
   ```

2. **Deploy:**
   ```bash
   cd /Users/macbookpro/RithyVong.Portfolio
   surge
   ```
   - Follow the prompts
   - Choose a domain name (or use the suggested one)

3. **Your site will be live instantly!**

### Advantages:
- ✅ Free hosting
- ✅ Very fast deployment
- ✅ Command line based
- ✅ Custom domain support

---

## Quick Deploy Commands (If you have GitHub set up)

```bash
# 1. Create repository on GitHub first, then:

# 2. Add remote (replace with your GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# 3. Push to GitHub
git branch -M main
git push -u origin main

# 4. Then deploy to Netlify or Vercel by connecting to GitHub
```

---

## Recommended: Netlify Drop

**The Easiest Way:**
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag and drop your entire project folder
3. Your site is live in seconds!

---

## After Deployment

1. **Test your site:**
   - Check all links work
   - Test on mobile devices
   - Verify images load correctly

2. **Custom Domain (Optional):**
   - Most services allow custom domains
   - You can buy a domain from Namecheap, GoDaddy, etc.
   - Connect it in your hosting service settings

3. **Update Contact Info:**
   - Make sure your contact information is correct
   - Test the email link if you add one

---

## Need Help?

- **Netlify Support:** [https://docs.netlify.com](https://docs.netlify.com)
- **Vercel Support:** [https://vercel.com/docs](https://vercel.com/docs)
- **GitHub Pages:** [https://pages.github.com](https://pages.github.com)

---

**Your portfolio is ready to go live! 🚀**

