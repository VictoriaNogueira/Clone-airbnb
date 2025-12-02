import "./globals.css";

import  Header from "./components/Header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        <div className="w-full border-b border-gray-200"></div>
        <main className="page-wrapper">          
          {children}
        </main>        
      </body>
    </html>
  );
}
