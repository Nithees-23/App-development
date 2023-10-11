package com.Nithees.stockmanagement.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Nithees.stockmanagement.Model.Product;

@Repository
public interface ProductRepo extends JpaRepository<Product,Integer> {
    public List<Product> findByPname(String pname);
    public List<Product> findByPcategory(String pcategory);

}
