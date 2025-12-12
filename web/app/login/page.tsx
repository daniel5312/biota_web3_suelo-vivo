"use client";

import { Navbar } from "@/components/navbar";
import { Leaf, RefreshCw, Smartphone } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* La Navbar tiene el botón de conectar */}
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-4 text-center relative overflow-hidden">
        {/* Fondo sutil (El degradado que pediste, pero en login) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/70 via-white to-cyan-50/70 opacity-50 z-0" />

        <div className="relative z-10 max-w-lg p-10 bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl shadow-stone-300/50 border border-stone-100">
          <Leaf size={48} className="text-emerald-600 mx-auto mb-6" />

          <h1 className="text-4xl font-bold text-emerald-900 mb-4">
            Bienvenido a Biota 🌱
          </h1>

          <p className="text-stone-600 mb-8">
            Para empezar tu viaje regenerativo, necesitamos verificar tu
            identidad en la blockchain. Esto asegura la transparencia de todo el
            proceso.
          </p>

          <div className="space-y-4 mb-8 text-left">
            <div className="flex items-center gap-3 text-stone-700">
              <RefreshCw className="text-teal-500 shrink-0" size={20} />
              <p className="text-sm">Conexión **Segura** y **Anónima**.</p>
            </div>
            <div className="flex items-center gap-3 text-stone-700">
              <Smartphone className="text-teal-500 shrink-0" size={20} />
              <p className="text-sm">
                Usamos Celo/MiniPay para la máxima **facilidad móvil**.
              </p>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl shadow-inner">
            <p className="text-sm font-medium text-emerald-600">
              👆 Por favor, haz clic en **"Conectar Wallet"** en el menú
              superior para continuar.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
/*"use client";

import { Navbar } from "@/components/navbar";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* La Navbar tiene el botón de conectar }
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
}*/
