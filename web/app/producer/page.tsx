"use client";

import MintForm from "@/components/mintForm";
import { Navbar } from "@/components/navbar";

export default function ProducerPage() {
  return (
    <div className="min-h-screen bg-stone-50 pb-20">
      <Navbar />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl text-emerald-800 font-bold mb-6">
          Panel del Productor 👨‍🌾
        </h1>
        {/* Aquí está tu formulario de certificación */}
        <MintForm />
      </main>
    </div>
  );
}
