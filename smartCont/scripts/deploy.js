const main = async () => {
    const transactionsFactory = await hre.ethers.getContractFactory("Transactions");
    const transactionsContract = await transactionsFactory.deploy();
  
    await transactionsContract.deployed();
  
    console.log("Transactions address: ", transactionsContract.address);
  };