/** @type {import('next').NextConfig} */
const nextConfig = {
  /* NOTA DEL ARQUITECTO:
    En Next.js 15:
    - swcMinify ya es true por defecto (lo borramos).
    - esmExternals ya se maneja automático (lo borramos).
  */

  reactStrictMode: true,

  // Permitir imágenes desde cualquier lugar (útil para NFTs en IPFS)
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

export default nextConfig;