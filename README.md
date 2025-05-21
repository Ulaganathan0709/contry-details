# 🌍 Country Explorer

A simple React app that fetches and displays a list of countries using the [REST Countries API](https://restcountries.com/). Click on a country to view more detailed information about it.

---

## 🚀 Features

- 🌐 Fetches all countries with name and flag
- 🔍 Click a country to view detailed info
- 🌀 Loading indicator while data is fetched
- 📱 Responsive design using Tailwind CSS
- 🌎 Built using React and React Router

---

## 📦 Technologies Used

- [React](https://reactjs.org/)
- [React Router DOM](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [REST Countries API](https://restcountries.com/)

---

## 📁 Project Structure

```
src/
├── components/
│   └── Loading.jsx          // Spinner component
├── pages/
│   ├── CountryList.jsx      // List of countries
│   └── CountryDetails.jsx   // Country details page
├── App.jsx                  // Routes and main app component
└── main.jsx                 // React entry point
```

---

## 🛠️ Installation & Running

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/country-explorer.git
   cd country-explorer
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser at:**

   [http://localhost:5173](http://localhost:5173)

---

## 🌐 Example Routes

- `/` – Displays a grid of all countries
- `/country/India` – Displays details about India

---

## 🔗 Live Demo

👉 [https://your-vercel-app-url.vercel.app](https://your-vercel-app-url.vercel.app)

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, modify, and share for personal or educational purposes.
