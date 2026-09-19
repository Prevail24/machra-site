# Machra

**System intelligence for your Mac.**

[Machra](https://machra.app) is a macOS system-monitoring application designed to present useful system information in a clear, focused, and visually polished interface.

This repository contains the **public website, support pages, and privacy information** for Machra.

> **Project status:** Machra 1.0 — preparing for Mac App Store release.

---

## 🌐 Live Site

**Website:** [https://machra.app](https://machra.app)

- Marketing: [https://machra.app](https://machra.app)
- Support: [https://machra.app/support](https://machra.app/support)
- Privacy: [https://machra.app/privacy](https://machra.app/privacy)

---

## About Machra

Machra provides a unified view of supported macOS system information, including:

- CPU activity
- Per-core CPU usage
- Memory usage
- Disk capacity
- Network activity
- Battery status
- Thermal state
- GPU information
- Desktop widgets
- Menu bar monitoring
- Rules and alerts
- Optional Calendar integration
- Local clocks and astronomy information

Machra is designed around a simple idea:

> **Powerful system information without the noise.**

The application focuses on clarity, useful telemetry, and a desktop experience that feels at home on macOS.

---

## 🖥 Website

The Machra website is built with:

- **Next.js**
- **TypeScript**
- **React**
- **Tailwind CSS**
- **Cloudflare**
- **GitHub**

The production website is deployed through Cloudflare and connected to this GitHub repository.

---

## Project Structure

```text
machra-site/
├── public/
│   ├── images/
│   │   └── machra-logo.png
│   └── screenshots/
│       ├── machra-overview.png
│       ├── machra-cpu.png
│       ├── machra-widgets.png
│       └── machra-rules-alerts.png
│
├── src/
│   └── app/
│       ├── page.tsx
│       ├── layout.tsx
│       ├── globals.css
│       ├── icon.png
│       ├── apple-icon.png
│       ├── support/
│       │   └── page.tsx
│       └── privacy/
│           └── page.tsx
│
├── package.json
├── next.config.ts
└── README.md
```

---

## Local Development

Clone the repository:

```bash
git clone https://github.com/Prevail24/machra-site.git
cd machra-site
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

The site supports Next.js hot reloading, so changes appear automatically while the development server is running.

---

## Production Build

Create an optimized production build:

```bash
npm run build
```

Run the production server locally:

```bash
npm start
```

The current site is statically prerendered where possible for fast delivery and simple deployment.

---

## Deployment

The production site is deployed through **Cloudflare**.

The primary domain is:

```text
https://machra.app
```

The canonical domain is:

```text
machra.app
```

Requests to:

```text
www.machra.app
```

are redirected to the root domain.

Deployment is tied to this GitHub repository so updates pushed to the production branch can be automatically deployed.

---

## Privacy

Machra is designed around local system information.

Optional permissions such as Calendar access and notifications are requested only when the associated feature is used.

The public privacy page is available at:

[https://machra.app/privacy](https://machra.app/privacy)

The privacy documentation will continue to reflect the behavior of the version distributed through the Mac App Store.

---

## Support

Machra support information is available at:

[https://machra.app/support](https://machra.app/support)

Additional documentation and troubleshooting information will be added as Machra approaches public release.

---

## Screenshots

The website includes real Machra application screenshots showing:

- System Overview
- CPU monitoring
- Desktop widgets
- Rules and alerts

Development-build screenshots may be used during site development.

Final App Store release screenshots will replace development-build imagery prior to the public release of Machra 1.0.

---

## Repository Scope

This repository contains **only the public Machra website**.

The Machra application source code, packaging infrastructure, signing configuration, release tooling, test infrastructure, and internal engineering documentation are maintained separately in a **private repository**.

This separation allows the public website and support resources to remain open while protecting the implementation and release infrastructure of the Machra application itself.

---

## Roadmap

### Machra 1.0

Machra 1.0 is currently feature-frozen while preparing for Mac App Store distribution.

Planned 1.0 functionality includes:

- Mac App Store release
- System overview
- CPU monitoring
- Per-core CPU usage
- Memory monitoring
- Disk capacity
- Network activity
- Battery information
- Thermal state
- GPU information
- Desktop widgets
- Menu bar monitoring
- Rules and alerts
- Optional Calendar integration
- Local clocks and astronomy information

### Machra 1.1 and Beyond

Future development areas include:

- Enhanced visual telemetry
- Richer per-core CPU meters
- Memory composition visualization
- Improved network upload/download displays
- Disk capacity visualization
- Battery history visualization
- Thermal-state gauge
- Visual rule thresholds
- Expanded widget layouts
- Condensed telemetry components for widgets
- Customizable **System Overview / All Systems** desktop widget
- Continued GPU information improvements using supported macOS APIs

Machra 1.0 remains frozen while these ideas are reserved for future releases.

---

## Design Philosophy

Machra is built around a consistent visual telemetry model:

**Number → Meter → History → Context**

The goal is not to fill the screen with gauges and charts.

Each visualization should communicate information that the raw number alone cannot, while maintaining Machra's focused macOS design language.

The product emphasizes:

- clarity
- restrained visual design
- useful telemetry
- truthful representation of system information
- local-first behavior
- consistency across the main app, desktop widgets, and menu bar

---

## Brand

### Machra

**System intelligence for your Mac.**

Website: [https://machra.app](https://machra.app)

GitHub: [https://github.com/Prevail24/machra-site](https://github.com/Prevail24/machra-site)

---

## Copyright

© 2026 Prevail Labs

All rights reserved.