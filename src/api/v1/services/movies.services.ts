import MovieModel from "../models/movies.model";

export const getMovie = async (id: string) => {
  try {
    const response = await MovieModel.findById(id);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const getMovies = async () => {
  try {
    const response = await MovieModel.find({});
    console.log(response);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const createMovie = async (movie: any) => {
  try {
    const response = await MovieModel.create(movie);

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const updateMovie = async (id: string, body: any) => {
  try {
    const response = await MovieModel.findByIdAndUpdate({ _id: id }, body, {
      new: true,
    });

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};

export const deleteMovie = async (id: string) => {
  try {
    const response = await MovieModel.findByIdAndUpdate(
      { _id: id },
      { $set: { active: false } }
    );

    return response;
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
