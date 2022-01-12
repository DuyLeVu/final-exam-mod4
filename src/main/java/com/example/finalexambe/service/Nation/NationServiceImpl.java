package com.example.finalexambe.service.Nation;

import com.example.finalexambe.model.Nation;
import com.example.finalexambe.repository.INationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class NationServiceImpl implements NationService{
    @Autowired
    private INationRepository iNationRepository;
    @Override
    public Iterable<Nation> findAll() {
        return iNationRepository.findAll();
    }

    @Override
    public Optional<Nation> findById(Long id) {
        return iNationRepository.findById(id);
    }

    @Override
    public void save(Nation nation) {
        iNationRepository.save(nation);
    }

    @Override
    public void remove(Long id) {
        iNationRepository.deleteById(id);
    }
}
