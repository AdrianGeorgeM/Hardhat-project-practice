async function main() {
	const Counter = await hre.ethers.getContractFactory("Counter"); // get the contract factory
	const counter = await Counter.deploy(); // deploy the contract

	await counter.deployed(); // wait until the contract is deployed

	console.log(`Counter deployed to: ${counter.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
