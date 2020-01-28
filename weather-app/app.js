process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow API call without signed Certificates 
const request = require('request') //API call libary 
const chalk = require('chalk') //Text Colour Libary 
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')


//create geocode command
yargs.command({
    command: 'geocode',
    describe: 'Look up an address and get the forecast',
    builder: {
        address: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        if(argv.address === ""){
            console.log(chalk.red("Address cannot be blank, please put in an address"))
        }else {
            geocode(argv.address, (longitude, latitude) => {
                forecast(longitude, latitude, displayForecast)
            })
        }
    }
})




function displayForecast(daily) {
    
    //print out data
    console.log('')

    console.log(chalk.yellow("Week's Forecast..."))
    for(var i = 0, len = daily.length; i < len; i++ ){
        var day = daily[i]
        console.log(chalk.yellow("Day " + i + ", has the current forcast of " + day.summary))
    }

}

//call Dark Sky Weather API to get current Temperature
function callDarkSky (longitude, latitude, name) {

     //options in the DarkSky API call
     var options = '?units=si'
     var url = 'https://api.darksky.net/forecast/15d4feb5ff0481ea274d9025d577258f/' + longitude +',' + latitude + options

    //printing out that the function is running
    console.log('')
    console.log(chalk.greenBright("Running Dark Sky API Call..."))

    //calling the DARK Sky API
    request({url, json: true}, (error, response) =>{
        if(!error){ 
            // delcare varaiblies 
            var currently = response.body.currently

            //print out data
            console.log(chalk.greenBright("Returning Data..."))
            console.log(chalk.yellow("In " + name +" it is  currently " + currently.temperature + " degress. There is a " + currently.precipProbability + "% chance of rain."))
            
        } else {
            //print out error
            console.log(chalk.red("ERROR!!!!!"))
            console.log(error)
        }
        
    })
}


//parse the agurments and displaying it
yargs.parse()