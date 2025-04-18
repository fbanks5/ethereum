async function main() {
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, Ethereum!");

    await greeter.deployed();
    console.log("Greeter deployed to:", greeter.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});