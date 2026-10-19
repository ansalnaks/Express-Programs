import type { Request, Response } from "express";
import { movies } from "../models/movieModel.js";
import type{Movie} from "../types/movie.js"

// Get All Movies
export const getMovies = (req: Request, res: Response) => {
    res.status(200).json(movies);
};







// Get Movie By ID
export const getMovieById = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const movie = movies.find((m) => m.id === id);
    if (!movie) {
        res.status(404).json({
            message: "Movie not found"
        });
       return;
    }
    res.status(200).json(movie);
};



// Add Movie
export const addMovie = (req: Request, res: Response) => {
    const { title, rating } = req.body;
    const newMovie: Movie = {
        id: movies.length + 1,
        title,
        rating
    };
    movies.push(newMovie);
    res.status(201).json({
        message: "Movie Added Successfully",
        movie: newMovie
    });
};



// Update Movie
export const updateMovie = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const movie = movies.find((m) => m.id === id);
    if (!movie) {
        res.status(404).json({
            message: "Movie not found"
        });
        return;
    }
    movie.title = req.body.title;
    movie.rating = req.body.rating;
    res.status(200).json({
        message: "Movie Updated Successfully",
        movie
    });
};

// Delete Movie
export const deleteMovie = (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const index = movies.findIndex((m) => m.id === id);
    if (index === -1) {
        res.status(404).json({
            message: "Movie not found"
        });
        return;
    }
    movies.splice(index, 1);
    res.status(200).json({
        message: "Movie Deleted Successfully"
    });
};


// 1. Get Movies with Rating Greater Than 4
export const getHighRatedMovies = (req: Request, res: Response) => {

    const highRated = movies.filter(movie => movie.rating > 4);

    res.status(200).json(highRated);

};

// 2. Search Movie by Title
export const searchMovie = (req: Request, res: Response) => {
    const title = req.query.title as string;
    const movie = movies.find(
        movie => movie.title.toLowerCase() === title.toLowerCase()
    );
    if (!movie) {
        res.status(404).json({ message: "Movie not found" });
        return;
    }
    res.status(200).json(movie);
};

// 3. Sort Movies by Rating (Highest First)
export const sortMovies = (req: Request, res: Response) => {
    const sorted = [...movies].sort((a, b) => b.rating - a.rating);
    res.status(200).json(sorted);
};

// 4.Count Total Movies
export const countMovies = (req: Request, res: Response) => {
    res.status(200).json({
        totalMovies: movies.length
    });

};

// 5. Highest Rated Movie
export const highestRatedMovie = (req: Request, res: Response) => {
    const movie = [...movies].sort((a, b) => b.rating - a.rating)[0];
    res.status(200).json(movie);

};

// 6. Lowest Rated Movie
export const lowestRatedMovie = (req: Request, res: Response) => {
    const movie = [...movies].sort((a, b) => a.rating - b.rating)[0];
    res.status(200).json(movie);
};


