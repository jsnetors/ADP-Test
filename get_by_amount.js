//This returns the highest earner's tr
const getByHighestAmount = function (data) {
  //This sums the amount totals aggregating by employee IDs
  const sumAmountByID = (objs) => {
    const sumResult = {};
    objs.forEach((cur) => {
      const curID = cur.employee.id;
      sumResult[curID] = (sumResult[curID] || 0) + cur.amount;
    });
    return sumResult;
  };

  //Finds out who's the top earner
  const topEarner = Object.entries(sumAmountByID(data)).sort(
    (x, y) => y[1] - x[1]
  )[0];

  //Gets top earner's transactions and returns the results
  const topEarnerTransactions = data.filter(
    (transaction) =>
      transaction.employee.id === topEarner[0] && transaction.type === "alpha"
  );
  return topEarnerTransactions.map((transaction) => transaction.transactionID);
};

module.exports = getByHighestAmount;
