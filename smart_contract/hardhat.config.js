require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/hkm7c0g3QO1E9eusRWD8DcywUQjIDm2k',
      accounts: ['f9498f6622544454afefd22bc1387ce6e14a4a04977b4bab9b357787430648c1']
    }
  }
};
