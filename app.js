const axios = require("axios");

const getByYear = require("./get_by_year");
const getTransactions = require("./get_transactions");
const getByHighestAmount = require("./get_by_amount");

//This retrieves the raw data object and computes it into the required format
axios
  .get("https://interview.adpeai.com/api/v2/get-task")
  .then((response) => {
    const usersTransactions = getTransactions(response.data);
    const transactionsByYear = getByYear(usersTransactions, 2021);
    const topEarnerTransIDs = getByHighestAmount(transactionsByYear);

    postResults({
      id: response.data.id,
      result: topEarnerTransIDs,
    });
  })
  .catch((error) => {
    console.error(error);
  });

//Function to post the required object
function postResults(postObj) {
  axios
    .post("https://interview.adpeai.com/api/v2/submit-task", postObj)
    .then((response) => console.log(response.status, '(load delivered)'))
    .catch((error) => {
      console.error(error);
    });
}
