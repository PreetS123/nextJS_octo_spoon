import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";
import SearchBox from "@/Components/common/SearchBox";
import {
  ClerkProvider
} from "@clerk/nextjs";

// https://next-js-im-db-clone.vercel.app/

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "IMDB Clone",
  description: "This is a movie database clone.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
    </ClerkProvider>
  );
}
