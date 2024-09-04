const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const http = require("http");

const web3 = createAlchemyWeb3(
    "wss://eth-sepolia.g.alchemy.com/v2/Pf_lGdmLksXF1SiaaA_LyeY8-N5QIA6o"
);

web3.eth.getFeeHistory(20, "latest", [25, 50, 75]).then(console.log)

const formatOutput = (data, numBlocks) => {
    let blocksOutput = [];

    for (let i = 0; i < numBlocks; i++) {
        blocksOutput.push({
            blockNumber: data.oldestBlock + i,
            baseFeePerGas: Math.round(Number(data.baseFeePerGas[i]) / 10 ** 9),
            gasUsedRatio: data.gasUsedRatio[i],
            reward: data.reward[i].map((r) => Math.round(Number(r) / 10 ** 9)),
        });
    }

    return blocksOutput;
};

web3.eth.getFeeHistory(20, "latest", [25, 50, 75]).then((data) => {
    console.log(formatOutput(data, 20));
});

http
    .createServer(function (req, res) {
        res.write("Hello World! This is an Ethereum Gas Price Tracker using EIP-1559 Standard !!!"); //write a response to the client
        res.end(); //end the response
    })
    .listen(80);