"use client";
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import { Mumbai } from "@thirdweb-dev/chains";

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
      activeChain={Mumbai}
      supportedWallets={[metamaskWallet(), coinbaseWallet(), walletConnect()]}
    >
      {children}
    </ThirdwebProvider>
  );
}
