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
$(document).ready(function(){

    })
    $("#paasivu").click(function(){
        $(".main_col").empty();
        var txt1 = $("<p></p>").text("Teemme hiekkapuhalluksia, maalauksia ja kaikenlaisia autojen korjaustöitä");
        var tx = $("<p></p>").text("Myymme jenkkiautojen purkuosia ja entisöimme vanhoja amerikanrautoja.");
        $(".main_col").append(txt1, tx)

    $("#esittely").click(function(){
      $(".main_col").empty();
      var txt1 = $("<p></p>").text("Teemme hiekkapuhalluksia, maalauksia ja kaikenlaisia autojen korjaustöitä");
      var tx = $("<p></p>").text("Myymme jenkkiautojen purkuosia ja entisöimme vanhoja amerikanrautoja.");
      $(".main_col").append(txt1, tx)
      
    })
    $("#yhteystiedot").click(function(){
      $(".content").empty();
      var txt2 = $("<p></p>").text("Tommi Ryynänen p. 0400-1394459");
      var txt3 = $("<p></p>").text("mail@rustbros.fi");
$(".content").append(txt2, txt3)
    })
    })