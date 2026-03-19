import type { Metadata } from "next";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | MarketHand",
  description:
    "Privacy Policy for the MarketHand investing education app, including data practices, user rights, and contact information.",
};

const LAST_UPDATED = "March 20, 2026";
const CONTACT_EMAIL = "contact@markethand.com";
const PRIVACY_TEAM_EMAIL = "privacyIssues@markethand.com";
const COMPANY_NAME = "MarketHand";
const COMPANY_ADDRESS = "St. Gallen";
const JURISDICTION = "St. Gallen";
const INFRASTRUCTURE_LOCATION = "St. Gallen";

type Section = {
  id: string;
  title: string;
  body: React.ReactNode;
};

const sections: Section[] = [
  {
    id: "overview",
    title: "Overview",
    body: (
      <>
        <p>
          This Privacy Policy explains how {COMPANY_NAME} (&quot;we,&quot;
          &quot;us,&quot; or &quot;our&quot;) collects, uses, and shares
          information when you use our investing education app (the
          &quot;App&quot;) and optional web landing experiences (the
          &quot;Site&quot;). The App provides gamified, visual learning about
          investing concepts and market behavior. The App is for educational
          purposes only and does not provide investment, tax, or legal advice,
          nor does it support brokerage execution.
        </p>
      </>
    ),
  },
  {
    id: "what-we-do",
    title: "What The App Does (Educational Only)",
    body: (
      <>
        <p>
          The App delivers short, interactive scenarios, learning modules, and
          decision-based activities designed to help users understand investing
          fundamentals. We do not provide personalized financial advice, we do
          not recommend specific securities, and we do not execute trades or
          transmit orders to brokerages. Any simulated or illustrative content
          is for learning and does not represent real investment performance.
        </p>
      </>
    ),
  },
  {
    id: "data-collection",
    title: "Information We Collect",
    body: (
      <>
        <h3>Account Data</h3>
        <p>
          If you create an account, we may collect your email address, username,
          and authentication identifiers provided by your sign-in method (for
          example, OAuth tokens or device-based identifiers from an auth
          provider).
        </p>
        <h3>Usage Analytics</h3>
        <p>
          We collect analytics about how the App is used, such as session
          duration, feature interactions, completion of learning activities,
          and in-app navigation. These events help us understand what is useful
          and improve the experience.
        </p>
        <h3>Device And App Data</h3>
        <p>
          We may collect device and app information such as operating system,
          device model, app version, language, time zone, crash logs, and
          diagnostics data. We may also use device or advertising identifiers if
          enabled or required for analytics and fraud prevention.
        </p>
        <h3>Feedback And Support Messages</h3>
        <p>
          If you contact us, we collect the content of your messages, contact
          details, and any attachments you send.
        </p>
        <h3>What We Do Not Intentionally Collect</h3>
        <p>
          We do not intentionally collect sensitive personal data such as
          government-issued IDs, precise location, biometric data, or financial
          account numbers unless we explicitly request it for a specific feature
          and provide a clear notice at the time of collection.
        </p>
      </>
    ),
  },
  {
    id: "why-we-collect",
    title: "Why We Collect Information",
    body: (
      <>
        <p>We use the information we collect to:</p>
        <ul>
          <li>Authenticate users and secure accounts.</li>
          <li>Provide and improve core App functionality and content.</li>
          <li>Measure performance, stability, and product effectiveness.</li>
          <li>Respond to support requests and user feedback.</li>
          <li>Detect, prevent, and investigate fraud or abuse.</li>
          <li>Comply with applicable laws and obligations.</li>
        </ul>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal Basis (Where Applicable)",
    body: (
      <>
        <p>
          If you are located in a region with data protection laws such as the
          GDPR, our legal bases for processing include: (a) performance of a
          contract (providing the App), (b) legitimate interests (product
          improvement, safety, and fraud prevention), (c) your consent (for
          optional features or marketing where required), and (d) compliance
          with legal obligations. Where we rely on consent, you may withdraw it
          at any time.
        </p>
        <p>
          Final applicability of these bases depends on your jurisdiction and
          the services you use. Please consult local guidance if needed.
        </p>
      </>
    ),
  },
  {
    id: "storage-security",
    title: "How We Store And Protect Data",
    body: (
      <>
        <p>
          We use industry-standard safeguards such as encryption in transit,
          access controls, and least-privilege policies. Access to personal data
          is limited to authorized personnel and service providers who need it
          to operate the App. No system is 100% secure, but we maintain
          reasonable measures appropriate for the nature of the data.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    body: (
      <>
        <p>
          We retain personal data only as long as needed for the purposes
          described in this policy, unless a longer retention period is required
          by law. We may retain aggregated or de-identified data for analytics
          and product research.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Data Sharing",
    body: (
      <>
        <p>
          We do not sell personal information. We only share data with service
          providers, legal authorities when required, or in connection with a
          merger, acquisition, or asset sale. We require processors to protect
          data and use it only for authorized purposes.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International Transfers",
    body: (
      <>
        <p>
          If we store or process information outside of your country, we take
          steps to ensure appropriate safeguards are in place, such as standard
          contractual clauses or other lawful transfer mechanisms. Our primary
          infrastructure is located in {INFRASTRUCTURE_LOCATION}.
        </p>
      </>
    ),
  },
  {
    id: "user-rights",
    title: "Your Rights And Choices",
    body: (
      <>
        <p>
          Depending on your location, you may have rights to access, correct,
          delete, or port your personal data, and to object to or restrict
          certain processing. You may also withdraw consent at any time when
          consent is the legal basis.
        </p>
        <p>
          To submit a request, contact us at {PRIVACY_TEAM_EMAIL}. We typically
          respond within 30 days, though local law may provide different
          timelines. We may need to verify your identity before fulfilling a
          request.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    body: (
      <>
        <p>
          The App is not directed to children under 13 (or the minimum age
          required by local law). We do not knowingly collect personal data from
          children. If you believe a child has provided information, please
          contact us so we can delete it.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies And Tracking (Web)",
    body: (
      <>
        <p>
          The App does not use browser cookies. The optional Site may use
          cookies or similar technologies for basic functionality and analytics.
          You can control cookies through your browser settings. Where required,
          we will request consent before setting non-essential cookies.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Policy Changes",
    body: (
      <>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we will provide notice in the App or on the Site and
          update the &quot;Last updated&quot; date above. Continued use after
          changes means you accept the updated policy.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact Us",
    body: (
      <>
        <p>
          If you have questions or requests about privacy, contact our privacy
          team at {PRIVACY_TEAM_EMAIL} or write to:
        </p>
        <p>
          {COMPANY_NAME}
          <br />
          {COMPANY_ADDRESS}
          <br />
          {JURISDICTION}
        </p>
      </>
    ),
  },
];

function SectionBlock({ id, title, body }: Section) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>{title}</h2>
      {body}
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.subtitle}>
            This policy explains how we handle information for the App and any
            related web experiences. It is not a contract and does not create
            legal rights beyond applicable laws.
          </p>
          <div className={styles.updated}>
            <span>Last updated</span>
            <time dateTime="2026-03-20">{LAST_UPDATED}</time>
          </div>
        </header>

        <div className={styles.layout}>
          <nav className={styles.toc} aria-label="Table of contents">
            <p className={styles.tocTitle}>On this page</p>
            <ul className={styles.tocList}>
              {sections.map((section) => (
                <li key={section.id}>
                  <a className={styles.tocLink} href={`#${section.id}`}>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className={styles.content}>
            {sections.map((section) => (
              <SectionBlock key={section.id} {...section} />
            ))}

            <section className={styles.callout} aria-label="Contact privacy team">
              <h3>Contact the privacy team</h3>
              <p>
                For privacy questions, requests, or concerns, email{" "}
                <a href={`mailto:${PRIVACY_TEAM_EMAIL}`}>
                  {PRIVACY_TEAM_EMAIL}
                </a>
                . We will confirm receipt and provide next steps.
              </p>
              <p className={styles.footerNote}>
                Placeholder details above should be reviewed by legal counsel
                for your jurisdiction.
              </p>
            </section>

            <div className={styles.footerNote}>
              <a className={styles.tocLink} href="/privacy">
                Privacy Policy
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
