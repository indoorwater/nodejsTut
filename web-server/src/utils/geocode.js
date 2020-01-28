process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow API call without signed Certificates 
const request = require('request') //API call libary 
const chalk = require('chalk') //Text Colour Libary 



function geocode (address, callback){

    //declare variblies for MAP APi Call
    var accessToken = '?limit=1&access_token=pk.eyJ1IjoiaW5kb29yd2F0ZXIiLCJhIjoiY2s1N2RsdWgwMDE5bzNlcDIwZG1pcHh2MSJ9.JLJE5abjhLq__89UADlOqQ'
    var url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + address + ".json" + accessToken

    // call the MAP API to get the longitude, latitude of bendigo to put into the dark Sky API to get the weather
    request({url, json: true}, (error, {body}) =>{
        if (body.features.length === 0) {
            //incorrect address inputed 
             
            var error = "No Such address in the Maps database, Please try a different address"
            console.log(chalk.red(error))
            callback(error)
        
        } else if(!error){ 
            //delcare variablies 
            var features = body.features[0] //get to the data
            var name = features.place_name
            var latitude = features.center[0]
            var longitude = features.center[1]

           
            
            //print out data
            //console.log(features) //this is to see all the data for troubleshooting
            console.log(chalk.greenBright("Town's name: " + name))
            console.log(chalk.greenBright("the current latitude: " + latitude))
            console.log(chalk.greenBright("the current longitude: " + longitude))

            //call DarkSky Function with update URL and name of the town we're getting the weather for
            callback(0, longitude, latitude, name) 
            
        } else {
            //print out error
            console.log(chalk.red("ERROR!!!!!"))
            console.log(error)
            callback(error)
        }
        
    })
}


module.exports = geocode;