const { ethers, upgrades } = require("hardhat");
const fs = require('fs');

async function main() {

 // example by Sinai
  const addressfee="0x28c68B313220f7677739844fB7D3df6C382A2224";
  console.log("Deploying marketplace contract...");
  const NFTMarket = await ethers.getContractFactory("NFTMarket");
  const nftMarket = await upgrades.deployProxy(NFTMarket, [nxtaddr,addressfee], {
    initializer: "initialize",
    });

  let config = `
  export const nftmarketeth = "${nftMarket.address}"
  `


  let data = JSON.stringify(config)
  fs.writeFileSync('./src/contracts-addresses/ethconfig.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });