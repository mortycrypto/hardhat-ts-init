import { task } from "hardhat/config";
import '@typechain/hardhat'
import "@nomiclabs/hardhat-waffle";
import "hardhat-tracer";
import "hardhat-gas-reporter";
import "solidity-coverage";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
	const accounts = await hre.ethers.getSigners();

	for (const account of accounts) {
		console.log(account.address);
	}
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default {
	gasReporter: {
		enabled: false,
	},
	skipFiles: [], // Coverage
	solidity: {
		compilers: [
			{ version: "0.4.18" },
			{ version: "0.4.22" },
			{ version: "0.6.12" },
			{ version: "0.7.6" },
			{ version: "0.8.4" },
		],
	},
};
