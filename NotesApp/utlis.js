const fs = require('fs');

console.log('utils.js is running...')

const name = 'firstName: alex'

const getNotes = function (file){
    return fs.readFileSync(file, 'utf-8')
}

module.exports = getNotes;