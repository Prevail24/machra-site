import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://machra.app"),

  title: {
    default: "Machra — System intelligence for your Mac",
    template: "%s | Machra",
  },

  description:
    "Machra brings CPU, memory, storage, network, battery, thermal state, desktop widgets, alerts and more into one focused macOS experience.",

  applicationName: "Machra",

  alternates: {
    canonical: "https://machra.app",
  },

  openGraph: {
    title: "Machra — System intelligence for your Mac",
    description:
      "See your Mac clearly with a focused system overview, desktop widgets, alerts and more.",
    url: "https://machra.app",
    siteName: "Machra",
    images: [
      {
        url: "/images/machra-logo.png",
        width: 1200,
        height: 1200,
        alt: "Machra application icon",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Machra — System intelligence for your Mac",
    description:
      "See your Mac clearly with system monitoring, desktop widgets, alerts and more.",
    images: ["/images/machra-logo.png"],
  },

  icons: {
    icon: "/images/machra-logo.png",
    apple: "/images/machra-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}