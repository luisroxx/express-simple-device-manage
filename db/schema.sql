CREATE TABLE manufacturer_type (
  id SERIAL PRIMARY KEY,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE factory (
  id SERIAL PRIMARY KEY,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE device_type (
  id SERIAL PRIMARY KEY,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE device_attributes (
  id SERIAL PRIMARY KEY,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(50) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  device_type_id INTEGER REFERENCES device_type (id)
);

CREATE TABLE device (
  id SERIAL PRIMARY KEY,
  is_deleted BOOLEAN NOT NULL DEFAULT FALSE,
  name VARCHAR(50) NOT NULL,
  ip VARCHAR(15) NOT NULL,
  factory_id INTEGER NOT NULL REFERENCES factory(id),
  manufacturer_type_id INTEGER NOT NULL REFERENCES manufacturer_type(id),
  device_type_id INTEGER NOT NULL REFERENCES device_type(id),
  is_online BOOLEAN NOT null,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE device_attribute_value (
  id SERIAL PRIMARY KEY,
  value VARCHAR(50) NOT NULL,
  device_id INTEGER NOT NULL REFERENCES device(id),
  device_attribute_id INTEGER NOT NULL REFERENCES device_attributes(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);