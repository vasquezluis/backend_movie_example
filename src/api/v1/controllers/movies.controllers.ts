import { Request, Response } from "express";
import { response } from "../../../common/response";
import {
  getMovie,
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../services/movies.services";

export const getItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await getMovie(id);

    response.success(res, 200, `Movie ${id}`, result);
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, error);
    }
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const movies = await getMovies();
    console.log(movies);

    response.success(res, 200, "List of movies", movies);
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, error);
    }
  }
};

export const createItem = async ({ body }: Request, res: Response) => {
  try {
    const movie = body;

    const result = await createMovie(movie);

    response.success(res, 201, "Movie created!", result);
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, error);
    }
  }
};

export const updateItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;
    const movie = req.body;

    const result = await updateMovie(id, movie);

    response.success(res, 200, "Movie updated!", result);
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, error);
    }
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const {
      params: { id },
    } = req;

    const result = await deleteMovie(id);

    response.success(res, 204, "Movie deleted!", result);
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, error);
    }
  }
};
