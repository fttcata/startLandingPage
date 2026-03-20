"use client";

import { cubicBezier, motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: cubicBezier(0.22, 1, 0.36, 1),
    },
  },
};

const steps = [
  {
    label: "Step 01",
    title: "Swipe a real-world scenario",
    copy: "Start a session and face a realistic market moment with two clear choices.",
  },
  {
    label: "Step 02",
    title: "Choose and learn instantly",
    copy: "Get immediate feedback tied to risk, behavior, and market fundamentals.",
  },
  {
    label: "Step 03",
    title: "Build a decision playbook",
    copy: "Unlock decks, refine your approach, and grow confidence over time.",
  },
];

const features = [
  {
    title: "Adaptive learning flow",
    copy: "Personas and traits shape the learning path so content matches your behavior.",
  },
  {
    title: "Decks and progression",
    copy: "Core, themed, and premium decks with unlocks that reward mastery.",
  },
  {
    title: "Behavior-first education",
    copy: "Scenario realism trains decision-making, not just knowledge recall.",
  },
  {
    title: "Macro + fundamentals",
    copy: "Inflation, sentiment, volatility, and financial statements woven into play.",
  },
  {
    title: "Achievements and milestones",
    copy: "Track progress, session streaks, and skill milestones as you improve.",
  },
  {
    title: "Safe simulation",
    copy: "Educational only. No brokerage execution, no real-money trades.",
  },
];

const faqs = [
  {
    q: "Is this a brokerage app?",
    a: "No. MarketHand is an educational simulation focused on learning, not execution.",
  },
  {
    q: "Does it give financial advice?",
    a: "No. It teaches concepts and decision-making without personalized advice.",
  },
  {
    q: "How is it different from courses?",
    a: "It is interactive and behavior-led, using short scenarios and instant feedback.",
  },
  {
    q: "Is there a web version?",
    a: "The core experience is iOS-first, with optional web landing access.",
  },
];

export default function LandingPage() {
  return (
    <main className="lp-root">
      <div className="lp-glow lp-glow-a" />
      <div className="lp-glow lp-glow-b" />
      <div className="lp-gridlines" aria-hidden="true" />

      <motion.section
        className="lp-hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="lp-kicker">
          <span>MARKETHAND</span>
          <span className="lp-kicker-dot" />
          <span>INVESTING EDUCATION</span>
        </motion.div>
        <motion.h1 variants={item} className="lp-title">
          From investment anxiety to investment clarity, one decision at a time.
        </motion.h1>
        <motion.p variants={item} className="lp-sub">
          A gamified, iOS-first investing education app that builds confidence
          through real-world scenarios, behavioral finance, and market context.
        </motion.p>
        <motion.div variants={item} className="lp-hero-meta">
          <span>Not financial advice</span>
          <span>Educational simulation only</span>
          <span>No brokerage execution</span>
        </motion.div>
      </motion.section>

      <motion.section
        className="lp-story"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.article variants={item} className="lp-card">
          <h2>Problem</h2>
          <p>
            You have money to invest, but the advice is inconsistent, the charts
            are intimidating, and the fear of making a costly mistake is real.
            Decision paralysis takes over.
          </p>
        </motion.article>
        <motion.article variants={item} className="lp-card">
          <h2>Solution</h2>
          <p>
            MarketHand teaches investing through fast, visual, swipe-based
            scenarios grounded in market sentiment, inflation, volatility,
            fundamentals, and behavioral finance.
          </p>
        </motion.article>
        <motion.article variants={item} className="lp-card">
          <h2>Outcome</h2>
          <p>
            You build practical confidence, understand risk and tradeoffs, and
            start investing with a plan instead of fear.
          </p>
        </motion.article>
      </motion.section>

      <motion.section
        className="lp-steps"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.header variants={item} className="lp-section-head">
          <p className="lp-eyebrow">How it works</p>
          <h2>Three steps to confident decisions</h2>
          <p>
            A short session format that fits attention spans without sacrificing
            depth.
          </p>
        </motion.header>
        <div className="lp-step-grid">
          {steps.map((step) => (
            <motion.article key={step.title} variants={item} className="lp-step">
              <span className="lp-step-label">{step.label}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="lp-features"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.header variants={item} className="lp-section-head">
          <p className="lp-eyebrow">Feature highlights</p>
          <h2>Built for real decision-making</h2>
          <p>
            Not a textbook. Not a brokerage. A practical training ground for
            modern investors.
          </p>
        </motion.header>
        <div className="lp-feature-grid">
          {features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={item}
              className="lp-feature"
            >
              <div className="lp-feature-band" aria-hidden="true" />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="lp-metrics"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div variants={item} className="lp-metric">
          <strong>Swipe-based</strong>
          <span>Scenario learning</span>
        </motion.div>
        <motion.div variants={item} className="lp-metric">
          <strong>Decision-first</strong>
          <span>Behavioral finance focus</span>
        </motion.div>
        <motion.div variants={item} className="lp-metric">
          <strong>Progression</strong>
          <span>Decks, achievements, unlocks</span>
        </motion.div>
        <motion.div variants={item} className="lp-metric">
          <strong>iOS-first</strong>
          <span>Mobile-native experience</span>
        </motion.div>
      </motion.section>

      <motion.section
        className="lp-proof"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.header variants={item} className="lp-section-head">
          <p className="lp-eyebrow">Social proof</p>
          <h2>Built with real learners in mind</h2>
          <p>
            Add testimonials, ratings, or press mentions here once available.
          </p>
        </motion.header>
        <div className="lp-proof-grid">
          {[
            {
              name: "Early access learner",
              quote:
                "“The scenarios feel real. I finally understand why I panic-sell and how to avoid it.”",
            },
            {
              name: "Behavioral finance coach",
              quote:
                "“MarketHand turns abstract concepts into practical decisions. It’s the missing layer between theory and action.”",
            },
            {
              name: "First-time investor",
              quote:
                "“I stopped guessing. The feedback loop helped me build a plan I can stick to.”",
            },
          ].map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={item}
              className="lp-proof-card"
            >
              <p className="lp-proof-quote">{testimonial.quote}</p>
              <span className="lp-proof-name">{testimonial.name}</span>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="lp-faq"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.header variants={item} className="lp-section-head">
          <p className="lp-eyebrow">FAQ</p>
          <h2>Common questions</h2>
          <p>Clear answers for a confident start.</p>
        </motion.header>
        <div className="lp-faq-grid">
          {faqs.map((faq) => (
            <motion.article key={faq.q} variants={item} className="lp-faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      <footer className="lp-footer">
        <a className="lp-footer-link" href="/privacy">
          Privacy Policy
        </a>
      </footer>
    </main>
  );
}
