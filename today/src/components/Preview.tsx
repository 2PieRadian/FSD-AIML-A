export default function Preview() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
            Your world. Your vibe. Your feed.
          </h3>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A quick peek at the interface you will love.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-sky-500/20 blur-2xl" />
            <div className="relative rounded-[28px] overflow-hidden border border-white/30 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-xl">
              <div className="aspect-[16/10] p-6">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-700 grid grid-rows-6 gap-3">
                  <div className="row-span-1 rounded-lg bg-white/70 dark:bg-white/5"></div>
                  <div className="row-span-5 grid grid-cols-3 gap-3">
                    <div className="col-span-2 rounded-lg bg-white/70 dark:bg-white/5"></div>
                    <div className="col-span-1 grid grid-rows-3 gap-3">
                      <div className="rounded-lg bg-white/70 dark:bg-white/5"></div>
                      <div className="rounded-lg bg-white/70 dark:bg-white/5"></div>
                      <div className="rounded-lg bg-white/70 dark:bg-white/5"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative lg:-mb-14 lg:ml-6">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-pink-500/20 via-purple-500/10 to-sky-500/20 blur-2xl" />
            <div className="relative mx-auto w-64 sm:w-72 rounded-[32px] border border-white/30 dark:border-white/10 bg-white/80 dark:bg-slate-900/60 backdrop-blur shadow-xl p-3">
              <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <div className="aspect-[9/19.5] p-3 grid gap-2">
                  <div className="h-6 rounded-md bg-white/70 dark:bg-white/5"></div>
                  <div className="h-36 rounded-xl bg-white/70 dark:bg-white/5"></div>
                  <div className="h-6 rounded-md bg-white/70 dark:bg-white/5"></div>
                  <div className="h-16 rounded-xl bg-white/70 dark:bg-white/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
