//https://eth-goerli.alchemyapi.io/v2/UK3ELpy2oH30QDYemVnYRDuP0UTzm9Jd

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.alchemyapi.io/v2/UK3ELpy2oH30QDYemVnYRDuP0UTzm9Jd",
      accounts: ["fcc3c528fb45f35e2d67a2a87e7b456c629e38b1ab46519e65a1a5adc4ed5385"]
    }
  }
}