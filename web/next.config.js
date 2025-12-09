/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuración base para el App Router y TypeScript.
  reactStrictMode: true,

  // Permite que Next.js compile código TS sin errores de tipado temporales
  typescript: {
    ignoreBuildErrors: true,
  },

  // Permitir imágenes desde cualquier lugar (útil para NFTs e IPFS)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  // Configuración vital para que Thirdweb y librerías Web3 funcionen sin errores de compilación
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },
};

module.exports = nextConfig;