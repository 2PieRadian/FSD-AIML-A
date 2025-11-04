import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import Preview from "../components/Preview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { features } from "../data/features";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <Navbar />

      <main>
        <Hero />

        <div id="features" className="mt-8">
          {features.map((f, i) => (
            <FeatureSection key={f.id} feature={f} reverse={i % 2 === 1} />
          ))}
        </div>

        <Preview />

        <section className="py-16 sm:py-24" id="testimonials">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-bold">
                Loved by early communities
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300">
                Real words. Real vibes.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  quote: "Finally a feed that respects my headspace.",
                  name: "Ava, Product Designer",
                },
                {
                  quote: "Conversations feel calmer and more meaningful.",
                  name: "Jordan, Community Lead",
                },
                {
                  quote: "It actually helps me create, not just consume.",
                  name: "Kai, Videographer",
                },
              ].map((t, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-6 shadow-sm"
                >
                  <p className="text-slate-700 dark:text-slate-200">
                    “{t.quote}”
                  </p>
                  <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                    {t.name}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-white/30 dark:border-white/10 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-sky-500/10 p-6 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                50k+ meaningful conversations sparked.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center text-slate-600 dark:text-slate-300">
            We’re building a gentler, more intentional social space. Mood-aware,
            privacy-first, and community-driven.
          </div>
        </section>

        <section id="contact" className="py-8">
          <div className="mx-auto max-w-4xl px-6 sm:px-10 text-center text-slate-600 dark:text-slate-300">
            Contact us at hello@example.com
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
