import { getDefaultConfig } from '@rainbow-me/rainbowkit'; // Importación estándar (la más estable)
import { celo, celoSepolia } from 'wagmi/chains';

// 1. Definimos la configuración de la billetera y la red
export const config = getDefaultConfig({
    appName: 'Biota Passport DApp',
    // Reemplaza con tu propio Project ID de WalletConnect
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '0x602272Dc864dc4A04AEd982face98af3793A9f5F',

    // Conectamos a las redes de Celo (Prueba y Producción)
    chains: [celoSepolia, celo],

    // Necesario para Next.js App Router
    ssr: true,
});