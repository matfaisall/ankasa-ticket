import { Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import { Poppins } from "next/font/google";
import Loading from "./loading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
});

export const metadata = {
  title: "Ankasa Ticket",
  description: "This is homepage ankasa ticket",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
