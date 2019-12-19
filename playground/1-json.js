const fs = require('fs')

var dataBuffer = fs.readFileSync('1-jsonData.json')
var dataJSON = dataBuffer.toString()
var data = JSON.parse(dataJSON)

console.log('')
console.log('orignal data: ')
console.log('Name: ', data.name)
console.log('Planet: ', data.planet)
console.log('Age: ', data.age)


//updating data
data.age = 25
data.name = 'ALex'

console.log('')
console.log('updating data... ')
console.log('Name: ', data.name)
console.log('Planet: ', data.planet)
console.log('Age: ', data.age)


//writing changes to file
const bookJSON = JSON.stringify(data)
fs.writeFileSync('1-jsonData.json', bookJSON)

console.log('')
console.log('Writing Changes to file... ')

//reading back file to check changes
var dataBuffer = fs.readFileSync('1-jsonData.json')
var dataJSON = dataBuffer.toString()
var data = JSON.parse(dataJSON)

console.log('')
console.log('Reading back file to check changes...')
console.log('Name: ', data.name)
console.log('Planet: ', data.planet)
console.log('Age: ', data.age)