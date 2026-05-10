import type { Metadata } from "next";
import { Inter, Space_Grotesk, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Charul Chodvadiya — AI Engineer | Researcher | Builder",
  description:
    "AI Engineer building intelligent systems. Specializing in LLMs, Computer Vision, Generative AI, and scalable AI infrastructure. Researcher at IIT Bombay/IIT Hyderabad. Gold Medalist — MTech AI.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "Computer Vision",
    "LLMs",
    "Generative AI",
    "AI Researcher",
    "Deep Learning",
    "Charul Chodvadiya",
  ],
  authors: [{ name: "Charul Chodvadiya" }],
  openGraph: {
    title: "Charul Chodvadiya — AI Engineer | Researcher | Builder",
    description:
      "Researching and engineering the future of AI. Building intelligent systems across LLMs, Computer Vision, and Generative AI.",
    type: "website",
    locale: "en_US",
    url: "https://charulp2499.github.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "Charul Chodvadiya — AI Engineer | Researcher | Builder",
    description:
      "Researching and engineering the future of AI. Building intelligent systems across LLMs, Computer Vision, and Generative AI.",
    creator: "@charulp2499",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-background text-foreground" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
