"use client";

import { Navbar } from "@/components/navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* La Navbar tiene el botón de conectar */}
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-4xl font-bold text-emerald-900 mb-4">
          Bienvenido a Biota 🌱
        </h1>
        <p className="text-stone-600 mb-8 max-w-md">
          Conecta tu billetera para certificar suelos regenerativos o comprar
          productos verificados.
        </p>

        <div className="p-4 bg-white border border-emerald-100 rounded-xl shadow-sm">
          <p className="text-sm font-medium text-emerald-600 animate-pulse">
            👆 Usa el botón "Conectar Wallet" arriba a la derecha
          </p>
        </div>
      </main>
    </div>
  );
}
