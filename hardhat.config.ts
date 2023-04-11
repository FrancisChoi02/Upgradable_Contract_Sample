import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {},
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    bnbtest: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545/",
      chainId: 97, // BSC 测试网的链 ID
      accounts: [process.env.PRIVATE_KEY],
      gas: "auto",
      gasPrice: 20000000000, // 20 gwei
    },
  },
  mocha: {
    timeout: 200000,
  },
};


export default config;

