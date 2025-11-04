import { useEffect, useRef, useState } from "react";
import Modal from "./Modal.tsx";
import type { Feature } from "../data/features";

type FeatureSectionProps = {
  feature: Feature;
  reverse?: boolean;
};

export default function FeatureSection({
  feature,
  reverse,
}: FeatureSectionProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current as HTMLElement | null;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id={feature.id}
      className={`mx-auto max-w-6xl px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 sm:py-24 ${
        reverse ? "md:[&>:first-child]:order-2" : ""
      }`}
    >
      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
          {feature.title}
        </h3>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-xl">
          {feature.blurb}
        </p>
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center rounded-xl px-5 py-2.5 bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90"
          >
            Learn More
          </button>
        </div>
      </div>

      <div
        className={`relative transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {feature.mood ? (
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] animate-pulse bg-gradient-to-br from-pink-500/20 via-purple-500/15 to-sky-500/20 blur-2xl" />
            <div className="relative aspect-[5/3] rounded-[28px] overflow-hidden border border-white/30 dark:border-white/10 bg-slate-50 dark:bg-slate-800 shadow-xl">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.imageTone} opacity-70 animate-[gradientShift_8s_ease_infinite]`}
              />
              <div className="relative h-full w-full grid place-items-center">
                <div className="text-center px-6">
                  <p className="text-sm uppercase tracking-widest text-slate-700/80 dark:text-slate-300/80">
                    Mood Feed
                  </p>
                  <h4 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">
                    Your vibe, your feed
                  </h4>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">
                    Pastel glow shifts gently with your mood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute -inset-6 rounded-[28px] bg-gradient-to-br from-slate-400/20 to-slate-600/10 blur-2xl" />
            <div className="relative aspect-[5/3] rounded-[28px] overflow-hidden border border-white/30 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur shadow-xl grid place-items-center">
              <div
                className={`h-24 w-24 rounded-2xl bg-gradient-to-br ${feature.imageTone}`}
              ></div>
            </div>
          </div>
        )}
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title={feature.title}>
        <p className="text-slate-600 dark:text-slate-300">{feature.detail}</p>
      </Modal>
    </section>
  );
}

// keyframes via tailwind arbitrary name
// Add these via global layer if needed; Tailwind v4 supports arbitrary keyframes name with animate-[name]
