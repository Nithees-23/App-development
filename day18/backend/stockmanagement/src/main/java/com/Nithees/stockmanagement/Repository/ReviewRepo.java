package com.Nithees.stockmanagement.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Nithees.stockmanagement.Model.Review;


@Repository
public interface ReviewRepo extends JpaRepository<Review,Integer> {
    
}
