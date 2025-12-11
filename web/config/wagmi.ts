import { getDefaultConfig } from '@rainbow-me/rainbowkit'; // Importación estándar (la más estable)
import { celo, celoSepolia } from 'wagmi/chains';

// 1. Definimos la configuración de la billetera y la red
export const config = getDefaultConfig({
    appName: 'Biota Passport DApp',
    // Reemplaza con tu propio Project ID de WalletConnect
    projectId: process.env.NEXT_PUBLIC_WC_PROJECT_ID || '43a853c3778c34d0e1a91d23107feafd',

    // Conectamos a las redes de Celo (Prueba y Producción)
    chains: [celoSepolia, celo],

    // Necesario para Next.js App Router
    ssr: true,
});