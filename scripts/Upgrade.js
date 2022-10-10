
const { ethers, upgrades } = require('hardhat');

// example by Sinai
async function main () {
  const NFTMarket = await ethers.getContractFactory('NFTMarket');
  console.log('Upgrading contract...');
  await upgrades.upgradeProxy('0x2C8415f4FAb67cDB649DAB666D7310996203A90b', NFTMarket); // address represents the address of the previous deployed proxy
  console.log('contract upgraded');
}

main();