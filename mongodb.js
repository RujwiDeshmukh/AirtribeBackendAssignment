// Database URL
const mongoose = require('mongoose');
require('dotenv').config();

console.log(process.env.DATABASE)
const db = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );
  
  // Database connection
  const mongo = mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log(`MongoDB Connected`));

