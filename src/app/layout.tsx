import type { Metadata } from "next";
import { Head } from "next/document";
import "./globals.css";
import { arimaFont } from "./fonts/fontsConfig";


export const metadata: Metadata = {
  title: "Rach. Gabriels",
  description: "Fashion Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <body
        className={`${arimaFont.className} antialiased overflow-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
