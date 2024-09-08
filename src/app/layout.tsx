import type { Metadata } from "next";
import { Open_Sans } from 'next/font/google'
import "../styles/globals.css";
import Header from "@/components/header/header";


const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Teste Front React WeFit",
  description: "Conheça a WeMovie, a melhor loja de filmes e séries do Brasil!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className={`${openSans.className} bg-primary-purple min-h-[101vh]`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
