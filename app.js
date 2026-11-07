//Import the express module
import express from 'express';

//Create an instance of an
//express application
const app = express();

//Define a port number for
//our server to listen on
const PORT = 3007;

//Create an array to store orders
const orders = [];

//Enable static file serving
app.use(express.static('public'));

//Add "middleware" to allow the app to parse form data
//Access form data through req.body
//app.use(express.urlencoded({ extended: true }));

// Set view engine to EJS
app.set('view engine', 'ejs');

//Define a default route ("/")
app.get('/', (req, res) => {
    const person = {name: 'Donald Duck', occupation: 'Navy', favoriteColor: 'Blue'};
    res.render('home', {person});
});

//Start the server on the desginated port
app.listen(PORT, () => {
    console.log(`Server is running at
        http://localhost:${PORT}`);
});
