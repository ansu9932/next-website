import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://nextapp.in"),
  title: {
    default: "next. — Fast Local Delivery in Contai",
    template: "%s · next.",
  },
  description:
    "next. delivers groceries, medicines, snacks and daily essentials to your door in minutes from trusted local stores in Contai (Kanthi), West Bengal. Live tracking, fair transparent pricing, UPI or cash on delivery.",
  applicationName: "next.",
  keywords: [
    "next app",
    "fast delivery Contai",
    "grocery delivery Kanthi",
    "quick commerce West Bengal",
    "medicine delivery",
    "local store delivery",
    "Moolya India",
  ],
  authors: [{ name: "Moolya India Private Limited" }],
  creator: "Moolya India Private Limited",
  openGraph: {
    title: "next. — Fast Local Delivery in Contai",
    description:
      "Groceries, medicines & daily essentials delivered to your door in minutes. Shop local, delivered fast.",
    type: "website",
    siteName: "next.",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "next. — Fast Local Delivery in Contai",
    description:
      "Groceries, medicines & daily essentials delivered to your door in minutes.",
  },
};

export const viewport = {
  themeColor: "#0f172a",
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
