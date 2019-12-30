const express = require('express')
const app = express()
app.use(express.static(__dirname + "/public"))
app.set('view engine', 'hbs');
const hbs = require('hbs');
require("./hbs/helpers")
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
app.get('/', (req, res) => {
    res.render("home.hbs", {
        nombre: "Carlos Miguel"
    })
});

app.get('/about', (req, res) => {
    res.render("about.hbs", {
        nombre: "Carlos Miguel"
    })
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});