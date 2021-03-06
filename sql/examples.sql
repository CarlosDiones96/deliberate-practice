CREATE DATABASE aliendatabase;

USE aliendatabase;

CREATE TABLE aliens_abduction (
    first_name varchar(30),
    last_name varchar(30),
    when_it_happened varchar(30),
    how_long varchar(30),
    how_many varchar(30),
    alien_description varchar(100),
    what_they_did varchar(10),
    other varchar(100),
    email varchar(50)
);


INSERT INTO aliens_abduction (first_name, last_name,
    when_it_happened, how_long, alien_description,
    what_they_did, fang_spotted, other, email)
    VALUES ('Sally', 'Jones','3 days ago', 
    '1 day', 'four', 'green with six tentacles', 'we did...',
    'I may have seen your dog. Contact me', 'sally@gregs.com')
)

SELECT first_name, last_name FROM aliens_abduction

SELECT * FROM aliens_abduction
