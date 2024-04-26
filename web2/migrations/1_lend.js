const Lend = artifacts.require("lendContract");

module.exports = function(deployer) {
  deployer.deploy(Lend);
};
