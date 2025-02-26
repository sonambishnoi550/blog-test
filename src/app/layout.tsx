import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Blog-test",
  description: "Unlock Knowledge with Our Featured Articles",
  openGraph: {
    title: "Blog-test",
    description: "Unlock Knowledge with Our Featured Articles",
    images: [
      {
        url: "/meta-tag.png",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-Inter bg-black antialiased">
        <Suspense>
          <ClientLayout>  {children}</ClientLayout>
        </Suspense>
      </body>
    </html>
  );
}