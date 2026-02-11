import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import MoreProjects from "./components/MoreProjects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import OtherProjects from "./pages/OtherProjects";

function App() {
  const [loading, setLoading] = useState(true);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      {loading ? (
        <div className="loader">
          <div className="loader-text">Samadhan</div>
        </div>
      ) : (
        <div className={darkMode ? "dark" : ""}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          <Routes>

            {/* Home Page */}
            <Route
              index
              element={
                <>
                  <Hero />
                  <Projects />
                  <MoreProjects />
                  <Skills />
                  <Contact />
                  <Footer />
                </>
              }
            />

            {/* Other Projects Page */}
            <Route
              path="/other-projects"
              element={
                <>
                  <OtherProjects />
                  <Footer />
                </>
              }
            />

          </Routes>
        </div>
      )}
    </>
  );
}

export default App;
