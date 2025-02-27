import "./globals.css";
import { Public_Sans } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const publicSans = Public_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>DaatAI Platform</title>
        <link rel="shortcut icon" href="https://app.daatai.com/favicon.ico" />
        <meta
          name="description"
          content=""
        />
        <meta property="og:title" content="DaatAI Platform" />
        <meta
          property="og:description"
          content="Web application platform showing DaatAI projects."
        />
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DaatAI Platform" />
        <meta
          name="twitter:description"
          content="Web application platform showing DaatAI projects."
        />
        {/* <meta name="twitter:image" content="/images/og-image.png" /> */}
      </head>
      <body className={publicSans.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
