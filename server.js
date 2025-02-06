//Server Setup

const app = require('./app')
const PORT = process.env.PORT || 8000;
const pool = require('./config/db');

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
      console.error('Error connecting to the database:', err);
    } else {
      console.log('Database connected successfully. Current timestamp:', res.rows[0].now);
    }
});

pool.connect(err => {
    if(err){
        console.log(err.message);
    }else{
        console.log('Connected to db');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});

//NOTE : NEXT HOW TO RUNNING BACKEND AND SUCCESSFULLY TO SEND DATA TO POSTGRESQL