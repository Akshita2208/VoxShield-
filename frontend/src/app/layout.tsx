import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PageBackground } from "@/components/background/background-system";
import { TopNav } from "@/components/navigation/top-nav";
import { MobileSideNav } from "@/components/navigation/mobile-side-nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VoxShield",
  description: "Real-Time AI Voice Identity & Anti-Spoofing Security Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <PageBackground>
            <TopNav />
            <MobileSideNav />
            <main className="flex-1 flex flex-col w-full h-full relative z-10 pt-16">
              {children}
            </main>
          </PageBackground>
        </ThemeProvider>
      </body>
    </html>
  );
}
