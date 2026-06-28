import { Inter, Kanit, Roboto_Mono } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Jirayu (Copter) | Software Developer",
  description:
    "Portfolio of Jirayu Nitiruangwechkul, a Software and Frontend Developer.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kanit = Kanit({
  weight: ["400", "600"],
  subsets: ["thai"],
  variable: "--font-kanit",
});
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

// จุดที่แก้ไข: เพิ่ม Type Definition ให้กับ children
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${inter.variable} ${kanit.variable} ${robotoMono.variable}`}
    >
      <body className="flex flex-col min-h-screen bg-slate-900 text-slate-100 font-inter selection:bg-blue-500 selection:text-white">
        <NavBar />
        <main className="flex-grow container mx-auto px-6 py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}