import Image from "next/image";
import Link from "next/link";

export default function SiteNav({ current }: { current?: "download" }) {
  return (
    <nav className="nav shell" aria-label="Main navigation">
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
        <Link href={current ? "/#features" : "#features"}>Features</Link>
        <Link href="/download" className="navDownload" aria-current={current ? "page" : undefined}>
          Download
        </Link>
        <Link href="/support">Support</Link>
        <Link href="/privacy">Privacy</Link>
      </div>
    </nav>
  );
}
