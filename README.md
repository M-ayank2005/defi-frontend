# DeFi Bank

Welcome to the DeFi Bank project! 🚀 This decentralized application (DApp) leverages Ethereum's blockchain technology to offer various financial services. Built with React, it allows users to interact with Ethereum in several ways.

## Features

- **Send ETH** 💸: Send Ethereum to any address securely.
- **Receive ETH** 📩: Receive Ethereum using a QR code system.
- **Check Balance** 💰: View the balance of your Ethereum account.
- **Mint NFTs** 🎨: Create and mint NFTs on the blockchain.
- **View Transactions** 🧾: Track and view your previous Ethereum transactions.
- **Buy NFTs from Marketplace** 🛒: Explore and purchase NFTs from the open marketplace.
- **Loan Services** 💵: Take and repay loans on the blockchain.

  ## Pages

### 🏠 Home Page

The **Home** page is the entry point of the application. It provides an overview of the DeFi Bank's features and facilitates navigation to other sections.

### 💸 Send ETH

On the **Send ETH** page, users can send Ethereum to any address. It features a secure form to input the recipient's address and amount. Transactions are processed and signed through MetaMask for enhanced security.

### 📩 Receive ETH

The **Receive ETH** page allows users to generate a QR code for their Ethereum address, making it simple for others to send ETH directly to their account.

### 💰 Check Balance

The **Check Balance** page displays the current Ethereum balance of the connected account. It fetches and shows the balance using MetaMask.

### 🎨 Mint NFTs

The **Mint NFTs** page enables users to create and mint their own NFTs on the Ethereum blockchain. Users input details for their NFT, and the minting process is handled through a smart contract.

**Contract Address for Minting NFTs:**  
`0xe47fc10cc5994b9794b5bd8bda1094e2ca9dff14`

### 🧾 View Transactions

The **View Transactions** page shows a history of all Ethereum transactions made by the user. It retrieves transaction data from the blockchain and presents it in a list format.

**Contract Address for Viewing Transactions:**  
`0x9ceed7b63162838afc2c5b7a4fe91352f840623f`

### 💵 Loan Services

The **Loan Services** page provides functionality for users to take out and repay loans. It interacts with the loan smart contract to manage loan requests and repayments.

**Contract Address for Loan Services:**  
`0x44ceb3891b9c19c57f69ba9e7892ac1338db9da1`

## Project Structure

```bash
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── contracts
│   │   ├── Transactions.json
│   │   ├── MintNFT.json
│   │   └── LoanService.json
│   ├── pages
│   │   ├── Home.js
│   │   ├── SendEth.js
│   │   ├── ReceiveEth.js
│   │   ├── CheckBalance.js
│   │   ├── MintNFT.js
│   │   ├── Transactions.js
│   │   └── Services.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── .gitignore
├── package.json
└── README.md

```


## Run Scripts

To get started with the project, follow these steps:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/defi-bank.git
   
2. **Run npm install in terminal:**
    ```bash
    npm i
      

3. **Run the App :**
    ```bash
    npm start

### Thanks for Exploring my project and this repository .For Contributing clone the repository and start contributing.


