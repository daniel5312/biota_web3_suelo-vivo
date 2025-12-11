"use client";

import { useRouter } from "next/navigation";
import { Sprout, ShoppingBasket } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();

  const selectRole = (role: "producer" | "consumer") => {
    localStorage.setItem("biota_user_role", role);
    if (role === "producer") router.push("/producer");
    else router.push("/consumer");
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold text-stone-800 mb-8 text-center">
        ¿Cómo usarás Biota?
      </h1>

      <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
        {/* Opción Productor */}
        <button
          onClick={() => selectRole("producer")}
          className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-emerald-500 hover:shadow-md transition-all text-center group"
        >
          <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500 transition-colors">
            <Sprout
              className="text-emerald-600 group-hover:text-white"
              size={32}
            />
          </div>
          <h3 className="text-xl font-bold text-stone-800">Soy Productor</h3>
          <p className="text-sm text-stone-500 mt-2">
            Quiero certificar mi suelo.
          </p>
        </button>

        {/* Opción Consumidor */}
        <button
          onClick={() => selectRole("consumer")}
          className="bg-white p-8 rounded-2xl shadow-sm border-2 border-transparent hover:border-orange-500 hover:shadow-md transition-all text-center group"
        >
          <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-500 transition-colors">
            <ShoppingBasket
              className="text-orange-600 group-hover:text-white"
              size={32}
            />
          </div>
          <h3 className="text-xl font-bold text-stone-800">Soy Consumidor</h3>
          <p className="text-sm text-stone-500 mt-2">Quiero ver productos.</p>
        </button>
      </div>
    </div>
  );
}
