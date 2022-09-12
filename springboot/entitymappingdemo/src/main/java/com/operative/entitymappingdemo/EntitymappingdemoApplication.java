package com.operative.entitymappingdemo;

import com.operative.entitymappingdemo.entities.AccountEntity;
import com.operative.entitymappingdemo.entities.EmployeeEntity;
import com.operative.entitymappingdemo.repsitories.AccountRepository;
import com.operative.entitymappingdemo.repsitories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EntitymappingdemoApplication implements CommandLineRunner {
	@Autowired
	AccountRepository accountRepository;
	@Autowired
	EmployeeRepository employeeRepository;
	public static void main(String[] args) {
		SpringApplication.run(EntitymappingdemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		AccountEntity accountEntity = new AccountEntity();
		accountEntity.setAccountNumber("100");
		accountRepository.save(accountEntity);
		EmployeeEntity employeeEntity = new EmployeeEntity();
		employeeEntity.setFirstName("raghu");
		employeeEntity.setLastName("prasad");
		employeeEntity.setEmail("raghu@gmail.com");
		employeeEntity.setAccount(accountEntity);
	//	employeeRepository.save(employeeEntity);
		employeeRepository.save(employeeEntity);

	}
}
