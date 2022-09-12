package com.operative.entitymappingdemo.repsitories;

import com.operative.entitymappingdemo.entities.EmployeeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<EmployeeEntity,Integer> {
}
