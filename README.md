# AirtribeBackendAssignment
## Problem Statement:
**Recursively crawl** [https://stackoverflow.com/questions](https://stackoverflow.com/questions) using Node.js based crawler, harvest all questions on Stack Overflow and store them in a database of your choice. 

What do you need to store?

1. Every unique URL (Stack Overflow question) you encountered.
2. The total reference count for every URL (How many time this URL was encountered).
3. Total # of upvotes and total # of answers for every question.
4. Dump the data in a CSV file when the user kills the script.

Things you should keep in mind:

1. Maintain a **concurrency of 5 requests** at all times. Refrain from using **throttled-request** package to limit concurrency.
2. Your solution needs to be **asynchronous** in nature.
3. If you are using **request.js**, do not use its connection pool to throttle # of requests. 
4. You can use cheerio or similar library for HTML parsing.

## Solution =>

I solved this problem using following approach:-

By traversing the stackoverflow questions page, I have created the array where I have all the questions link
We now have total number of pages under each category so we can traverse each page and parse the questions. Page number is selected using query parameter page prsent in url.
On traversing each page we get question link, number of votes and number of answers. After scraping ,the contents we store in our database which will be of type (key)url :(value), (key should be url as url will always be unique) count of number of times question appeared, number of votes, number of answers.
When the script is terminated, all the questions which are stored in the database here databse used is mongodb is saved into a CSV File, evertime CSV file is created.

## Concurrency Control 

For handling the concurrency control problem, whenever I found that question list has length greater than 0 then I making request to crawler 5 times .
So, it ensures that we are making request only 5 times to the crawler function.
