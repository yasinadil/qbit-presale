"use client";
import React from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 py-6">
      <h1 className="font-bold text-3xl">
        <Link href={"/"}>QBIT</Link>
      </h1>
      <ConnectWallet theme="dark" btnTitle="Connect Wallet" />
    </div>
  );
}
