import { Schema, model } from "mongoose";
import { Movie } from "../interfaces/movies.interface";

const MovieSchema = new Schema<Movie>(
  {
    title: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    trailer: {
      type: String,
      required: true,
    },
    sinopsis: {
      type: String,
      required: true,
    },
    genders: {
      type: [String],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const MovieModel = model("movies", MovieSchema);
export default MovieModel;
