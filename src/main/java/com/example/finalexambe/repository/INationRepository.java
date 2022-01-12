package com.example.finalexambe.repository;

import com.example.finalexambe.model.Nation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface INationRepository extends JpaRepository<Nation, Long> {
}
