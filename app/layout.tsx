import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from 'next/link'
import { Button } from "@/components/ui/button"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const navItems = [
  {label: 'Home', herf: '/'},
  {label: 'About', herf: '/about'},
  {label: 'Education', herf: '/Education'},
  {label: 'Hobby', herf: '/Hobby'},
  {label: 'Contact', herf: '/contact'},

  
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="w-full h-16 flex items-center border-b justify-end">
          <ul className="flex gap-4 items-center">
          {navItems.map((item => <li key={item.label}>
            <Button variant="outline" asChild>
            <Link href={item.herf}>{item.label}</Link>
            </Button>


          </li>))}

          </ul>

        </header>
        {children}



        <footer className="container sticky top-full h-16 flex items-center">
          <p>&copy;Eito</p>
        </footer>
      </body>
    </html>
  );
}