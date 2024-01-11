import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Layout/Nav";
import Sidebar from "@/components/Layout/Sidebar";
import History from "@/components/Layout/History";
import GetIP from "@/components/Provider/GetIP";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Code by Lương Khoa",
  description: "Di sản cuối cùng trước khi nghỉ game!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <Head>
        <meta
          name="google-adsense-account"
          content="ca-pub-7465388386459244"
        />
      </Head>
      <body className={inter.className}>
        <GetIP />
        <Analytics />
        <div className="w-full flex flex-col">
          <Nav />
          <div className="grid grid-cols-12 h-screen p">
            <div className="hidden pt-[62px] lg:block lg:pt-4 col-span-2 border-r">
              <Sidebar />
            </div>
            <div
              id="content"
              className="col-span-12 lg:col-span-7 pt-[62px] lg:pt-4 justify-center"
            >
              {children}
            </div>
            <div className="pt-[62px] lg:pt-4 hidden lg:block col-span-3 border-l px-4">
              <History />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
