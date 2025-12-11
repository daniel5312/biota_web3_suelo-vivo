"use client";

import { Leaf, LogOut } from "lucide-react"; // Importamos icono de Salir
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Para redirigir
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi"; // Hooks de Wagmi

export const Navbar = () => {
  const { isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  // Evita errores de hidratación
  useEffect(() => {
    setMounted(true);
  }, []);

  // Función para "Resetear" la App
  const handleLogout = () => {
    // 1. Desconectar Wallet (Wagmi)
    disconnect();

    // 2. Borrar la memoria del Rol
    localStorage.removeItem("biota_user_role");

    // 3. Mandar al Login
    router.push("/login");
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-105 transition-transform">
              <Leaf className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-600">
                BIOTA
              </h1>
              <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">
                Suelo Vivo
              </p>
            </div>
          </Link>

          {/* MENU DE NAVEGACIÓN */}
          {mounted && isConnected && (
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
              {/* Enlaces que solo ve quien está conectado */}
              <Link
                href="/producer"
                className="hover:text-emerald-600 transition-colors"
              >
                Panel Productor
              </Link>
              <Link
                href="/consumer"
                className="hover:text-orange-600 transition-colors"
              >
                Mercado
              </Link>
            </div>
          )}

          {/* ZONA DE ACCIÓN */}
          <div className="flex items-center gap-4">
            {/* Botón de RainbowKit */}
            <ConnectButton
              label="Conectar Wallet"
              accountStatus="address"
              showBalance={false}
            />

            {/* BOTÓN DE SALIDA (Solo si está conectado) */}
            {mounted && isConnected && (
              <button
                onClick={handleLogout}
                className="p-2 text-stone-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
                title="Cerrar Sesión y Cambiar Rol"
              >
                <LogOut size={20} />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
//PRIVY
/*"use client";

import { usePrivy } from "@privy-io/react-auth";
import { Leaf, Wallet } from "lucide-react";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export const Navbar = () => {
  const { ready, authenticated, login, user } = usePrivy();

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return "";
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO *}
         /* <Link href="/" className="flex items-center gap-2 group">
            {/* CORRECCIÓN: bg-gradient-to-br (Tailwind V3) *}
           /* <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-200/50 group-hover:scale-105 transition-transform">
              <Leaf className="text-white" size={20} />
            </div>
            <div>
              {/* CORRECCIÓN: bg-gradient-to-r (Tailwind V3) *}
              <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-stone-800 to-stone-600">
                BIOTA
              </h1>
              <p className="text-[10px] text-emerald-600 font-bold tracking-widest uppercase">
                Suelo Vivo
              </p>
            </div>
          </Link>

          {/* MENU *}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">
              Inicio
            </Link>
            <Link
              href="/dashboard"
              className="hover:text-emerald-600 transition-colors"
            >
              Mis Pasaportes
            </Link>
          </div>

          {/* AUTH *}
          <div className="flex items-center gap-4">
            {!ready ? (
              <div className="px-5 py-2.5 bg-stone-100 rounded-xl animate-pulse w-32 h-10" />
            ) : authenticated ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm font-medium">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                {user?.wallet ? formatAddress(user.wallet.address) : "Usuario"}
              </div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={login}
                className="flex items-center gap-2 px-5 py-2.5 bg-stone-900 text-white rounded-xl font-semibold text-sm shadow-md hover:bg-stone-800 transition-colors"
              >
                <Wallet size={16} />
                Conectar Wallet
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};*/
