import Image from "next/image";
import Link from "next/link";

const features = [
  {
    eyebrow: "Overview",
    title: "Everything in view.",
    copy: "CPU, memory, storage, network, battery and thermal state brought together in one clear system overview.",
  },
  {
    eyebrow: "System detail",
    title: "Go deeper when you need to.",
    copy: "Dedicated views make system information approachable without turning your Mac into a wall of numbers.",
  },
  {
    eyebrow: "Desktop widgets",
    title: "Your data. Your desktop.",
    copy: "Keep the system readings you care about nearby with Machra's floating desktop widgets.",
  },
  {
    eyebrow: "Rules & alerts",
    title: "Know when something changes.",
    copy: "Create rules around supported system metrics and receive notifications when conditions you care about occur.",
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <Link href="/" className="brand">
          <Image
            src="/images/machra-logo.png"
            width={42}
            height={42}
            alt="Machra"
            className="brandIcon"
          />
          <span>MACHRA</span>
        </Link>

        <div className="navLinks">
          <a href="#features">Features</a>
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </nav>

      <section className="hero shell">
        <div className="heroCopy">
          <div className="pill">
            <span className="statusDot" />
            Machra 1.0 · Preparing for the Mac App Store
          </div>

          <p className="eyebrow">SYSTEM INTELLIGENCE FOR YOUR MAC</p>

          <h1>
            See your Mac
            <br />
            <span>clearly.</span>
          </h1>

          <p className="heroText">
            Machra brings essential system information into one elegant,
            focused experience — from CPU and memory to storage, network,
            battery, thermal state, widgets and alerts.
          </p>

          <div className="heroActions">
            <a className="primaryButton" href="#features">
              Explore Machra
            </a>

            <div className="comingSoon">Coming soon to the Mac App Store</div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="logoGlow" />
          <Image
            src="/images/machra-logo.png"
            width={720}
            height={720}
            priority
            alt="Machra application icon"
            className="heroLogo"
          />
        </div>
      </section>

      <section className="metrics shell">
        <div>
          <span>CPU</span>
          <strong>Live system activity</strong>
        </div>
        <div>
          <span>Memory</span>
          <strong>Usage at a glance</strong>
        </div>
        <div>
          <span>Thermal</span>
          <strong>macOS thermal state</strong>
        </div>
        <div>
          <span>Network</span>
          <strong>Current throughput</strong>
        </div>
      </section>

      <section className="showcase shell">
        <div className="showcaseIntro">
          <p className="eyebrow">MEET MACHRA</p>

          <h2>
            Your Mac,
            <br />
            understood.
          </h2>

          <p>
            A focused system overview gives you the information that matters,
            while dedicated views let you explore individual areas when you want
            more detail.
          </p>
        </div>

        <div className="appWindow">
          <div className="windowBar">
            <div className="trafficLights">
              <span />
              <span />
              <span />
            </div>

            <div className="windowTitle">
              MACHRA
            </div>

            <div className="windowStatus">
              <span />
              Live
            </div>
          </div>

          <div className="windowContent">
            <div className="previewSidebar">
              <div className="previewBrand">M</div>

              <div className="previewNav active" />
              <div className="previewNav" />
              <div className="previewNav" />
              <div className="previewNav" />
              <div className="previewNav" />
              <div className="previewNav short" />
            </div>

            <div className="previewMain">
              <div className="previewHeading">
                <span>System overview</span>
                <strong>Everything in view</strong>
              </div>

              <div className="previewGrid">
                {["CPU", "Memory", "Disks", "Network", "Battery", "Thermal"].map(
                  (item, index) => (
                    <div className="previewMetric" key={item}>
                      <span>{item}</span>

                      <strong>
                        {index === 5 ? "Nominal" : index === 4 ? "100%" : "—"}
                      </strong>

                      <div className="previewChart">
                        <div style={{ width: `${44 + index * 7}%` }} />
                      </div>
                    </div>
                  ),
                )}
              </div>

              <div className="realScreenshotLabel">
                Real Machra screenshot coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section shell">
        <div className="sectionIntro">
          <p className="eyebrow">BUILT FOR CLARITY</p>
          <h2>Powerful information without the noise.</h2>
          <p>
            Machra is designed to make system monitoring understandable,
            useful and beautiful.
          </p>
        </div>

        <div className="featureGrid">
          {features.map((feature) => (
            <article className="featureCard" key={feature.title}>
              <div className="featureTop">
                <span className="featureDot" />
                <span>{feature.eyebrow}</span>
              </div>

              <div className="screenshotPlaceholder">
                <span>Machra screenshot coming soon</span>
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wideFeature shell">
        <div className="wideCopy">
          <p className="eyebrow">DESIGNED FOR MACOS</p>
          <h2>Quiet when you want it. Detailed when you need it.</h2>
          <p>
            Use the main dashboard when you want the complete view, desktop
            widgets when you want information nearby, or the menu bar when you
            want Machra to stay out of the way.
          </p>
        </div>

        <div className="systemPanel">
          <div className="panelHeader">
            <span>System overview</span>
            <span className="liveBadge">● Live</span>
          </div>

          <div className="panelRows">
            <div>
              <span>CPU</span>
              <strong>System activity</strong>
            </div>
            <div>
              <span>Memory</span>
              <strong>Usage & history</strong>
            </div>
            <div>
              <span>Battery</span>
              <strong>Status & charge</strong>
            </div>
            <div>
              <span>Thermal</span>
              <strong>macOS condition</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="privacyBlock shell">
        <div>
          <p className="eyebrow">LOCAL BY DEFAULT</p>
          <h2>Your Mac&apos;s information stays where it belongs.</h2>
        </div>

        <p>
          Machra is designed around local system information. Optional features
          such as Calendar integration request access only when you choose to
          enable them.
        </p>
      </section>

      <section className="cta shell">
        <Image
          src="/images/machra-logo.png"
          width={92}
          height={92}
          alt=""
          className="ctaLogo"
        />
        <p className="eyebrow">MACHRA 1.0</p>
        <h2>System intelligence for your Mac.</h2>
        <p>Preparing for release on the Mac App Store.</p>
      </section>

      <footer className="footer shell">
        <div>
          <strong>Machra</strong>
          <span>System intelligence for your Mac.</span>
        </div>

        <div className="footerLinks">
          <Link href="/support">Support</Link>
          <Link href="/privacy">Privacy</Link>
          <a
            href="https://github.com/Prevail24"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <span>© 2026 Prevail</span>
      </footer>
    </main>
  );
}