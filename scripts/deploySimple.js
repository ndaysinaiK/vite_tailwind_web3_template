const hre = require("hardhat");
const fs = require('fs');

async function main() {

 const companyAddress= "0x324a3D5951F94b40C566B180066D6B2ab7BE8D54"; // Main metamask address

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(companyAddress,"https://cyan-gigantic-ermine-219.mypinata.cloud/ipfs/QmNaPrkHqccj4BnxDQJJhThPEW2CeSyDk3TGvPS2ddMYtQ/");
  await nft.deployed();
  console.log("nft deployed to:", nft.address);

  let config = `
  export const nftaddress = "${nft.address}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('./src/contract-address/ethconfig.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });