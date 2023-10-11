package com.Nithees.stockmanagement.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nithees.stockmanagement.constant.Api;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.ADMIN)
@RequiredArgsConstructor
@Tag(name = "Admin")
@CrossOrigin
public class AdminController {

    @GetMapping
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok().body("Welcome Admin, proceed");
    }
}
