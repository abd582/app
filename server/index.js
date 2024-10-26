const express = require('express');
const mysql = require('mysql');

const app = express();

// Create MySQL connection
const conn = mysql.createConnection({
    host: 'fincloud.iwhost.org',     // Replace with your host
    user: 'origina_Abd',          // Replace with your MySQL username
    password: 'yh+njQI_Nf7T',          // Replace with your MySQL password
    database: 'origina_services'       // Replace with your database name
});

// Connect to MySQL database
conn.connect((error) => {
    if (error) {
        console.error('Error connecting to the database:', error);
        return;
    }
    console.log('Connected to the database');
});

// Start the server
const PORT = 5000; // You can change this port as needed
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});
