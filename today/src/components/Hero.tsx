export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-gradient-to-r from-indigo-400/30 via-fuchsia-400/20 to-sky-400/30 blur-3xl"></div>
        <svg
          className="absolute bottom-0 left-0 right-0"
          viewBox="0 0 1440 320"
          aria-hidden
        >
          <path
            fill="currentColor"
            className="text-slate-900/5 dark:text-white/5"
            d="M0,160L60,176C120,192,240,224,360,213.3C480,203,600,149,720,122.7C840,96,960,96,1080,101.3C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-slate-900 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Connect. Share. Inspire.
            <br />
            Discover Your True Self.
          </h1>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto md:mx-0">
            A social space that adapts to your vibe — not the other way around.
            Thoughtful, human, and mood-aware.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-start justify-center">
            <a
              href="#signup"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-lg shadow-slate-900/10 dark:shadow-white/10 hover:opacity-90"
            >
              Join Now
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-white/10 backdrop-blur hover:bg-white/90 dark:hover:bg-slate-900/80"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-indigo-500/30 via-fuchsia-500/20 to-sky-500/30 blur-2xl"></div>
          <div className="relative rounded-[28px] overflow-hidden border border-white/30 dark:border-white/10 backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow-xl">
            <div className="aspect-[5/3] bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-700 grid place-items-center">
              <div className="text-center">
                <div className="mx-auto h-24 w-24 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500"></div>
                <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                  Modern hero illustration placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
