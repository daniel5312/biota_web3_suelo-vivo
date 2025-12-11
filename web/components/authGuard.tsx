"use client";

import { useAccount } from "wagmi";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Rutas públicas (Login)
const PUBLIC_PATHS = ["/login"];

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isConnected, isConnecting } = useAccount();
  const pathname = usePathname();
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Si está cargando la billetera, esperamos
    if (isConnecting) return;

    const checkAuth = () => {
      const isPublic = PUBLIC_PATHS.includes(pathname);

      // CASO 1: Usuario NO conectado
      if (!isConnected) {
        if (!isPublic) {
          router.push("/login");
        }
        setIsChecking(false);
        return;
      }

      // CASO 2: Usuario SI conectado
      // Verificamos si ya tiene un rol guardado en el navegador
      const userRole = localStorage.getItem("biota_user_role"); // 'producer' | 'consumer'

      if (pathname === "/login") {
        // Si está en login pero ya conectó, lo sacamos de ahí
        if (!userRole) {
          router.push("/onboarding");
        } else if (userRole === "producer") {
          router.push("/producer");
        } else {
          router.push("/consumer");
        }
      } else if (pathname === "/") {
        // La ruta raíz redirige según el rol
        if (!userRole) {
          router.push("/onboarding");
        } else if (userRole === "producer") {
          router.push("/producer");
        } else {
          router.push("/consumer");
        }
      }

      setIsChecking(false);
    };

    checkAuth();
  }, [isConnected, isConnecting, pathname, router]);

  // Pantalla de carga mientras decide a dónde enviarte
  if (isChecking || isConnecting) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-stone-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 bg-emerald-500 rounded-full mb-4"></div>
          <p className="text-emerald-800 font-medium">Iniciando Biota...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
