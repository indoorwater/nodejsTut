process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow API call without signed Certificates 

const request = require('request') //API call libary 
const chalk = require('chalk') //Text Colour Libary 



//call Dark Sky Weather API to get current Temperature
function forecast (longitude, latitude, callback) {

    //printing out that the function is running
    console.log('')
    console.log(chalk.greenBright("Running forecast Function Call..."))

     //options in the DarkSky API call
     var options = '?units=si'
     var url = 'https://api.darksky.net/forecast/15d4feb5ff0481ea274d9025d577258f/' + longitude +',' + latitude + options

    //calling the DARK Sky API
    request({url, json: true}, (error, {body}) =>{
        if (body.error) {

            //incorrect address inputed 
            console.log(chalk.red("longitude and latitude are incorrect, Please try a different postions"))
        
        } else if(!error){ 
            // delcare varaiblies 
        var daily = body.daily.data

            //retiurn data
            console.log(chalk.greenBright("Returning Data..."))
            callback(daily)
            
        } else {

            //print out error
            console.log(chalk.red("ERROR!!!!!"))
            console.log(error)
        }
        
    })
}

module.exports = forecast;