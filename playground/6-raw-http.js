process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0; //allow API call without signed Certificates 
const https = require("https")


var url = 'https://api.darksky.net/forecast/15d4feb5ff0481ea274d9025d577258f/-36 .7589,144.2826?units=si'

const request = https.request(url, (response) => {
    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log("body:", body)
    })

})

request.on('error', (error)=> {
    console.log("An Error", error)

})


request.end()