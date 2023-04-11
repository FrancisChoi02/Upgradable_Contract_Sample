import { ethers } from "hardhat";
import { expect } from "chai";

describe("Upgradable", function () {
  it("Should change the words state variable using logic contracts", async function () {
    // 在这里，我们将根据文件名获取合约工厂
    const Logic1 = await ethers.getContractFactory("Logic1");
    const logic1 = await Logic1.deploy();
    await logic1.deployed();

    const Upgradable = await ethers.getContractFactory("Upgradable");
    const upgradable = await Upgradable.deploy(logic1.address);
    await upgradable.deployed();

    const Logic2 = await ethers.getContractFactory("Logic2");
    const logic2 = await Logic2.deploy();
    await logic2.deployed();

    // 使用 Logic1.foo 函数
    const upgradableWithLogic1 = Logic1.attach(upgradable.address);
    await upgradableWithLogic1.foo();
    expect(await upgradableWithLogic1.words()).to.equal("old");

    // 升级合约到 Logic2
    await upgradable.upgrade(logic2.address);

    // 使用 Logic2.foo 函数
    const upgradableWithLogic2 = Logic2.attach(upgradable.address);
    await upgradableWithLogic2.foo();
    expect(await upgradableWithLogic2.words()).to.equal("new");
  });
});