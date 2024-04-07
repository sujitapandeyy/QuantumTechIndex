import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Header from "@/components/Header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quantam compiler index",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Navbar/>
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer/>
        </body>
    </html>
  );
}
