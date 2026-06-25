import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://veritrust.example.com"),
  title: {
    default: "Veritrust — Trust & Security Platform",
    template: "%s · Veritrust",
  },
  description:
    "Veritrust is the trust infrastructure for modern teams — verifiable identity, real-time fraud defense, and bank-grade compliance, wrapped in a beautifully simple platform.",
  keywords: [
    "trust platform",
    "security",
    "identity verification",
    "fraud prevention",
    "compliance",
    "SOC 2",
  ],
  authors: [{ name: "Veritrust" }],
  openGraph: {
    title: "Veritrust — Trust & Security Platform",
    description:
      "Verifiable identity, real-time fraud defense, and bank-grade compliance in one platform.",
    type: "website",
    siteName: "Veritrust",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritrust — Trust & Security Platform",
    description:
      "Verifiable identity, real-time fraud defense, and bank-grade compliance in one platform.",
  },
};

export const viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
