// web/app/info/consumer/page.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import {
  ShoppingBag,
  ShieldCheck,
  Coins,
  Globe,
  ArrowRight,
  LineChart,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ConsumerHubPage() {
  const router = useRouter();

  // Función para ir al mercado (donde está el carrito y la transacción)
  const goToMarketplace = () => {
    router.push("/consumer");
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <Navbar />
      <main className="container mx-auto px-6 py-24 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-teal-700 mb-4">
            Tienda Biota: La Compra con Impacto
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Cada producto tiene una historia y un impacto. Explora el ecosistema
            y compra con total transparencia.
          </p>
        </div>

        {/* --- SECCIÓN 1: CONTENIDO DE INMERSIÓN (3 Columnas) --- */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Trazabilidad y Evidencias */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100"
          >
            <ShieldCheck size={32} className="text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Trazabilidad en Vivo</h3>
            <p className="text-sm text-stone-500 mb-4">
              Verifica las prácticas del agricultor y el Pasaporte Digital de
              cada lote. **Cero dudas sobre el origen orgánico.**
            </p>
            <button className="text-emerald-600 text-sm font-semibold hover:underline">
              Ver Evidencias Recientes
            </button>
          </motion.div>

          {/* Economía del Token */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100"
          >
            <Coins size={32} className="text-purple-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">El Token $BIOTA</h3>
            <p className="text-sm text-stone-500 mb-4">
              Recibe recompensas por comprar y úsalo para obtener descuentos. Tu
              fidelidad es valorada y tokenizada.
            </p>
            <button className="text-purple-600 text-sm font-semibold hover:underline">
              Saber más sobre $BIOTA
            </button>
          </motion.div>

          {/* Productores Destacados */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-stone-100"
          >
            <Globe size={32} className="text-cyan-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Conoce a tus Productores</h3>
            <p className="text-sm text-stone-500 mb-4">
              Historias reales de familias campesinas que están regenerando sus
              suelos con tu apoyo.
            </p>
            <button className="text-cyan-600 text-sm font-semibold hover:underline">
              Ver Mapa de Fincas
            </button>
          </motion.div>
        </div>

        {/* --- SECCIÓN 2: CTA FINAL AL MERCADO --- */}
        <div className="bg-teal-600 text-white p-12 rounded-[2rem] text-center shadow-2xl shadow-teal-600/30">
          <ShoppingBag size={48} className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-3">Ver Productos Destacados</h2>
          <p className="text-teal-100 mb-8 max-w-3xl mx-auto">
            Entra al Marketplace para ver la grilla de productos, usar el
            carrito de compras y realizar tu transacción en Celo Sepolia
            (Testnet).
          </p>

          <button
            onClick={goToMarketplace}
            className="bg-white text-teal-800 text-lg px-10 py-4 rounded-xl font-bold shadow-xl hover:bg-teal-50 transition-colors flex items-center justify-center mx-auto group"
          >
            Ir al Marketplace{" "}
            <ArrowRight
              size={20}
              className="ml-3 group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>

        {/* --- SECCIÓN 3: CONCIENTIZACIÓN (CELO & cCOP) --- */}
        <div className="mt-16 pt-10 border-t border-stone-200">
          <h2 className="text-3xl font-bold text-stone-900 text-center mb-8">
            ¿Cómo funciona la Trazabilidad y el Pago?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-xl border border-stone-100 shadow-md">
              <LineChart size={24} className="text-indigo-600 mb-2" />
              <h4 className="font-bold text-stone-800">
                Trazabilidad Blockchain (Celo)
              </h4>
              <p className="text-sm text-stone-500">
                La red Celo registra el "Pasaporte Digital de Suelo" del
                productor. Esta información es inmutable y verifica la
                autenticidad orgánica del producto.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-stone-100 shadow-md">
              <Coins size={24} className="text-yellow-600 mb-2" />
              <h4 className="font-bold text-stone-800">Pagos con cCOP</h4>
              <p className="text-sm text-stone-500">
                cCOP es la stablecoin anclada al Peso Colombiano. Te permite
                pagar fácil y rápido sin la volatilidad de otras criptomonedas.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
