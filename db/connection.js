const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: '@Okinawa1234',
        database: 'employee_tracker'
    },
    console.log('You are now connected to the Employee Tracker Database')
);


module.exports = db;