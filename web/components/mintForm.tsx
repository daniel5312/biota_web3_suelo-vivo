"use client";

import React, { useState } from "react";
import {
  useAccount,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther } from "viem";
import { BIOTA_ABI, BIOTA_CONTRACT_ADDRESS } from "@/constants/abi";

// Definimos el estado inicial del formulario
const initialFormState = {
  recipient: "",
  tokenURI: "ipfs://QmTg...", // URL de ejemplo, se debe subir el archivo a IPFS antes
  ubicacionGeografica: "",
  areaM2: "",
  cmSueloRecuperado: "",
  estadoBiologico: "En Transición",
  hashAnalisisLab: "hash-lab-0x...",
  ingredientesHash: "hash-ing-0x...",
  metodosAgricolas: "Método de Lombricultura",
};

export default function MintForm() {
  const { isConnected, address: minterAddress } = useAccount();
  const [formData, setFormData] = useState(initialFormState);

  // Hook de Wagmi para escribir en el contrato
  const {
    data: hash,
    writeContract,
    isPending,
    error: writeError,
  } = useWriteContract();

  // Hook de Wagmi para esperar la confirmación de la transacción
  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: confirmError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // El contrato requiere que los campos numéricos sean BigInts o Numbers
    const numericAreaM2 = BigInt(formData.areaM2);
    const numericCmSuelo = parseInt(formData.cmSueloRecuperado, 10);

    // Los argumentos deben coincidir con el orden exacto de la función mintPasaporte
    const args = [
      formData.recipient as `0x${string}`, // Dirección del agricultor (recipient)
      formData.tokenURI, // Link a metadatos (IPFS)
      formData.ubicacionGeografica, // Coordenadas
      numericAreaM2, // Área en m2
      numericCmSuelo, // CM de suelo recuperado
      formData.estadoBiologico, // Estado biológico
      formData.hashAnalisisLab, // Hash del lab
      formData.ingredientesHash, // Hash de insumos
      formData.metodosAgricolas, // Métodos agrícolas
    ] as const; // 'as const' ayuda a TypeScript con la inferencia de tipos

    // Llamada a la función del contrato
    writeContract({
      address: BIOTA_CONTRACT_ADDRESS,
      abi: BIOTA_ABI,
      functionName: "mintPasaporte",
      args: args,
      // Opcional: Si quieres enviar un pequeño pago junto con el mint, usa 'value'
      // value: parseEther('0.001'),
    });
  };

  // Determinar si el botón debe estar deshabilitado
  const isButtonDisabled =
    isPending || isConfirming || !isConnected || !formData.recipient;

  return (
    <div className="p-8 bg-white dark:bg-gray-800 shadow-xl rounded-xl max-w-lg mx-auto my-12">
      <h2 className="text-3xl font-extrabold text-green-600 dark:text-green-400 mb-6 border-b pb-2">
        Certificar Suelo Vivo (Pasaporte Digital)
      </h2>

      {!isConnected && (
        <p className="text-red-500 mb-4 font-medium">
          Por favor, conecta tu billetera Biota (Owner) para mintear.
        </p>
      )}

      {isConfirmed && (
        <div
          className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4"
          role="alert"
        >
          <p className="font-bold">¡Certificado Creado con Éxito!</p>
          <p>La transacción ha sido confirmada. Hash: {hash}</p>
          <p className="text-sm">Revisa CeloScan para ver el NFT.</p>
        </div>
      )}

      {/* Mostrar Errores */}
      {(writeError || confirmError) && (
        <div
          className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4"
          role="alert"
        >
          <p className="font-bold">Error en la Transacción</p>
          <p>{writeError?.message || confirmError?.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Campo Recipient */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Dirección del Agricultor (Recipient)
          </label>
          <input
            type="text"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
            placeholder="0x..."
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Campo Área M2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Área de Suelo Regenerada (m²)
          </label>
          <input
            type="number"
            name="areaM2"
            value={formData.areaM2}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Campo CM Suelo Recuperado */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            CM de Suelo Recuperado
          </label>
          <input
            type="number"
            name="cmSueloRecuperado"
            value={formData.cmSueloRecuperado}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {/* Campo Estado Biológico (Select) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Estado Biológico del Suelo
          </label>
          <select
            name="estadoBiologico"
            value={formData.estadoBiologico}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <option value="En Transición">En Transición</option>
            <option value="Equilibrado">Equilibrado</option>
            <option value="Desequilibrado">Desequilibrado</option>
          </select>
        </div>

        {/* Botón de Envío */}
        <button
          type="submit"
          disabled={isButtonDisabled}
          className={`w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white transition-all
            ${
              isButtonDisabled
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            }`}
        >
          {isPending && "Esperando Confirmación..."}
          {isConfirming && "Confirmando en Celo..."}
          {!isPending && !isConfirming && "✅ Certificar Suelo Vivo"}
        </button>

        {/* Detalles de Debug (Mantenemos los hashes estáticos por ahora) */}
        <div className="pt-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            Hash Lab/Insumos/URI fijos por ahora. (Se implementará subida a IPFS
            más adelante).
          </p>
          <p>Minter Address: {minterAddress}</p>
        </div>
      </form>
    </div>
  );
}
