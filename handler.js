'use strict';

const ipsum = require("lorem-ipsum")
const dictionary = require("./dictionary")
// worked last time now for logs to confirm
module.exports.ipsum = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: ipsum({
      words: dictionary,
    }),
  };
callback(null, response);
};
