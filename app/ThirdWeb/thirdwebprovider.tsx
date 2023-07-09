"use client";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Ethereum } from "@thirdweb-dev/chains";

export function ThirdWebProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThirdwebProvider
      dAppMeta={{
        name: "QBIT Presale",
        description: "QBIT Presale",
        logoUrl: "https://example.com/logo.png",
        url: "https://example.com",
        isDarkMode: true,
      }}
      autoConnect={true}
      activeChain={{
        ...Ethereum,
        rpc: [process.env.NEXT_PUBLIC_RPC_URL!], // Override the "rpc" field.
        // ... Override any other fields you want to customize.
      }}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
