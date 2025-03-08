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
        <link rel="icon" href="/favicon.ico" />
      </head>
      
      <body
        className={`${arimaFont.className} antialiased overflow-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
