import SmoothScrolling from "@/components/SmoothScroll.js";
import "./globals.css";
import { Inria_Serif, Roboto_Condensed } from "next/font/google";

const inriaSerif = Inria_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["300", "400", "700"],
  variable: "--font-inriaSerif",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-robotoCondensed",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inriaSerif.className} ${robotoCondensed.variable}`}>
        <SmoothScrolling>
          <div className="w-full h-screen flex items-center justify-center text-lg text-center font-semibold md:hidden">
            Not available fr mobile user right now.use bigger device
          </div>
          <div className="hidden md:block w-full h-full">{children}</div>
        </SmoothScrolling>
      </body>
    </html>
  );
}
