import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import Lenis from "@studio-freight/lenis";
import About from "./pages/About";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Header from "./pages/Header";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // smoothness
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easing function
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen overflow-x-hidden">
      <Header/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
                <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/work" element={<Work />} />

      </Routes>
    </div>
  );
}

export default App;
