import Link from "next/link";

export default function Privacy() {
  return (
    <main className="subpage shell">
      <nav className="subpageNav">
        <Link href="/">← Machra</Link>

        <div>
          <Link href="/support">Support</Link>
        </div>
      </nav>

      <header className="subpageHero privacyHero">
        <p className="eyebrow">PRIVACY</p>

        <h1>
          Your Mac.
          <br />
          Your information.
        </h1>

        <p>
          Machra is designed around local system information and optional
          permissions that you control.
        </p>
      </header>

      <article className="privacyArticle">
        <section>
          <span>01</span>
          <div>
            <h2>System information</h2>
            <p>
              Machra uses information made available by macOS to display
              supported readings such as CPU activity, memory usage, disk
              capacity, network activity, battery status and thermal
              condition.
            </p>
          </div>
        </section>

        <section>
          <span>02</span>
          <div>
            <h2>Calendar access</h2>
            <p>
              Calendar integration is optional. Machra requests Calendar
              access only when you choose to connect Calendar functionality.
            </p>
          </div>
        </section>

        <section>
          <span>03</span>
          <div>
            <h2>Notifications</h2>
            <p>
              Notifications are optional and require permission from macOS.
              Machra uses them for supported rules and alerts when those
              features are enabled.
            </p>
          </div>
        </section>

        <section>
          <span>04</span>
          <div>
            <h2>Accounts</h2>
            <p>
              Machra does not require a Machra account to use its core system
              monitoring features.
            </p>
          </div>
        </section>

        <section>
          <span>05</span>
          <div>
            <h2>Pre-release status</h2>
            <p>
              Machra 1.0 is currently undergoing release qualification. This
              page will be updated as necessary to reflect the exact privacy
              behavior and disclosures of the version distributed through the
              Mac App Store.
            </p>
          </div>
        </section>
      </article>

      <p className="lastUpdated">Last updated September 2026</p>
    </main>
  );
}