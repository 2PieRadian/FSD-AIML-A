export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/30 dark:border-white/10 bg-gradient-to-br from-indigo-500 via-purple-500 to-sky-500 p-8 sm:p-12">
          <div className="absolute -inset-20 opacity-30 blur-3xl bg-[radial-gradient(circle_at_top_left,white,transparent_40%)]" />
          <div className="relative text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              Ready to connect in your own mood?
            </h3>
            <p className="mt-3 text-white/85">Let your feed find your vibe.</p>
            <a
              href="#signup"
              className="mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-slate-900 font-medium shadow-lg animate-[pulse_2.5s_ease-in-out_infinite]"
            >
              Create Your Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
