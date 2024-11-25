import express from "express";
import connectDB from "./db/connectDB.js";
import {
  insertManyDocs,
  readDocs,
  updateDocs,
  deleteDocs,
} from "./models/movies.js";

const app = express();

const port = process.env.PORT || 8000;
const database_url =
  process.env.DATABASE_URL || "mongodb://localhost:27017/movieDB";

// Connect to the database
connectDB(database_url);

// Base route
app.get("/", (req, res) => {
  res.send("Hello Mongo...");
});

// Route to create a new document (controlled execution)
app.get("/create-movie", async (req, res) => {
  try {
    await insertManyDocs();
    res.send("Document created successfully!");
  } catch (err) {
    res.status(500).send("Error creating document: " + err.message);
  }
});

//Route to read the document
app.get("/read-movie", async (req, res) => {
  try {
    await readDocs();
    res.send("Document read successfully!");
  } catch (err) {
    console.log(err);
  }
});

//Route to update the document
app.get("/update-movie", async (req, res) => {
  try {
    await updateDocs();
    res.send("Document updated successfully!");
  } catch (err) {
    console.log(err);
  }
});

//Route to delete the document
app.get("/delete-movie", async (req, res) => {
  try {
    await deleteDocs();
    res.send("Document deleted successfully!");
  } catch (err) {
    console.log(err);
  }
});

// Start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));
