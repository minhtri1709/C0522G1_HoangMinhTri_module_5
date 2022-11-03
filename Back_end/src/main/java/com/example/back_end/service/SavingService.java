package com.example.back_end.service;

import com.example.back_end.model.Saving;
import com.example.back_end.repository.ISavingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SavingService implements ISavingService {
    @Autowired
    private ISavingRepository savingRepository;

    @Override
    public Page<Saving> findAll(Pageable pageable) {
        return savingRepository.findAll(pageable);
    }

    @Override
    public void delete(int id) {
        savingRepository.deleteById(id);
    }

    @Override
    public Saving update(int id, Saving saving) {
        return null;
    }
}
