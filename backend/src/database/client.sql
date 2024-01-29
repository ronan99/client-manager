CREATE TABLE client (
	id SERIAL PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	email varchar(255) NOT NULL,
	phone VARCHAR(255) NOT NULL,
	coordinates POINT,
	created_at TIMESTAMP DEFAULT NOW()
);