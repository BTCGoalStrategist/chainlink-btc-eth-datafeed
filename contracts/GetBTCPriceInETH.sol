// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract GetBTCPriceInETH {
  AggregatorV3Interface internal BTC_ETH_dataFeed; // @chainlink interface to retrieve price feeds

  constructor(address _BTC_ETH_dataFeed_address) {
    BTC_ETH_dataFeed = AggregatorV3Interface(_BTC_ETH_dataFeed_address);
  }

  function getLatestBitcoinPriceInWei() public view returns (int256) {
    (
        /* uint80 roundID */,
        int256 answer,
        /*uint startedAt*/,
        /*uint timeStamp*/,
        /*uint80 answeredInRound*/
    ) = BTC_ETH_dataFeed.latestRoundData();
    return answer;
  }

}