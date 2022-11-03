package com.example.back_end.controller;

import com.example.back_end.model.Saving;
import com.example.back_end.service.ISavingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class SavingController {

    @Autowired
    private ISavingService savingService;

    @GetMapping("/api/saving")
    public ResponseEntity<Page<Saving>> getList(@PageableDefault(value = 5) Pageable pageable) {
        Page<Saving> savings = savingService.findAll(pageable);
        if (savings.isEmpty()) {
            return new ResponseEntity<Page<Saving>>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<Page<Saving>>(savings, HttpStatus.OK);
    }

    @DeleteMapping("/api/saving/{id}")
    public ResponseEntity<Saving> deleteSaving(@PathVariable int id) {
        savingService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
