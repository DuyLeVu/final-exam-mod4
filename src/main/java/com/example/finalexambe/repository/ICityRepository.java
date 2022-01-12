package com.example.finalexambe.repository;

import com.example.finalexambe.model.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<City, Long> {
}
