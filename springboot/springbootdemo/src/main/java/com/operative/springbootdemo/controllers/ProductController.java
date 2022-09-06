package com.operative.springbootdemo.controllers;

import com.operative.springbootdemo.entity.Product;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class ProductController {
    List<Product> productList = new ArrayList<Product>();

    @PostMapping("/products")
    public Product addProduct(@RequestBody Product product){
        this.productList.add(product);
        return product;
    }
    @GetMapping("/products")
    public List<Product> getProduct(){
        return this.productList;
    }
}
