package org.acme.champion;  // 데이터베이스 테이블용

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import jakarta.persistence.Entity;

@Entity  // @는 어노테이션, 엔티티는 테이블
public class Champion extends PanacheEntity { // extends는 자바 문법에서 사용하는 상속 문법
    public String name; // 챔피언 이름
    public String role; // 역할 (전사, 마법사 등)
    public String line; // 라인 (탑, 미드 등)
}