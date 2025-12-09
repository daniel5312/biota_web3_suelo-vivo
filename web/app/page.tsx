"use client";

import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAF9] text-stone-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />

      {/* BACKGROUND */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* CORRECCIÓN: bg-gradient-to-b */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-emerald-50/50 via-white to-transparent" />
        <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-amber-100/30 rounded-full blur-[100px]" />
        <div className="absolute top-40 -left-20 w-[600px] h-[600px] bg-emerald-100/20 rounded-full blur-[100px]" />
      </div>

      <main className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-widest"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Construyendo en Celo Alfajores
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-stone-900"
          >
            Certifica la <br />
            {/* CORRECCIÓN: bg-gradient-to-r */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500">
              Vida del Suelo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto"
          >
            Transforma datos agronómicos en activos regenerativos. Plataforma
            ReFi para mintear Pasaportes Digitales de Suelo respaldados por
            blockchain.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 p-6 bg-white/50 backdrop-blur border border-stone-200 rounded-2xl max-w-lg mx-auto text-left shadow-xl shadow-stone-200/50"
          >
            <div className="flex items-center gap-2 mb-4 text-stone-800 font-bold border-b border-stone-200 pb-2">
              <Terminal size={16} /> Estado del Proyecto
            </div>
            <ul className="space-y-2 text-sm text-stone-600 font-mono">
              <li className="flex items-center gap-2 text-emerald-600">
                ✓ Next.js & Tailwind Configurado
              </li>
              <li className="flex items-center gap-2 text-emerald-600">
                ✓ UI Component System (Biota Theme V3)
              </li>
              <li className="flex items-center gap-2 text-emerald-600">
                ✓ Conexión Privy Activa
              </li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
