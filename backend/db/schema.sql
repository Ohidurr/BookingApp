DROP DATABASE IF EXISTS booking_db1;
CREATE DATABASE booking_db1;

-- \c booking_db1;

DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS meetings;



CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY UNIQUE,
    attendees TEXT,
    description_text TEXT,
    created_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

CREATE TABLE meetings (
    meeintg_id SERIAL PRIMARY KEY,
    upload_id INT REFERENCES Uploads(id) ON DELETE CASCADE,
    attendee TEXT, 
    floor INT,
    capacity INT
);