import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "mobin.gm",
  description: "Generated by create next app",
  icons: {
    icon: ['/images/logoIcon.svg'],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir='rtl'>
      <body >
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  )
}

