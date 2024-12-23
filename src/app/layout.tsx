"use client";
import "./globals.css";
import { Footer, ThemeProvider } from "@/components";
import fonts from "@/constant/fonts";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Navbar = dynamic(
  () => import("@/components/navbar").then((components) => components.Navbar),
  {
    ssr: false,
  }
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>X-META</title>
      </head>
      <body className={(cn(fonts.className))}>
        <ThemeProvider
          attribute="class"
          defaultTheme="systen"
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
