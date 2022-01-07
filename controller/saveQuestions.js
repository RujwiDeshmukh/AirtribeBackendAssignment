const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Question = require("../model/question");
const {deleteData} = require("./crawler")
const csvWriter = createCsvWriter({
  path: "curatedList.csv",
  header: [
    { id: "name", title: "NAME" },
    { id: "url", title: "URL" },
    { id: "upvotesCount", title: "Total Upvotes" },
    { id: "totalAnswers", title: "Total Answers" },
    { id: "referenceCount", title: "Reference" },
  ],
});

const generateCsv = async (data) => {
  try {
    await csvWriter.writeRecords(data);
    console.log("CSV File is Ready");
  } catch (error) {
    console.log("Can't create a CSV", error);
  }
};

exports.saveCsv = async () => {
  try {
    const questionList = await Question.find();
    console.log(questionList)
    await generateCsv(questionList);
  } catch (error) {
    process.exit(1);
  }
  process.exit(1);
};


