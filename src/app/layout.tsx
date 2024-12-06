'use client'
import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar, ThemeProvider } from "@/components";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider> 
      </body>
    </html>
  );
}
