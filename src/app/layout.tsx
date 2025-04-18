import type { Metadata } from "next";
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
      <head>
        <meta name="google-site-verification" content="uP_yl-P8Wih40ZlTHhlu0HuqjCQ8kOk3E3N0QlOOT-w" />
        <meta name="google-site-verification" content="QbUFUNsKbnm6wDkfkRnhrWDRlGgG61pjdhm2N0ckfkI" />
        <link rel="icon" href="favicon.ico" type="image/x-icon"></link>
        <link rel="canonical" href="https://www.rachgabriels.com.ng/" />
      </head>
      <body
        className={`${arimaFont.className} antialiased overflow-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
