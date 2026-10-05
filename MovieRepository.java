package com.bookmyshow.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bookmyshow.entity.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

}