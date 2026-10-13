import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import styles from "./page.module.css";

const description =
  "Machra for Mac. Direct download coming soon. Explore the planned distribution options and intended system requirements.";

export const metadata: Metadata = {
  title: "Download — Coming soon",
  description,
  alternates: { canonical: "https://machra.app/download" },
  openGraph: {
    title: "Machra for Mac — Direct download coming soon",
    description,
    url: "https://machra.app/download",
    siteName: "Machra",
    type: "website",
    images: [{ url: "/images/machra-logo.png", width: 1200, height: 1200, alt: "Machra application icon" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Machra for Mac — Direct download coming soon",
    description,
    images: ["/images/machra-logo.png"],
  },
};

export default function Download() {
  return (
    <main className={styles.page}>
      <SiteNav current="download" />

      <section className={`${styles.hero} shell`} aria-labelledby="download-title">
        <header className={styles.heroCopy}>
          <div className={`pill ${styles.status}`}>
            <span className="statusDot" aria-hidden="true" />
            Direct download coming soon.
          </div>
          <p className="eyebrow">DESIGNED FOR MACOS</p>
          <h1 id="download-title">Machra<br /><span>for Mac</span></h1>
          <p className={styles.tagline}>System intelligence for your Mac.</p>
          <p className={styles.intro}>
            A clearer view of your Mac is on its way. We&apos;re preparing
            Machra for release and will share availability here when it&apos;s ready.
          </p>
        </header>

        <section className={`systemPanel ${styles.releasePanel}`} aria-labelledby="direct-edition-title">
          <div className="panelHeader">
            <span>Direct edition</span>
            <span className={styles.soon}>Coming soon</span>
          </div>
          <div className={styles.product}>
            <Image src="/images/machra-logo.png" width={80} height={80} alt="" />
            <div>
              <h2 id="direct-edition-title">Machra for Mac</h2>
              <p>From machra.app</p>
            </div>
          </div>
          <dl className={styles.releaseDetails}>
            <div><dt>Price</dt><dd>To be announced</dd></div>
            <div><dt>License / account status</dt><dd>Not available yet</dd></div>
          </dl>
          <div className={styles.actions}>
            <button type="button" className={`primaryButton ${styles.buy}`} disabled aria-describedby="release-status">
              Buy Machra
            </button>
            <button type="button" className={styles.download} disabled aria-describedby="release-status">
              Download
            </button>
          </div>
          <p id="release-status" className={styles.releaseStatus}>
            Coming soon. Purchases and downloads are not available yet.
          </p>
        </section>
      </section>

      <div className={`supportGrid shell ${styles.details}`}>
        <section className="supportCard" aria-labelledby="editions-title">
          <span className="supportMark" aria-hidden="true" />
          <h2 id="editions-title">Two planned ways to get Machra.</h2>
          <p>
            Machra is being prepared for Mac App Store distribution and direct
            distribution from machra.app. Details for each edition will be
            announced ahead of release.
          </p>
        </section>
        <section className="supportCard" aria-labelledby="requirements-title">
          <span className="supportMark" aria-hidden="true" />
          <h2 id="requirements-title">Intended system requirements.</h2>
          <ul className={styles.requirements}>
            <li>macOS 14 or later</li>
            <li>Apple silicon</li>
          </ul>
          <p>Requirements are subject to final release qualification.</p>
        </section>
      </div>

      <section className={`shell ${styles.trust}`} aria-labelledby="trust-title">
        <p className="eyebrow">DIRECT FROM MACHRA</p>
        <h2 id="trust-title">A considered path to your Mac.</h2>
        <p>Future direct builds are intended to be:</p>
        <ul className={styles.trustList}>
          <li><span>01</span>Signed with Apple Developer ID</li>
          <li><span>02</span>Notarized by Apple</li>
          <li><span>03</span>Distributed from machra.app</li>
        </ul>
        <p className={styles.trustNote}>
          Final release and download details will be shared here when available.
        </p>
      </section>

      <footer className="footer shell">
        <div><strong>Machra</strong><span>System intelligence for your Mac.</span></div>
        <div className="footerLinks">
          <Link href="/">Home</Link>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
        <span>© 2026 Prevail Industries</span>
      </footer>
    </main>
  );
}
