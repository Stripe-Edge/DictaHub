import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dicta Hub - AI Academy",
  description: "Dicta Hub is a premier AI and Tech Training Academy dedicated to bridging the skill gap in Nigeria and beyond. Our curriculum is modeled after UK educational standards, ensuring our students receive globally recognized training.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900 flex flex-col min-h-screen`}>
        {/* Navbar (Global) */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow w-full">{children}</main>

        {/* Footer (Global) */}
        <Footer />
      </body>
    </html>
  );
}
