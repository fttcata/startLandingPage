import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function LandingPage() {
  return (
    <main className="lp-root">
      <div className="lp-glow lp-glow-a" />
      <div className="lp-glow lp-glow-b" />
      <motion.section
        className="lp-hero"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.p variants={item} className="lp-eyebrow">
          INVESTING EDUCATION, REIMAGINED
        </motion.p>
        <motion.h1 variants={item} className="lp-title">
          From investment anxiety to investment clarity, one decision at a time.
        </motion.h1>
        <motion.p variants={item} className="lp-sub">
          Learn investing through fast, visual, gamified decisions rooted in
          real market behavior, financial statements, and macro events.
        </motion.p>
        <motion.div variants={item} className="lp-cta-row">
          <a href="#" className="lp-btn lp-btn-primary">
            Join Waitlist
          </a>
          <a href="#" className="lp-btn lp-btn-secondary">
            Watch Demo
          </a>
        </motion.div>
      </motion.section>

      <motion.section
        className="lp-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.article variants={item} className="lp-card">
          <h2>Problem</h2>
          <p>
            Picture this: someone just won the lottery and now has serious
            capital to deploy. They want to invest, but every source says
            something different, the charts are intimidating, and one mistake
            feels expensive. So they freeze.
          </p>
        </motion.article>

        <motion.article variants={item} className="lp-card">
          <h2>Solution</h2>
          <p>
            Our iOS app teaches investing in a gamified, highly visual format.
            Short scenario cards, real market context, and fast interactions
            keep learning engaging in an attention-span economy without
            sacrificing depth.
          </p>
        </motion.article>

        <motion.article variants={item} className="lp-card">
          <h2>Outcome</h2>
          <p>
            The learner builds practical confidence, understands risk and
            decision-making, and can start investing with an actual plan instead
            of fear. Not hype, not guessing, just informed action.
          </p>
        </motion.article>
      </motion.section>

      <motion.section
        className="lp-metrics"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
      >
        <motion.div variants={item} className="lp-metric">
          <strong>Gamified</strong>
          <span>Learning Format</span>
        </motion.div>
        <motion.div variants={item} className="lp-metric">
          <strong>iOS</strong>
          <span>Primary Platform</span>
        </motion.div>
        <motion.div variants={item} className="lp-metric">
          <strong>Decision-first</strong>
          <span>Practical Outcome</span>
        </motion.div>
      </motion.section>
    </main>
  );
}
