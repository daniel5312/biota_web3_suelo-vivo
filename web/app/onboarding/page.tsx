"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Sprout,
  ShoppingBasket,
  Leaf,
  ShieldCheck,
  Smartphone,
  Coins,
  ArrowRight,
  RefreshCw,
  Wallet,
  Globe,
  Zap,
  CheckCircle2,
  TrendingUp,
  Image as ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

// IMPORTANTE: Importamos la Navbar que tiene el botón de conexión de RainbowKit
import { Navbar } from "@/components/navbar";

// --- TIPADO: Interfaz de Props para ServiceCard (SOLUCIONA EL ERROR) ---
interface CardProps {
  icon: React.ElementType; // Para aceptar iconos de Lucide
  title: string;
  description: string;
  colorClass: string;
  onClick: () => void;
  children: React.ReactNode;
}

// --- COMPONENTE REUTILIZABLE: CONTENEDOR DE IMAGEN ---
const ImageContainer = ({
  height = "h-[400px]",
  label = "Imagen",
}: {
  height?: string;
  label?: string;
}) => (
  <div
    className={`relative w-full ${height} bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-xl shadow-emerald-900/5 border border-white/60 flex items-center justify-center group`}
  >
    <div className="text-slate-300 flex flex-col items-center transition-all group-hover:scale-105 group-hover:text-emerald-300/50">
      <ImageIcon size={64} className="mb-4 opacity-50" strokeWidth={1} />
      <span className="text-xs font-bold uppercase tracking-[0.2em]">
        {label}
      </span>
    </div>
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-cyan-500/5 mix-blend-overlay pointer-events-none"></div>
  </div>
);

// --- COMPONENTE DE TARJETA LARGA (Service Card CORREGIDO) ---
const ServiceCard: React.FC<CardProps> = ({
  icon: Icon,
  title,
  description,
  colorClass,
  onClick,
  children,
}) => (
  <motion.button
    whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)" }}
    whileTap={{ scale: 0.98 }}
    onClick={onClick}
    className="group relative flex flex-col p-8 bg-white border border-stone-100 rounded-[1.5rem] shadow-lg hover:border-emerald-200 transition-all duration-300 text-left overflow-hidden"
  >
    {/* Icono Principal */}
    <div
      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${colorClass}`}
    >
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold text-stone-800 mb-3">{title}</h3>
    <p className="text-stone-500 text-sm leading-relaxed flex-grow mb-6">
      {description}
    </p>

    {/* Botón Minimalista */}
    <div
      className={`mt-auto flex items-center text-sm font-bold tracking-wider uppercase ${
        colorClass.includes("emerald") ? "text-emerald-600" : "text-cyan-600"
      } bg-stone-50 group-hover:bg-opacity-100 px-4 py-2 rounded-full w-fit transition-all`}
    >
      {children}
      <ArrowRight
        size={16}
        className="ml-2 group-hover:translate-x-1 transition-transform"
      />
    </div>
  </motion.button>
);

export default function OnboardingPage() {
  const router = useRouter();

  const selectRole = (role: "producer" | "consumer") => {
    // Guarda el rol para mantener la sesión inteligente
    localStorage.setItem("biota_user_role", role);

    // Redirección a las nuevas rutas estándar
    if (role === "producer") {
      // Va a /info/producer/page.tsx (Hub de Beneficios)
      router.push("/producer/info");
    } else {
      // Va a /consumer/info/page.tsx (Hub de Tienda/Concientización)
      router.push("/consumer/info");
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      {/* 1. NAVBAR (Conexión de Wallet) */}
      <Navbar />

      {/* --- FONDO SUAVE --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-emerald-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      {/* --- HERO SECTION (LIMPIO, CON TARJETAS LARGAS) --- */}
      <section className="relative z-10 pt-28 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/50 border border-emerald-200 shadow-sm text-emerald-600 text-xs font-bold uppercase tracking-[0.2em] mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Conectando el futuro de la agricultura
            </div>

            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4 leading-snug text-slate-900">
              Biota: La Plataforma para el <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600">
                Suelo Vivo y el Comercio Justo
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Trabajamos por la transparencia, precios justos y la
              **transición** hacia una agricultura que regenera el planeta.
            </p>
          </div>

          {/* TARJETAS DE ROL (Estilo Largo/Service Card) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* CARD PRODUCTOR */}
            <ServiceCard
              onClick={() => selectRole("producer")}
              icon={Sprout}
              title="Soy Productor (Campesino)"
              description="Te asesoramos en la transición (diagnóstico, certificación), ofrecemos financiación inicial y te conectamos al mercado de carbono y consumidores de forma fácil (MiniPay)."
              colorClass="bg-emerald-100 text-emerald-600"
            >
              Iniciar Programa
            </ServiceCard>

            {/* CARD CONSUMIDOR */}
            <ServiceCard
              onClick={() => selectRole("consumer")}
              icon={ShoppingBasket}
              title="Soy Consumidor"
              description="Accede a un mercado con trazabilidad completa. Encuentra productos de calidad y a precio justo, pagando en COP, USD o $BIOTA."
              colorClass="bg-cyan-100 text-cyan-600"
            >
              Ir al Mercado
            </ServiceCard>
          </div>
        </div>
      </section>

      {/* 2. AGRICULTURA REGENERATIVA (Transición) */}
      <section id="regenerativo" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Agricultura <span className="text-emerald-600">Regenerativa</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">
              Mayor productividad y resiliencia sin químicos. Biota apoya la
              transición sin afectar tu producción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contenedor de Imagen */}
            <ImageContainer
              height="h-[400px]"
              label="Ilustración de Suelo Sano"
            />

            {/* Contenido (Servicios del Programa) */}
            <div>
              <h3 className="text-3xl font-bold text-slate-900 mb-6">
                El Programa Biota (Beneficios)
              </h3>
              <div className="space-y-6">
                {[
                  {
                    title: "Transición Acompañada",
                    desc: "Te guiamos paso a paso con asesoría técnica y social, sin afectar tus rendimientos.",
                    icon: RefreshCw,
                  },
                  {
                    title: "Alta Productividad",
                    desc: "El suelo vivo produce cultivos más sanos, grandes y resistentes a sequías.",
                    icon: TrendingUp,
                  },
                  {
                    title: "Financiación e Incentivos",
                    desc: "Ofrecemos micro-créditos para insumos y recompensas en $BIOTA para el cambio.",
                    icon: Coins,
                  },
                  {
                    title: "Transparencia Total",
                    desc: "La trazabilidad en blockchain elimina la duda sobre la procedencia y calidad orgánica.",
                    icon: ShieldCheck,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0 mt-1">
                      <item.icon size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-stone-900">{item.title}</h4>
                      <p className="text-sm text-stone-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ECONOMÍA Y TECNOLOGÍA (Multimoneda, Token y Celo) */}
      <section
        id="pagos"
        className="py-24 bg-stone-50 border-t border-slate-100"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Tecnología para{" "}
              <span className="text-indigo-600">Conectar y Pagar</span>
            </h2>
            <p className="text-stone-500 max-w-2xl mx-auto text-lg">
              Hacemos el proceso de compra y venta tan simple como enviar un
              mensaje.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* CARD 1: Pagos Flexibles (Multimoneda) */}
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50">
              <div className="p-3 bg-indigo-100 rounded-lg text-indigo-600 w-fit mb-4">
                <Wallet />
              </div>
              <h3 className="text-xl font-bold mb-3">Paga Como Quieras</h3>
              <p className="text-sm text-stone-500 mb-4">
                El mercado Biota acepta moneda local **($COP, $USD)** y
                criptoestables **(cCOP, CELO)**.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  $COP
                </span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                  $USD
                </span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                  cCOP
                </span>
              </div>
            </div>

            {/* CARD 2: Token BIOTA (Recompensas) */}
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50">
              <div className="p-3 bg-emerald-100 rounded-lg text-emerald-600 w-fit mb-4">
                <Coins />
              </div>
              <h3 className="text-xl font-bold mb-3">Incentivos $BIOTA</h3>
              <p className="text-sm text-stone-500 mb-4">
                Recompensamos el esfuerzo: ganas nuestro token por cada mejora
                sostenible verificada.
              </p>
              <div className="flex items-center gap-2 mt-4 text-emerald-600 font-bold text-sm">
                Ver Recompensas
              </div>
            </div>

            {/* CARD 3: Tecnología Fácil (Celo/MiniPay) */}
            <div className="bg-white p-8 rounded-2xl border border-stone-100 shadow-xl shadow-stone-200/50">
              <div className="p-3 bg-cyan-100 rounded-lg text-cyan-600 w-fit mb-4">
                <Smartphone />
              </div>
              <h3 className="text-xl font-bold mb-3">Fácil de Usar</h3>
              <p className="text-sm text-stone-500 mb-4">
                Gracias a MiniPay y la red Celo, el campesino solo necesita su
                celular para unirse y operar.
              </p>
              <div className="flex items-center gap-2 mt-4 text-cyan-600 font-bold text-sm">
                Ver Integración
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-slate-200 text-center bg-white">
        <div className="flex items-center justify-center gap-2 mb-4 opacity-70">
          <Leaf size={16} className="text-emerald-600" />
          <span className="font-bold tracking-widest uppercase text-xs text-slate-600">
            Biota Network
          </span>
        </div>
        <p className="text-slate-400 text-sm">
          Tecnología al servicio de la vida.
        </p>
      </footer>
    </div>
  );
}
