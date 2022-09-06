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

    @DeleteMapping("/products/{id}")
    public boolean deleteProduct(@PathVariable("id") int id){
        System.out.println("deleteDepartments");
        boolean isFound = false;
        for (Product product: this.productList){
            if (product.getId()==id){
                this.productList.remove(product);
                isFound=true;
                break;
            }
        }
        return isFound;

    }
    @PutMapping("/products/{id}")
    public String updateProduct(@RequestBody Product product,@PathVariable("id") int id){
        System.out.println("updateProduct");
        boolean isFound = false;
        String msg = "";
        for (Product prod: this.getProduct()){
            if (prod.getId() ==id){
                int index = this.getProduct().indexOf(prod);
                this.getProduct().set(index,prod);
                isFound=true;
            }
        }
        if(isFound)
            msg=product.getName() + " updated successfully";
        else
            msg=product.getName() + " is not updated successfully";
        return msg;
    }
}
