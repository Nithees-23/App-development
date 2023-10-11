package com.Nithees.stockmanagement.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Nithees.stockmanagement.Model.Review;
import com.Nithees.stockmanagement.Repository.ReviewRepo;
@Service
public class ReviewService {
    @Autowired
    public ReviewRepo rr;
    public void postreview(Review rm)
    {
        rr.save(rm);
    }
    public List<Review> getreview()
    {
        return rr.findAll();
    }
    public void deletereview(int rid)
    {
        rr.deleteById(rid);
    }
}
