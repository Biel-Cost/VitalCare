import type { Metadata } from "next";
import "./globals.css";
import styled from "./layout.module.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "VitalCare",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="pt-BR">
        <body>
          <Header />
          <div className={styled.contentContainer}>
            <div className={styled.content}>{children}</div>
          </div>
          <Footer />
        </body>
      </html>
    </>
  );
}
