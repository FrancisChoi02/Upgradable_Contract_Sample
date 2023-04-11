import { ethers} from "hardhat";

async function main() {
  // 部署 Logic1 合约
  const Logic1 = await ethers.getContractFactory("Logic1");
  const logic1 = await Logic1.deploy();
  await logic1.deployed();
  console.log("Logic1 deployed to:", logic1.address);

  // 部署 Upgradable 合约
  const Upgradable = await ethers.getContractFactory("Upgradable");
  const upgradable = await Upgradable.deploy(logic1.address);
  await upgradable.deployed();
  console.log("Upgradable deployed to:", upgradable.address);

  // 部署 Logic2 合约
  const Logic2 = await ethers.getContractFactory("Logic2");
  const logic2 = await Logic2.deploy();
  await logic2.deployed();
  console.log("Logic2 deployed to:", logic2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });