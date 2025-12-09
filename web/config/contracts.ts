/*import { getContract } from "thirdweb";
import { client, celoAlfajores } from "@/libs/thirdweb";

// 1. DIRECCIÓN DEL CONTRATO BIOTA (Actualizada a tu necesidad)
// *** IMPORTANTE: REEMPLAZA ESTO CON LA DIRECCIÓN REAL DESPUÉS DE DESPLEGAR ***
export const BIOTA_CONTRACT_ADDRESS = "0xTuDireccionDeContratoAqui";

// 2. DEFINICIÓN DEL CONTRATO PARA THIRDWEB
export const biotaContract = getContract({
    client,
    chain: celoAlfajores,
    address: BIOTA_CONTRACT_ADDRESS,
});

// 3. ABI (INTERFAZ BINARIA)
// Los inputs deben coincidir EXACTAMENTE con la función mintPasaporte en BiotaPassport.sol
export const MINT_ABI = [
    {
        "type": "function",
        "name": "mintPasaporte",
        "inputs": [
            { "name": "recipient", "type": "address" },
            { "name": "tokenURI", "type": "string" },
            { "name": "ubicacionGeografica", "type": "string" },
            { "name": "areaM2", "type": "uint256" },
            { "name": "_cmSueloRecuperado", "type": "uint8" }, // Corregido a uint8
            { "name": "_estadoBiologico", "type": "string" },
            { "name": "_hashAnalisisLab", "type": "string" },
            { "name": "_ingredientesHash", "type": "string" },
            { "name": "_metodosAgricolas", "type": "string" }
        ],
        "outputs": [
            { "name": "", "type": "uint256" } // Retorna el token ID
        ],
        "stateMutability": "nonpayable"
    }
] as const;*/