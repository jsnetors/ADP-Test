//Simple function to separate the transactions from the response object
const getTransactions = function (data) {
  if (data.hasOwnProperty("transactions")) {
    return data["transactions"];
  }
};

module.exports = getTransactions;
