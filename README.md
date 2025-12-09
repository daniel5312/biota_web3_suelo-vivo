About the Project
Hi! Welcome to Biota Suelo Vivo. A dApp built on the Celo Network, focused on soil regeneration and data transparency through Blockchain.

We bridge Web3 technology with real-world impact (Real World Assets - RWA) to empower farmers and soil guardians.

🏆 Hackathon Tracks
We are building under the following categories:

Regenerative Finance (ReFi): Incentivizing positive climate action and soil health via blockchain.

Mobile First: Leveraging Celo's mobile-centric approach for accessibility in rural areas.

🛠 Tech Stack
Network: Celo (Alfajores Testnet / Mainnet)

Contracts: Solidity (v0.8+)

Framework: Hardhat

Frontend: React / Next.js

Connection: Wagmi / RainbowKit / MiniPay (Celo native)

🚀 Quick Start (Local Setup)
Prerequisites
Node.js (v16+) & Git.

Crypto Wallet: Metamask or Valora.

Fund your Wallet (Important):

You need CELO tokens to pay for Gas fees.

For Testnet (Alfajores), get free tokens here: Celo Faucet.

1. Clone & Install
Bash
git clone [https://github.com/daniel5312/biota_web3_suelo-vivo.git](https://github.com/daniel5312/biota_web3_suelo-vivo.git)
cd biota_web3_suelo-vivo
2. Smart Contracts
Bash
cd smart-contracts
npm install
npx hardhat compile
3. Frontend
Bash
cd ../web
npm install
npm run dev
Open http://localhost:3000 and connect your wallet (ensure you have CELO funds).

Made with 💚 for the planet.
npm install
npm run dev
Open http://localhost:3000 and connect your wallet (ensure you have CELO funds).

Spanish:
# Biota Suelo Vivo 🌿 | Web3 dApp on Celo

![License](https://img.shields.io/badge/license-MIT-green) ![Celo](https://img.shields.io/badge/network-Celo-yellow) ![Status](https://img.shields.io/badge/status-In%20Development-blue)

**(Español)**# Biota Suelo Vivo 🌿 | Web3 dApp on Celo

![License](https://img.shields.io/badge/license-MIT-green) ![Celo](https://img.shields.io/badge/network-Celo-yellow) ![Status](https://img.shields.io/badge/status-In%20Development-blue)

**(Español )**

## 👋 Sobre el Proyecto
¡Hola! Bienvenido al repositorio de **Biota Suelo Vivo**. Este proyecto es una dApp (Aplicación Descentralizada) construida sobre la red **Celo**, enfocada en la regeneración de suelos y la transparencia de datos mediante Blockchain (ReFi - Regenerative Finance).

El objetivo es conectar la tecnología Web3 con el impacto real en la tierra. Aquí encontrarás tanto los contratos inteligentes (la lógica en la blockchain) como el frontend (la web) para interactuar con ellos.

### 📂 Estructura del Proyecto
Como buena práctica de monorepo, he separado la lógica en dos carpetas principales para mantener el orden:

* **`smart-contracts/`**: Aquí vive la magia de la Blockchain. Contiene los contratos en **Solidity**, scripts de despliegue y tests.
* **`web/`**: El Frontend de la aplicación. Es la interfaz con la que interactúan los usuarios, conectando sus wallets para firmar transacciones.

---

## 🛠 Tech Stack (Tecnologías)
Estamos construyendo con herramientas modernas y escalables:

* **Blockchain:** Celo Network (Alfajores Testnet / Mainnet)
* **Smart Contracts:** Solidity
* **Framework de Desarrollo:** Hardhat (para compilar y testear contratos)
* **Frontend:** React / Next.js
* **Librerías Web3:** Ethers.js / Wagmi / Viem

---

## 🚀 Cómo correr el proyecto localmente

Si eres dev y quieres probar esto en tu máquina, sigue estos pasos.

### Prerrequisitos
* Node.js (v16 o superior)
* Git
* Una Wallet (Metamask o Valora) configurada.

### 1. Clonar el repositorio
Bájate el código a tu máquina:
```bash
git clone [https://github.com/daniel5312/biota_web3_suelo-vivo.git](https://github.com/daniel5312/biota_web3_suelo-vivo.git)
cd biota_web3_suelo-vivo
2. Configurar los Smart Contracts
Primero, vamos a instalar las dependencias y compilar los contratos.

Bash
cd smart-contracts
npm install

# Compilar los contratos (genera la carpeta artifacts)
npx hardhat compile

# (Opcional) Correr los tests para asegurar que todo está ok
npx hardhat test
Nota: Necesitarás crear un archivo .env en esta carpeta con tus claves (Alchemy/Infura y Private Key) si quieres desplegar en una red pública. Mira el archivo .env.example como guía.

3. Configurar el Frontend (Web)
Ahora levantemos la interfaz visual.

Bash
# Regresa a la raíz si estás en contracts
cd ../web

npm install
npm run dev
Abre http://localhost:3000 en tu navegador y deberías ver la dApp corriendo.

## 👋 Sobre el Proyecto
¡Hola! Bienvenido al repositorio de **Biota Suelo Vivo**. Este proyecto es una dApp (Aplicación Descentralizada) construida sobre la red **Celo**, enfocada en la regeneración de suelos y la transparencia de datos mediante Blockchain (ReFi - Regenerative Finance).

El objetivo es conectar la tecnología Web3 con el impacto real en la tierra. Aquí encontrarás tanto los contratos inteligentes (la lógica en la blockchain) como el frontend (la web) para interactuar con ellos.

### 📂 Estructura del Proyecto
Como buena práctica de monorepo, he separado la lógica en dos carpetas principales para mantener el orden:

* **`smart-contracts/`**: Aquí vive la magia de la Blockchain. Contiene los contratos en **Solidity**, scripts de despliegue y tests.
* **`web/`**: El Frontend de la aplicación. Es la interfaz con la que interactúan los usuarios, conectando sus wallets para firmar transacciones.

---

## 🛠 Tech Stack (Tecnologías)
Estamos construyendo con herramientas modernas y escalables:

* **Blockchain:** Celo Network (Alfajores Testnet / Mainnet)
* **Smart Contracts:** Solidity
* **Framework de Desarrollo:** Hardhat (para compilar y testear contratos)
* **Frontend:** React / Next.js
* **Librerías Web3:** Ethers.js / Wagmi / Viem

---

## 🚀 Cómo correr el proyecto localmente

Si eres dev y quieres probar esto en tu máquina, sigue estos pasos.

### Prerrequisitos
* Node.js (v16 o superior)
* Git
* Una Wallet (Metamask o Valora) configurada.

### 1. Clonar el repositorio
Bájate el código a tu máquina:
```bash
git clone [https://github.com/daniel5312/biota_web3_suelo-vivo.git](https://github.com/daniel5312/biota_web3_suelo-vivo.git)
cd biota_web3_suelo-vivo
2. Configurar los Smart Contracts
Primero, vamos a instalar las dependencias y compilar los contratos.

Bash
cd smart-contracts
npm install

# Compilar los contratos (genera la carpeta artifacts)
npx hardhat compile

# (Opcional) Correr los tests para asegurar que todo está ok
npx hardhat test
Nota: Necesitarás crear un archivo .env en esta carpeta con tus claves (Alchemy/Infura y Private Key) si quieres desplegar en una red pública. Mira el archivo .env.example como guía.

3. Configurar el Frontend (Web)
Ahora levantemos la interfaz visual.

Bash
# Regresa a la raíz si estás en contracts
cd ../web

npm install
npm run dev
Abre http://localhost:3000 en tu navegador y deberías ver la dApp corriendo.
