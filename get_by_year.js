//Filters transactions by the selected year
const getByYear = function (transactions, year) {
  const filteredResults = transactions.filter((transaction) => {
    const transYear = new Date(transaction.timeStamp).getFullYear();
    return transYear === year;
  });
  return filteredResults;
};

module.exports = getByYear;
