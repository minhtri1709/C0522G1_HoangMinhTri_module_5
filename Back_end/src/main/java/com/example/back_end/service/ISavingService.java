package com.example.back_end.service;

import com.example.back_end.model.Saving;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ISavingService {
    Page<Saving> findAll(Pageable pageable);

    void delete(int id);

    Saving update(int id, Saving saving);
}
