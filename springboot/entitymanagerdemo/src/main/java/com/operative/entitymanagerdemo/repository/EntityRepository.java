package com.operative.entitymanagerdemo.repository;

import com.operative.entitymanagerdemo.models.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import javax.transaction.Transactional;
import java.util.List;

@Repository
public class EntityRepository {

    @Autowired
    private EntityManager entityManager;

    @Transactional
    public void save(Contact contact) {
        entityManager.persist(contact);
    }

    @Transactional
    public Contact update(Contact contact) {
        return entityManager.merge(contact);
    }

    public List<Contact> findAll() {
        String jpql = "SELECT c FROM Contact c";
        TypedQuery<Contact> query = entityManager.createQuery(jpql, Contact.class);

        return query.getResultList();
    }

    public Contact findById(Integer id) {
        return entityManager.find(Contact.class, id);
    }

    @Transactional
    public void delete(Integer contactId) {
        Contact contact = entityManager.find(Contact.class, contactId);
        entityManager.remove(contact);
    }
}
