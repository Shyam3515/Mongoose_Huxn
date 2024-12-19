import mongoose from "mongoose";

// Define schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10, // Validate money value
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    {
      value: { type: String },
      published: { type: Date, default: Date.now }, // Default to current date
    },
  ],
});

// Creating model
const MovieModel = mongoose.model("Movie", movieSchema);

const insertManyDocs = async () => {
  try {
    // Creating new document
    const m1 = new MovieModel({
      name: "Extraction 2",
      rating: 4,
      money: 60000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie" }],
    });
    // Creating new document
    const m2 = new MovieModel({
      name: "John Wick Chapter 4",
      rating: 5,
      money: 23000,
      genre: ["action"],
      isActive: true,
      comments: [{ value: "John doesn't seem that angery any more :(" }],
    });
    // Creating new document
    const m3 = new MovieModel({
      name: "Mission: Impossible - Dead Reckoning Part One",
      rating: 4,
      money: 60000,
      genre: ["action", "spy", "crime film", "thriller"],
      isActive: true,
      comments: [{ value: "Ok that was Tom but where is Jerry?" }],
    });
    // Creating new document
    const m4 = new MovieModel({
      name: "Transformers: Rise of the Beasts",
      rating: 4,
      money: 220000,
      genre: ["action", "adventure", "Science Fiction", "Fantasy"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });
    // Creating new document
    const m5 = new MovieModel({
      name: "The Expendables 4",
      rating: 4,
      money: 220000,
      genre: ["action", "war", "comedy", "thriller"],
      isActive: true,
      comments: [{ value: "That was enough VFX for today" }],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//Retrieve Data
const readDocs = async () => {
  try {
    const result = await MovieModel.find({ money: { $gt: 60000 } });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//Update Data
const updateDocs = async () => {
  try {
    const result = await MovieModel.updateMany(
      { rating: 5 },
      { comments: [{ value: "5 star Movie" }] }
    );
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

//Delete Data
const deleteDocs = async () => {
  try {
    const result = await MovieModel.deleteOne({ name: "Extraction 2" });
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export { insertManyDocs, readDocs, updateDocs, deleteDocs };
