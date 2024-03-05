import { Outfit } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Ducehost",
  description: "Ducehost | Grow Your Dream Business Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/Outfit-Medium.woff2"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Outfit-Regular.woff2"
          as="font"
          type="font/woff2"
        />
      </head>
      <body className={outfit.className}>
        <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />

        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
