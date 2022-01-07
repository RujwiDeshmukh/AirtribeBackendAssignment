require("./mongodb");
const saveDataToCSV = require("./controller/saveQuestions");
const { crawler } = require("./controller/crawler");

crawler();
console.log("Server Started");

process.on("SIGINT", saveDataToCSV.saveCsv);
