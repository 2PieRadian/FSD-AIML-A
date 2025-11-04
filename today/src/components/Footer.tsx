import { Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200/60 dark:border-white/10 bg-white/60 dark:bg-slate-950/60 backdrop-blur">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-10 text-center text-sm text-slate-600 dark:text-slate-300">
        <div className="flex items-center justify-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500" />
          <span className="font-semibold text-slate-900 dark:text-slate-100">
            AppName
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#about"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            About
          </a>
          <span>·</span>
          <a
            href="#help"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            Help
          </a>
          <span>·</span>
          <a
            href="#privacy"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            Privacy
          </a>
          <span>·</span>
          <a
            href="#terms"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            Terms
          </a>
          <span>·</span>
          <a
            href="#contact"
            className="hover:text-slate-900 dark:hover:text-white"
          >
            Contact
          </a>
        </div>
        <div className="mt-5 flex items-center justify-center gap-5">
          <a
            href="#"
            aria-label="Twitter"
            className="p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5"
          >
            <Twitter size={18} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5"
          >
            <Instagram size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="p-2 rounded-lg hover:bg-slate-900/5 dark:hover:bg-white/5"
          >
            <Linkedin size={18} />
          </a>
        </div>
        <p className="mt-4">© {year} AppName. All rights reserved.</p>
      </div>
    </footer>
  );
}
