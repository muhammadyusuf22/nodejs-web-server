const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view enginge', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('HELLO EXPRESS!')
    // res.send('<h1>HELLO EXPRESS!</h1>')
    res.send({
        name: 'Muhammad Yusuf',
        like: ['Coding', 'Copy']
    });
})

app.get('/about', (req, res) => {
    // res.send('About Page'); // -> hanya mencetak About Page pada Browser
    //res.render('about.hbs'); // -> Render page About.hbs pada Folder views
    res.render('about.hbs', {
        pageTitle: 'About From server.js',
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
