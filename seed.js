const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.DATABASE_URL);
const Book = require("./models/book");

async function seed() {
  await Book.create({
    title: "Javascript for Beginner",
    description: "JS functions and queries",
    status: "borrowed",
  });
  await Book.create({
    title: "Chris H's Java Adventures",
    description: "a realistic adventure",
    status: "available",
  });

  await Book.create({
    title: "ABC JaaScript",
    description: "Java script ",
    status: "available",
  });

  console.log("yippy done it");
  mongoose.disconnect();
}
seed();
