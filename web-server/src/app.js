process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow API call without signed Certificates 
const request = require('request') //API call libary 
const chalk = require('chalk') //Text Colour Libary 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()


// setups hbs access
app.set('views',path.join(__dirname, '../views'))
app.set('view engine','hbs')
hbs.registerPartials(path.join(__dirname, '../views/parts'))

// setups CSS, Images and client-side javascripts access
const publicDir = path.join(__dirname, '../public')
app.use(express.static(publicDir)) // allows access to images, CSS and client-side javascripts in express


// get index page
app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App'
    })
})

// get about page
app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'About Page'
    })
})

// get help page
app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Help page'
    })
})

// get weather API call
app.get('/weather', (req, res) =>{
    if(!req.query.address){
        return res.send({
            error: 'Address must be provide'
        })
    } else {
        var forecastList = [];
        var address = req.query.address

        geocode(address, (error, longitude, latitude) => {
            if(!(error === 0)){
                return res.send({
                    error: error
                })
            } else {
                forecast(longitude, latitude, displayForecast)
            }
        })

        function displayForecast(error, daily) {
            if(!(error === 0)){
                return res.send({
                    error: error
                })
            } else {
                console.log(chalk.greenBright("displaying Forecast data..."))

            
                forecastList.push({
                name: address + " Week's Forecast..."
                })
              
                for(var i = 0, len = daily.length; i < len; i++ ){
                    var day = daily[i]
                   
                    forecastList.push({
                        forecast: "Day " + i + ", has the current forcast of " + day.summary
                    })
                }
                res.send(forecastList)
                console.log(chalk.yellow("method completed successfully"))
            }
        }
       
       
    }
})






// help 404 error page
app.get('/help/*', (req, res) =>{
    res.render('error', {
        title: 'Help error page'
    })
})

// generally 404 error page
app.get('*', (req, res) =>{
    res.render('error', {
        title: 'error page'
    })
})

//start web server
app.listen(3000, () =>{
    console.log("Server is up on port 3000")
})