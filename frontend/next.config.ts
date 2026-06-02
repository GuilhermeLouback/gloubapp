import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    // Ícones de tecnologia são SVGs remotos (github/simpleicons). O otimizador
    // da Vercel falha (502) ao buscar alguns deles em produção — então servimos
    // direto da fonte, sem otimização. Em SVG minúsculo não há perda real.
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig;
