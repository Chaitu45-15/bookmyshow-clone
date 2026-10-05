package com.bookmyshow.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookmyshow.entity.Movie;
import com.bookmyshow.repository.MovieRepository;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    // Get All Movies
    public List<Movie> getAllMovies() {
        return movieRepository.findAll();
    }

    // Get Movie By ID
    public Movie getMovieById(Long id) {
        return movieRepository.findById(id).orElse(null);
    }

}