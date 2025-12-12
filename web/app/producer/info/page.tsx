// web/app/info/producer/page.tsx
"use client";

import { Navbar } from "@/components/navbar";
import { useRouter } from "next/navigation";
import { Coins, RefreshCw, ShieldCheck, ArrowRight, Globe } from "lucide-react";

export default function ProducerInfoPage() {
  const router = useRouter();

  // Función para ir al formulario de certificación
  const goToCertification = () => {
    router.push("/producer");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="container mx-auto px-6 py-24 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-emerald-700 mb-4">
            Programa Biota: Tu Transición Regenerativa
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Hemos verificado tu wallet. Estos son los beneficios y el plan para
            digitalizar tu finca y aumentar tus ganancias.
          </p>
        </div>

        {/* Sección de Beneficios Detallados */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Beneficio 1 */}
          <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 shadow-lg">
            <Coins size={32} className="text-emerald-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Financiación e Incentivos
            </h3>
            <p className="text-stone-700">
              Accede a micro-créditos para insumos bio-regenerativos. Recibirás
              **tokens $BIOTA** como recompensa por cada métrica de suelo
              mejorada.
            </p>
          </div>

          {/* Beneficio 2 */}
          <div className="bg-cyan-50 p-8 rounded-2xl border border-cyan-100 shadow-lg">
            <RefreshCw size={32} className="text-cyan-600 mb-4" />
            <h3 className="text-2xl font-bold mb-2">
              Asesoría Técnica y Social
            </h3>
            <p className="text-stone-700">
              Te acompañamos en la transición (diagnóstico agrosostenible y
              social). Mantenemos tu productividad mientras sanamos tu tierra.
            </p>
          </div>

          {/* Botón CTA Final */}
          <div className="md:col-span-2 text-center mt-10">
            <button
              onClick={goToCertification}
              className="bg-emerald-600 text-white text-lg px-10 py-4 rounded-xl font-bold shadow-xl shadow-emerald-600/30 hover:bg-emerald-700 transition-colors flex items-center justify-center mx-auto"
            >
              Ir a Formulario de Certificación{" "}
              <ArrowRight size={20} className="ml-3" />
            </button>
          </div>
        </div>

        {/* Sección de Concientización (CELO & Trazabilidad) */}
        <h2 className="text-3xl font-bold text-stone-900 text-center mb-8">
          La Fuerza de la Trazabilidad en Celo
        </h2>
        <p className="text-center text-stone-500 max-w-4xl mx-auto mb-10">
          Tu Pasaporte Digital está respaldado por la blockchain Celo, una red
          ecológica que garantiza que tus datos de suelo sean inmutables y
          accesibles a tus compradores.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          {/* Trazabilidad */}
          <div className="p-6 bg-stone-100 rounded-xl">
            <ShieldCheck size={32} className="text-indigo-500 mx-auto mb-3" />
            <h4 className="font-bold">Trazabilidad Total</h4>
            <p className="text-sm text-stone-500">
              Prueba de origen y calidad de tus productos.
            </p>
          </div>
          {/* Celo */}
          <div className="p-6 bg-stone-100 rounded-xl">
            <Globe size={32} className="text-indigo-500 mx-auto mb-3" />
            <h4 className="font-bold">Pagos Fáciles (MiniPay)</h4>
            <p className="text-sm text-stone-500">
              Transacciones rápidas y seguras sin bancos.
            </p>
          </div>
          {/* cCOP */}
          <div className="p-6 bg-stone-100 rounded-xl">
            <Coins size={32} className="text-indigo-500 mx-auto mb-3" />
            <h4 className="font-bold">Acceso a $BIOTA</h4>
            <p className="text-sm text-stone-500">
              Tu camino a la economía de tokens regenerativos.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
