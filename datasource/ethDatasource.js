const { RESTDataSource } = require("apollo-datasource-rest");

//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

const api_key = process.env.ETHERSCAN_API;

//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  async etherBalanceByAddress() {
    return this
      .get
      //Insert API Endpoint - For Get Ether Balance for a Single Address
      (`${this.baseURL}?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${api_key}`);
  }

  async totalSupplyOfEther() {
    return this
      .get
      //Insert API Endpoint - For Get Total Supply of Ether
      (`${this.baseURL}?module=stats&action=ethsupply&apikey=${api_key}`);
  }
}

module.exports = EtherDataSource;
