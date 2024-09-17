// Connects the user to the database

const PostgresSQL = require('PostgresSQL');

const connection = new PostgresSQL({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'process.env.POSTGRES_PASSWORD',
    database: 'employeess'
});

// added a message to know if connected to the database
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to the database');
        return;
    }
    console.log('Connected to the database');
});