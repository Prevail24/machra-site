import Link from "next/link";

const items = [
  {
    title: "Getting started",
    copy: "Learn the Machra system overview and explore each supported system category.",
  },
  {
    title: "Calendar",
    copy: "Calendar integration is optional and access is requested only when you choose to connect it.",
  },
  {
    title: "Notifications",
    copy: "Machra uses macOS notification permissions for supported rules and alerts.",
  },
  {
    title: "Desktop widgets",
    copy: "Create and manage floating system widgets directly from Machra.",
  },
  {
    title: "Menu bar",
    copy: "Choose which supported system readings stay available from your menu bar.",
  },
  {
    title: "Settings & rules",
    copy: "Configure preferences, supported alert conditions, and display behavior.",
  },
];

export default function Support() {
  return (
    <main className="subpage shell">
      <nav className="subpageNav">
        <Link href="/">← Machra</Link>

        <div>
          <Link href="/privacy">Privacy</Link>
        </div>
      </nav>

      <header className="subpageHero">
        <p className="eyebrow">MACHRA SUPPORT</p>

        <h1>
          Here when
          <br />
          you need it.
        </h1>

        <p>
          Help with Machra&apos;s system views, widgets, permissions,
          notifications, and other supported features.
        </p>
      </header>

      <section className="supportGrid">
        {items.map((item) => (
          <article className="supportCard" key={item.title}>
            <span className="supportMark" />
            <h2>{item.title}</h2>
            <p>{item.copy}</p>
          </article>
        ))}
      </section>

      <section className="contactPanel">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Need more help?</h2>
        </div>

        <p>
          Direct Machra support contact information will be available before
          the public Mac App Store release.
        </p>
      </section>
    </main>
  );
}