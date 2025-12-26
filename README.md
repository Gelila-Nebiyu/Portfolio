# Portfolio
My Portfolio
# Gelila Nebiyu Portfolio -  Software Engineer

A professional, high-performance portfolio with a Burgundy aesthetic, featuring a functional contact form and an interactive Gemini-powered AI assistant.

## 🚀 Quick Start: VS Code Setup

1. **Create a Project Folder**: Create a new folder on your computer named `portfolio`.
2. **Open in VS Code**: Open that folder in VS Code.
3. **Create Files**: Create the files exactly as named in the code blocks provided (e.g., `index.html`, `App.tsx`, `constants.ts`, etc.).
4. **Copy & Paste**: Paste the content for each file into its corresponding file in VS Code.
5. **Project Structure**:
   ```
   portfolio/
   ├── components/
   │   ├── ChatWidget.tsx
   │   ├── Contact.tsx
   │   ├── Experience.tsx
   │   ├── Footer.tsx
   │   ├── Hero.tsx
   │   ├── Navbar.tsx
   │   ├── Projects.tsx
   │   └── Skills.tsx
   ├── services/
   │   └── geminiService.ts
   ├── App.tsx
   ├── constants.ts
   ├── index.html
   ├── index.tsx
   ├── types.ts
   ├── metadata.json
   └── resume.pdf (Place your actual resume here)
   ```

## 🛠 How to Customize Your Info

Open `constants.ts`. This is the "brain" of your portfolio's content.

### 1. Change your Email & Socials
Find the `PERSONAL_INFO` object:
```typescript
export const PERSONAL_INFO = {
  name: "GELILA NEBIYU",
  email: "YOUR_EMAIL@email.com", // Change this!
  resumeLink: "/resume.pdf",     // Place your file in the root and name it resume.pdf
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  }
};
```

### 2. Change your Projects
Update the `PROJECTS` array with your actual work details and images.

### 3. Setup the AI Assistant
To make the AI Chatbot work, you need a Google Gemini API Key:
1. Go to [AI Studio](https://aistudio.google.com/).
2. Get a free API Key.
3. When deploying (see below), add an Environment Variable named `API_KEY` with your key value.

## 🌐 Deployment (Free)

### Option A: Vercel (Recommended)
1. Upload your code to a **GitHub** repository.
2. Go to [Vercel.com](https://vercel.com) and sign up with GitHub.
3. Click **"Add New"** > **"Project"**.
4. Import your repository.
5. **Important**: In the "Environment Variables" section, add:
   - Key: `API_KEY`
   - Value: `(Your Gemini API Key)`
6. Click **Deploy**. Your site will be live at `your-name.vercel.app`!

### Option B: Netlify
1. Go to [Netlify.com](https://netlify.com).
2. Connect your GitHub.
3. Choose the repo and add the `API_KEY` in the "Site Configuration" > "Environment Variables" section.
4. Deploy!

## 🧪 Local Preview
Since this project uses ESM modules and Tailwind CDN, the easiest way to see it locally is:
1. Install the **"Live Server"** extension in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.
