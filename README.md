# 👨‍💻 Wasim Khan – Personal Portfolio

Welcome to my personal portfolio repository!

I am a **Full Stack .NET Developer** passionate about building reliable backend systems, scalable REST APIs, and responsive web applications.

This repository contains my personal portfolio website, developed using Angular, showcasing my technical skills, professional experience, projects, and contact information.

🌐 **Live Portfolio:** [https://wasimk1.github.io/wasimkhan/](https://wasimk1.github.io/wasimkhan/)

---

## 🚀 About the Project

This portfolio website represents my professional journey as a software developer.

It highlights:

- Professional introduction and background.
- Technical skills and technologies.
- Work experience.
- Personal and professional projects.
- Contact information.
- Resume access.

The website is designed with a clean, modern, responsive interface to provide a smooth browsing experience across desktop, tablet, and mobile devices.

## 🛠️ Tech Stack

**Backend**
- .NET Core
- ASP.NET Core MVC
- Web & REST APIs
  
**Database**
- SQL Server
  
**Frontend**
- Angular
- TypeScript
- JavaScript
- Razor Views

**Development Tools**
- Git
- GitHub

**Deployment**
- GitHub Pages
- GitHub Actions

## 📂 Project Structure

```text
wasimkhan/
│
├── .github/
│   └── workflows/
│       └── deploy-angular.yml
│
├── PortfolioWebsiteV1/
├── PortfolioWebsiteV2/
├── PortfolioWebsiteV3/
│   ├── public/
│   ├── src/
│   │   └── app/
│   ├── angular.json
│   ├── package.json
│   └── tsconfig.json
│
├── .gitignore
└── README.md
```

## 💻 Run Locally

Follow these steps to run the portfolio on your local machine.

### Prerequisites

- Node.js
- npm
- Angular CLI

### 1. Clone the repository

```bash
git clone https://github.com/wasimk1/wasimkhan.git
```

### 2. Navigate to the Angular project

```bash
cd wasimkhan/PortfolioWebsiteV3
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
ng serve --open
```

### 5. Open in browser

```text
http://localhost:4200/
```

## 📦 Production Build

To generate a production build:

```bash
ng build --configuration production --base-href /wasimkhan/
```

The generated production files are available in the `dist/` directory.

## 🚀 Deployment

This portfolio is hosted using **GitHub Pages** with GitHub Actions.

The deployment workflow automatically:

1. Detects changes pushed to the `main` branch.
2. Installs project dependencies.
3. Builds the Angular application.
4. Uploads the production build.
5. Deploys the website to GitHub Pages.

**Live Website:** [Visit My Portfolio](https://wasimk1.github.io/wasimkhan/)

## 🌿 Branch Strategy

This repository follows a two-branch development workflow.

| Branch | Purpose |
|---|---|
| `main` | Production and live website |
| `angular-dev` | Development and new features |

All new development is performed in `angular-dev` and merged into `main` through Pull Requests.

## 👨‍💻 About Me

**Wasim Khan**  
Full Stack .NET Developer

- Backend: C#, .NET Core, ASP.NET Core Web API, MVC
- Database: SQL Server
- Frontend: Angular, TypeScript, JavaScript
- Tools: Git, GitHub, Azure, Docker, Postman

📌 **GitHub:** [wasimk1](https://github.com/wasimk1)

🌐 **Portfolio:** [wasimk1.github.io/wasimkhan](https://wasimk1.github.io/wasimkhan/)

---

⭐ If you find this project interesting, feel free to explore the repository!

**Thanks for visiting!**
