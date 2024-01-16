const hre = require("hardhat");


async function main() {
  console.log("Contract deployment ...");
  const BTC_ETH_PriceFeed_address = "0xdeb288F737066589598e9214E782fa5A8eD689e8"; // BTC / ETH Price feed address on Eth mainnet
  let GetBTCPriceInETHContract = await hre.ethers.deployContract("GetBTCPriceInETH", [BTC_ETH_PriceFeed_address], {});
  await GetBTCPriceInETHContract.waitForDeployment();
  console.log('GetBTCPriceInETHContract deployed to:', GetBTCPriceInETHContract.target);

  // Get BTC price in Wei
  const BTCPriceInWei = await GetBTCPriceInETHContract.getLatestBitcoinPriceInWei();
  console.log("1 BTC = "+ BTCPriceInWei.toString()+ " Wei");

  // Convert result to Ether -> wei to ETH (1 ETH = 1000000000000000000 Wei)
  const BTCPriceInETH = ethers.formatEther(BTCPriceInWei); 
  console.log("1 BTC = " + BTCPriceInETH + " ETH");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
