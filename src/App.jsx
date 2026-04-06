import Header from "./components/Header";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hour = new Date().getHours();
    setTheme(hour >= 7 && hour < 21 ? "light" : "dark");
  }, []);

  return (
    <div className={`${theme} container`}>

      <button onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }>
        Toggle Theme
      </button>

      <Header />

      <div className="main">
        <aside className="sidebar">
          <Education />
        </aside>

        <div className="content">
          <Experience />
          <Reviews />
        </div>
      </div>

      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;