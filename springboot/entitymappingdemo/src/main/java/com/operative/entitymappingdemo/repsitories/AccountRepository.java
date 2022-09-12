package com.operative.entitymappingdemo.repsitories;

import com.operative.entitymappingdemo.entities.AccountEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<AccountEntity,Long> {
}
