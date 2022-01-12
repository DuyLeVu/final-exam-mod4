package com.example.finalexambe.controller;

import com.example.finalexambe.model.Nation;
import com.example.finalexambe.service.Nation.NationServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/nations")
public class NationRestController {
    @Autowired
    NationServiceImpl nationService;

    @GetMapping
    public ResponseEntity<Iterable<Nation>> findAll() {
        Iterable<Nation> nations = nationService.findAll();
        return new ResponseEntity<>(nations, HttpStatus.OK);
    }
}
