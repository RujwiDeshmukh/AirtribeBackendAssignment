const { fetchQuestions, questionData } = require("./questions");
const Question = require("../model/question");

const questionList = [];

const pushArray = (arr) => {
  questionList.push(...arr);
};

const crawlData = async () => {
  const url = questionList.shift();
  console.log("Current URL: ", url);
  const currentQuestion = await Question.findOne({ url });

  if (!currentQuestion) {
    await questionData(url, num, pushArray);
  } else {
    currentQuestion.totalReferenceCount += 1;
    await currentQuestion.save();
    await fetchQuestions(num + 1, pushArray);
    num += 1;
  }
};

let num = 1;
exports.crawler = async () => {
  await fetchQuestions(num, pushArray);
  while (questionList.length > 0) {
    await crawlData();
    await crawlData();
    await crawlData();
    await crawlData();
    await crawlData();
  }
};

// Deleting Data from the DB
exports.deleteData = async () => {
  try {
    await Question.deleteMany();
    console.log("Data successfully deleted!");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
