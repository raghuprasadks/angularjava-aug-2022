package com.operative.entitymanagerdemo;

import com.operative.entitymanagerdemo.models.Contact;
import com.operative.entitymanagerdemo.repository.EntityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class EntitymanagerdemoApplication implements CommandLineRunner {

	@Autowired
	private EntityRepository repo;
	public static void main(String[] args) {
		//System.out.println("EntitymanagerdemoApplication");
		SpringApplication.run(EntitymanagerdemoApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		System.out.println("run");
		//createContact();
		//updateContact();
		listContacts();
		getContact();
		deleteContact();
	}

	private void createContact() {
/**
		Contact newContact = new Contact();
		newContact.setName("Peter Smith");
		newContact.setEmail("peter.smith@gmail.com");
		newContact.setAddress("New York, USA");
		newContact.setPhone("123456-2111");

		repo.save(newContact);
 **/
		Contact newContact = new Contact();
		newContact.setName("Suresh");
		newContact.setEmail("suresh@gmail.com");
		newContact.setAddress("Koramangala, India");
		newContact.setPhone("9388838383");

		repo.save(newContact);

	}

	private void updateContact() {
		Contact existContact = new Contact();

		existContact.setId(2);
		existContact.setName("Suresh Kumar");
		existContact.setEmail("peter.smith@gmail.com");
		existContact.setAddress("Koramangala, India");
		existContact.setPhone("9388838384");

		Contact updatedContact = repo.update(existContact);

	}

	private void listContacts() {
		List<Contact> listContacts = repo.findAll();
		listContacts.forEach(System.out::println);
	}

	private void getContact() {
		Integer contactId = 1;
		Contact contact = repo.findById(contactId);

		System.out.println(contact);
	}

	private void deleteContact() {
		Integer contactId = 1;
		repo.delete(contactId);
	}
}
