"use client";

import { Navbar } from "@/components/navbar";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";
import { parseEther } from "viem";
import {
  ShoppingBag,
  Sprout,
  Coffee,
  Apple,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { useState } from "react";

// 1. DATOS SIMULADOS (Productos de Ejemplo)
const PRODUCTS = [
  {
    id: 1,
    name: "Café de Origen (Lote #402)",
    price: "0.01", // Precio en CELO
    description: "Café de altura cultivado con abonos orgánicos en Cauca.",
    icon: <Coffee size={40} className="text-amber-700" />,
    color: "bg-amber-100",
  },
  {
    id: 2,
    name: "Canasta de Frutas Bio",
    price: "0.05",
    description: "Selección de mango, papaya y banano sin agroquímicos.",
    icon: <Apple size={40} className="text-red-600" />,
    color: "bg-red-100",
  },
  {
    id: 3,
    name: "Abono Bokashi (5kg)",
    price: "0.005",
    description: "Suelo vivo fermentado para recuperar la microbiología.",
    icon: <Sprout size={40} className="text-emerald-700" />,
    color: "bg-emerald-100",
  },
  {
    id: 4,
    name: "Cacao Fino de Aroma",
    price: "0.02",
    description: "Fermentado en cajones de madera dulce. Notas frutales.",
    icon: <ShoppingBag size={40} className="text-purple-700" />,
    color: "bg-purple-100",
  },
];

// Dirección simulada de la Tesorería de Biota (Donde llega el dinero)
const BIOTA_TREASURY = "0x6d4763715bf9cde401fd4aac9a6254ceb4382c9b"; // (Dirección de quema como ejemplo seguro)

export default function ConsumerPage() {
  // HOOKS DE WAGMI PARA TRANSACCIONES
  const { data: hash, sendTransaction, isPending } = useSendTransaction();

  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({
    hash,
  });

  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  // FUNCIÓN DE COMPRA
  const handleBuy = (product: (typeof PRODUCTS)[0]) => {
    setSelectedProduct(product.name);

    // Enviamos una transacción real a la Blockchain
    sendTransaction({
      to: BIOTA_TREASURY,
      value: parseEther(product.price), // Convertimos el numero a Wei
    });
  };

  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <Navbar />

      <main className="container mx-auto px-4 pt-24">
        {/* ENCABEZADO */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-emerald-900 font-bold mb-4">
            Mercado Regenerativo 🛒
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Apoya a los agricultores comprando productos con trazabilidad
            Blockchain.
            <br />
            <span className="text-xs text-emerald-600 font-bold bg-emerald-100 px-2 py-1 rounded-full">
              RED: CELO SEPOLIA (Testnet)
            </span>
          </p>
        </div>

        {/* MENSAJES DE ESTADO DE TRANSACCIÓN */}
        {isPending && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl flex flex-col items-center">
              <Loader2
                className="animate-spin text-emerald-500 mb-4"
                size={48}
              />
              <h3 className="text-xl font-bold">Confirmando en Billetera...</h3>
              <p className="text-stone-500">
                Por favor aprueba la compra de {selectedProduct}
              </p>
            </div>
          </div>
        )}

        {isConfirming && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-8 rounded-2xl flex flex-col items-center">
              <div className="animate-pulse bg-emerald-100 p-4 rounded-full mb-4">
                <ShoppingBag className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold">Procesando en Blockchain...</h3>
              <p className="text-stone-500">Hash: {hash?.slice(0, 10)}...</p>
            </div>
          </div>
        )}

        {isSuccess && (
          <div className="bg-emerald-100 border border-emerald-200 text-emerald-800 p-4 rounded-xl mb-8 flex items-center justify-between max-w-2xl mx-auto animate-fade-in-up">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-emerald-600" />
              <div>
                <p className="font-bold">¡Compra Exitosa!</p>
                <p className="text-sm">
                  Tu pedido ha sido registrado en la blockchain.
                </p>
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="text-sm underline hover:text-emerald-950"
            >
              Cerrar
            </button>
          </div>
        )}

        {/* GRILLA DE PRODUCTOS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-stone-100 group"
            >
              {/* Imagen Simulada (Icono) */}
              <div
                className={`h-48 ${product.color} flex items-center justify-center group-hover:scale-105 transition-transform duration-500`}
              >
                {product.icon}
              </div>

              {/* Info del Producto */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-stone-800 text-lg leading-tight">
                    {product.name}
                  </h3>
                  <span className="bg-stone-100 text-stone-600 text-xs font-bold px-2 py-1 rounded-lg">
                    {product.price} CELO
                  </span>
                </div>

                <p className="text-sm text-stone-500 mb-6 min-h-[40px]">
                  {product.description}
                </p>

                <button
                  onClick={() => handleBuy(product)}
                  disabled={isPending || isConfirming}
                  className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold hover:bg-emerald-600 transition-colors disabled:bg-stone-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  {isPending ? "Confirmando..." : "Comprar Ahora"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
