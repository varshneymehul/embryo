import "./globals.css";
import Header from "./components/Header";
import CursorGlow from "./components/CursorGlow";
import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "BITS Embryo",
  description:
    "Embryo is a project to foster strong collaboration of BITS students and BITS faculty with the alumni and friends of BITS Pilani.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <CursorGlow color="lightblue" />
        <div>
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
