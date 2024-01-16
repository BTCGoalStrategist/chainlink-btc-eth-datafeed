# Get BTC Price in ETH from ChainLink Price Feeds

This project contains a smart contract written in Solidity that allows users to get the current price of 1 Bitcoin in Ethers using ChainLink Price Feeds. It also includes deployment and testing scripts using Hardhat.

## How to Run

Follow these steps to deploy and test the contract:

### Prerequisites

- Node.js and npm installed
- Hardhat installed globally (`npm install -g hardhat`)

### Installation
Install dependencies:

  ```bash
  npm install
  ```

### Run Hardhat Node
Run the Hardhat node with Ethereum mainnet forking
  ```bash
  npx hardhat node --fork <ALCHEMY_API_URL>
  ```
  Replace <ALCHEMY_API_URL> with the Alchemy API URL.

### Deploy Contract
Deploy the contract to the local Hardhat network:
```bash
npx hardhat run scripts/deploy.js --network localhost
```
    