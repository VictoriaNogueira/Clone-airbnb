import "../../globals.css";
import  Header from "../../components/Header/Header";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="page-wrapper">
      {children}
    </main>
  );
}
