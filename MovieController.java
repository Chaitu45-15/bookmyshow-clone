package com.bookmyshow.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.bookmyshow.entity.Movie;
import com.bookmyshow.service.MovieService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class MovieController {

    @Autowired
    private MovieService movieService;

    // Get All Movies
    @GetMapping("/movies")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies();
    }

    // Get Movie By ID
    @GetMapping("/movies/{id}")
    public Movie getMovieById(@PathVariable Long id) {
        return movieService.getMovieById(id);
    }
}