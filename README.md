# 🌟 AutoSearch Pro: Lightning-Fast Autocomplete App

**A sleek, modern autocomplete search bar app built with React, Vite, and TypeScript. Featuring debouncing, response caching, and a minimalist UI with pure CSS, this app ensures smooth performance and an elegant user experience. Deployed on Vercel and powered by `pnpm` for efficient package management.**

---

## ✨ Features

- **Autocomplete Search**: Real-time suggestions as you type.
- **Debouncing**: Reduces API calls with a 500ms delay for better performance.
- **Response Caching**: Stores API responses to minimize redundant requests.
- **Minimalist Design**: Clean UI styled with pure CSS.
- **Type Safety**: Built with TypeScript for robust code.
- **Fast Development**: Powered by Vite for a blazing-fast dev experience.

---

## 🛠️ Tech Stack

- **React**: Frontend library for building the UI.
- **Vite**: Next-gen build tool for fast development.
- **TypeScript**: Adds type safety to JavaScript.
- **CSS**: Pure CSS for minimal, lightweight styling.
- **pnpm**: Efficient package manager for dependency management.
- **Vercel**: Hosting and deployment platform.

---

## 🚀 Getting Started

Follow these steps to set up and run the app locally.

### Prerequisites
- **Node.js**: Version 18 or higher.
- **pnpm**: Install globally with `npm install -g pnpm`.

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Karthikk7293/autocomplete-search-bar.git
   cd autocomplete-search-bar
   ```
2. Install dependencies using `pnpm`:
   ```bash
   pnpm install
   ```
3. Start the development server:
   ```bash
   pnpm dev
   ```
4. Open your browser and navigate to `http://localhost:5173` to see the app in action.

---

## 🌐 Deploying to Vercel

Deploy your app to Vercel in just a few steps.

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. **Login to Vercel**:
   ```bash
   vercel login
   ```
3. **Deploy the App**:
   - From the project root, run:
     ```bash
     vercel deploy
     ```
   - Follow the prompts to configure your project (e.g., select the project name, framework as Vite).
4. **Access Your Deployed App**:
   - Once deployed, Vercel will provide a URL (e.g., `https://autocomplete-search-bar-chi.vercel.app`).

---

## 📂 Project Structure

Here’s a quick overview of the project files:

```
autosearch-pro/
├── src/
│   ├── components/
│   │   └── SearchBar.tsx       # Autocomplete search bar component
│   ├── App.tsx                 # Main app component
│   ├── index.css               # Minimal CSS styles
│   └── main.tsx                # Entry point
├── public/                     # Static assets
├── package.json                # Dependencies and scripts
├── vite.config.ts              # Vite configuration
└── README.md                   # Project documentation
```

---

## 🎯 Usage

- **Search Bar**: Type in the search bar to see autocomplete suggestions.
- **Debouncing**: The app waits 500ms after you stop typing to fetch suggestions, reducing API calls.
- **Caching**: Previously fetched results are cached, so repeated searches are instant.
- **Minimal UI**: Enjoy a clean, distraction-free design styled with pure CSS.

---

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Built with ❤️ in less than an hour!**  
Happy coding! 🚀