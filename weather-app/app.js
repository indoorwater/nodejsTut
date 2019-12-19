const request = require('request')


const url = 'https://api.darksky.net/forecast/15d4feb5ff0481ea274d9025d577258f/37.8267,-122.4233'

request({url: url}, (error, response) =>{
    if(!error){
        //var data = JSON.parse(response.body)
        console.log(response)
    } else {
        console.log(error)
    }
    
})

