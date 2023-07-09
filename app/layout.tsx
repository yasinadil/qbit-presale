import "./globals.css";
import { Poppins } from "next/font/google";
import { ThirdWebProviderWrapper } from "./ThirdWeb/thirdwebprovider";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "QBIT | Presale Live Now",
  description:
    "Qbit serves as the quantum cornerstone, seamlessly interwoven within the intricate matrix of the hyper-realm metaverse, powering the very fabric of its digital tapestry.",
  siteName: "QBIT",
  keywords: [
    "QBIT Ethereum",
    "Ethereum",
    "Cryptocurrency",
    "Trending coins",
    "QBIT",
    "QBIT Presale",
  ],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
        <Footer />
      </body>
    </html>
  );
}
