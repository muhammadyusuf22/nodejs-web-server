const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view enginge', 'hbs'); // --> Set View Engine
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('HELLO EXPRESS!')
    // res.send('<h1>HELLO EXPRESS!</h1>')
    // res.send({
    //     name: 'Muhammad Yusuf',
    //     like: ['Coding', 'Copy']
    // });
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Wellcome to My Website',
        currentYear: new Date().getFullYear()
    })
})

app.get('/about', (req, res) => {
    // res.send('About Page'); // -> hanya mencetak About Page pada Browser
    //res.render('about.hbs'); // -> Render page About.hbs pada Folder views
    res.render('about.hbs', {
        pageTitle: 'About Page',
        currentYear: new Date().getFullYear()
    });
})

//   /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    })
})

app.listen(3000);
