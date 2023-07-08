import "./globals.css";
import { Poppins } from "next/font/google";
import { ThirdWebProviderWrapper } from "./ThirdWeb/thirdwebprovider";
import Navbar from "@/components/Navbar/Navbar";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "QBIT",
  description: "QBIT Presale",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen={"false"} className={poppins.className}>
        <ThirdWebProviderWrapper>
          <Navbar />
          {children}
        </ThirdWebProviderWrapper>
      </body>
    </html>
  );
}
