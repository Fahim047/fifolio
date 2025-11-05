import Footer from "@/components/Footer";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fahimul Islam: Portfolio",
  description:
    "Passionate full-stack web developer with a love for JavaScript and Golang.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          color: "var(--color-foreground)",
          backgroundColor: "var(--color-background)",
        }}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="max-w-3xl mx-auto px-4">
            <Navbar />
            <main className="mt-2 min-h-[500px] pb-12">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
