CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## a) VARCHAR - armazenar caracteres
## PRIMARY KEY - identificação unica para cada registro da tabela
## NOT NULL - não permite o campo ser nulo
## DATE - armazena data

SHOW DATABASES;

SHOW TABLES;

## b) SHOW DATABASE - mostra os databases de um schema
## SHOW TABLES - mostra as tabelas de um database

DESCRIBE Actor;

## c) DESCRIBE - mostra os campos de uma tabela

