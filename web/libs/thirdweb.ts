/*import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// 1. Configuramos el cliente
// NOTA: Debes crear un clientId en https://thirdweb.com/dashboard/settings
// Si no tienes uno aún, la app funcionará pero con límites.
const clientId = process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID || "";

export const client = createThirdwebClient({
    clientId
});

// 2. Definimos la red Celo Alfajores (Testnet) para desarrollo
// Esto es CRÍTICO para ganar el Open Track de Celo
export const celoAlfajores = defineChain(44787);

// 3. Definimos la red Celo Mainnet (para cuando lancemos a producción)
export const celoMainnet = defineChain(42220);

// 4. Configuración del Contrato Biota
// (Aquí pondremos la dirección de tu contrato cuando lo despliegues)
export const BIOTA_CONTRACT_ADDRESS = "0xTU_CONTRATO_AQUI";

export const getBiotaContract = () => {
    return getContract({
        client,
        chain: celoAlfajores, // Estamos en modo Testnet
        address: BIOTA_CONTRACT_ADDRESS
    });
};*/
0x15cef749a43f7546882a2b1055edc98aedd4e32a