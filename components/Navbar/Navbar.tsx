"use client";
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed">
      {/* <div className="flex items-center justify-between px-10 py-6 "> */}
      <div className="absolute left-10 top-10">
        <h1 className="font-bold text-3xl">
          <Link href={"/"}>QBIT</Link>
        </h1>
      </div>
      <div className="fixed right-10 top-10">
        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
      </div>
      {/* </div>{" "} */}
    </div>
  );
}
