import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Machra — System intelligence for your Mac",
  description:
    "Machra gives you a clear view of CPU, memory, storage, network, battery, thermal state, widgets, alerts, and more.",
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