package com.Nithees.stockmanagement.dto.Response;

import com.Nithees.stockmanagement.Model.enumerate.Role;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AuthenticationResponse {
    private String token;
    private Long uid;
    private String username;
    private String mobilenum;
    private Role role;
    private String email;
}
