import { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const enable = stored ? stored === "dark" : prefersDark;
    setIsDark(enable);
    root.classList.toggle("dark", enable);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  const baseClasses =
    "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500";
  const transparent = "w-full top-0 px-6 sm:px-10 py-5";
  const floating =
    "w-[85%] sm:w-[80%] top-4 px-5 sm:px-8 py-3 rounded-2xl backdrop-blur-xl bg-white/60 dark:bg-slate-900/60 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border border-white/30 dark:border-white/10";

  return (
    <header className={`${baseClasses} ${scrolled ? floating : transparent}`}>
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 shadow-inner"></div>
          <span className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            AppName
          </span>
        </div>

        <button
          className="sm:hidden p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-900/5 dark:hover:bg-white/5"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <ul className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
          <li>
            <a
              href="#features"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#login"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="#signup"
              className="inline-flex items-center rounded-lg px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
            >
              Get Started
            </a>
          </li>
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-white/50 dark:bg-white/10 hover:bg-white/70 dark:hover:bg-white/20 border border-white/30 dark:border-white/10"
              aria-label="Toggle theme"
            >
              {isDark ? (
                <Sun size={18} className="text-yellow-300" />
              ) : (
                <Moon size={18} />
              )}
            </button>
          </li>
        </ul>
      </nav>

      {mobileOpen && (
        <div className="sm:hidden mt-3 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-white/10 shadow-xl">
          <div className="px-5 py-4 flex flex-col gap-3 text-slate-800 dark:text-slate-200">
            <a
              href="#features"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Features
            </a>
            <a
              href="#about"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Contact
            </a>
            <a
              href="#login"
              onClick={() => setMobileOpen(false)}
              className="py-2"
            >
              Login
            </a>
            <div className="flex items-center justify-between pt-2">
              <a
                href="#signup"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-lg px-4 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              >
                Get Started
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-white/60 dark:bg-white/10 border border-white/30 dark:border-white/10"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <Sun size={18} className="text-yellow-300" />
                ) : (
                  <Moon size={18} />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
