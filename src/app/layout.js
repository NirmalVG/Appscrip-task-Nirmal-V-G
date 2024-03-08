import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "../components/Layout/CommonLayout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Appscrip Products Listing",
  description: "Appscrip products listing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={inter.className}>
        <CommonLayout>{children}</CommonLayout>
      </body>
    </html>
  );
}
