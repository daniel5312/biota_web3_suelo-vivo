import { ethers } from "hardhat";
//import { formatEther } from "ethers"; // Importación correcta para ver el saldo

async function main() {
    // 1. Obtener la cuenta
    const [deployer] = await ethers.getSigners();
    console.log("🚀 Iniciando despliegue en Celo Sepolia con la cuenta:", deployer.address);

    // 2. Mostrar saldo (para verificar que tienes tCELO)
    const balance = await ethers.provider.getBalance(deployer.address);
    console.log("💰 Saldo disponible:", ethers.utils.formatEther(balance), "CELO");

    // 3. Preparar el contrato
    const BiotaFactory = await ethers.getContractFactory("BiotaPassport");

    // 4. Desplegar
    console.log("⏳ Enviando transacción de despliegue...");
    const biotaPassport = await BiotaFactory.deploy();

    // 5. Esperar confirmación
    await biotaPassport.deployed();

    // 6. Resultado final
    const address = biotaPassport.address;
    console.log("✅ ¡ÉXITO! Contrato BiotaPassport desplegado en:", address);
    console.log("👉 IMPORTANTE: Guarda esta dirección para el Frontend.");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});