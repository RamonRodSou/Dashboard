import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import SideBar from "@/components/SideBar/SideBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Iaf - Dashboard",
  description: "Sistema Gerenciador da Igreja IAF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased", inter.className
      )}>
        <SideBar/>
        <main className="flex-1 sm:ml-14 p-4">
            {children}
        </main>
      </body>
    </html>
  );
}
