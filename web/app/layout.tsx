"use client";

// 1. Importaciones de Estilos y Fuentes
import { Inter } from "next/font/google";
import "./globals.css";

// 2. Importaciones de Proveedores Web3
import { PrivyProvider } from "@privy-io/react-auth";
import { ThirdwebProvider } from "thirdweb/react";
import { celo, celoAlfajores } from "viem/chains";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {/* Envolvemos la App con los proveedores necesarios */}
        <ThirdwebProvider>
          <PrivyProvider
            appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
            config={{
              appearance: {
                theme: "light",
                accentColor: "#10B981", // Emerald-500 (Coincide con tu tema Biota)
                logo: "https://cryptologos.cc/logos/celo-celo-logo.png",
                showWalletLoginFirst: true,
              },
              // Configuración de Redes Celo
              defaultChain: celoAlfajores,
              supportedChains: [celoAlfajores, celo],
              embeddedWallets: {
                createOnLogin: "users-without-wallets",
              },
            }}
          >
            {children}
          </PrivyProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
