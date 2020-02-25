const hbs = require('express-handlebars');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const user = require('./lib/user');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.get('/', (req, res) =>{ 
    res.render('index');
});
app.get('/login', (req, res)=>{
    res.render('login')
});
app.get('/signup', (req, res)=>{
    res.render('signup')
});
app.listen(3000, () =>{
    console.log('server is listening on port 3000')
});
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster-frhfb.mongodb.net/userdb?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
app.post('/')