import { Router } from "express";
import {getMovies,getMovieById,addMovie,updateMovie,deleteMovie,getHighRatedMovies,searchMovie,sortMovies,countMovies, highestRatedMovie,lowestRatedMovie} from "../controllers/movieControllers.js";

const router = Router();

router.get("/movies", getMovies);

router.post("/movies", addMovie);


router.put("/movies/:id", updateMovie);
router.delete("/movies/:id", deleteMovie)
router.get("/movies/highrated", getHighRatedMovies);
router.get("/movies/search", searchMovie);
router.get("/movies/sort", sortMovies);
router.get("/movies/count", countMovies);
router.get("/movies/highest", highestRatedMovie);
router.get("/movies/lowest", lowestRatedMovie);
router.get("/movies/:id", getMovieById);

export default router;