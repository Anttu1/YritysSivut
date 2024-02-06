//Express.js palvelin//
const path = require ('path')

const express = require('express')
const fs = require('fs').promises

const app = express()

const henkilokunta = require('./henkilokunta.json')
//GET ALL etsitään kaikki henkilökunta jsonista
app.get('/api/henkilokunta', (req, res) => {
    res.json(henkilokunta)
})


//Tehdään polkumääritys public-kansioon
const polku = path.join (__dirname, './public')

//Sanotaan että em. polussa on tiedostosisältö jota palvelin käyttää kun se saa http request
app.use(express.static(polku))

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})