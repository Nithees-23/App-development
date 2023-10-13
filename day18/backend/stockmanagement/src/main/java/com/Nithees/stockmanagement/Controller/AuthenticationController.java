
package com.Nithees.stockmanagement.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Nithees.stockmanagement.Service.UserService;
import com.Nithees.stockmanagement.constant.Api;
import com.Nithees.stockmanagement.dto.Response.AuthenticationResponse;
import com.Nithees.stockmanagement.dto.request.AuthenticationRequest;
import com.Nithees.stockmanagement.dto.request.RegisterRequest;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(Api.AUTH)
@RequiredArgsConstructor
@Tag(name = "Authentication")
@CrossOrigin
public class AuthenticationController {

    private final UserService userservice;

    @PostMapping("/signup")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        boolean isRegistered = userservice.userRegistration(request);
        return isRegistered ? ResponseEntity.ok("User registeration completed")
                : ResponseEntity.badRequest().body("Something went wrong!");
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(userservice.userAuthentication(request));
    }
}
