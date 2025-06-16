import "./globals.css";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <ToastContainer
          position="top-right"
          autoClose={3000}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
