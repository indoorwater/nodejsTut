const fs = require('fs');
const chalk = require('chalk')
var util = require('util');

const file = './notes.json'


const addNotes = (title, body) => {
    console.log(chalk.blue('Loading Adding notes module...'))
    const notes = loadNotes()
    const duplicatesNotes = notes.find((note) => note.title === title)

    if (!duplicatesNotes){
        console.log(chalk.yellow("Adding New Note..."))
        console.log(chalk.yellow("Title:", title))
        console.log(chalk.yellow("Body:", body))
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green("New note successfully added"))
    } else {
        console.log(chalk.red("Note Title \"", title, "\" already exist!! please choose a new title and re-try"))
    }
     
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync(file)
        var dataJSON = dataBuffer.toString()
        var data = JSON.parse(dataJSON)
        return data

    } catch (e){
        return []

    } 
}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync(file, dataJSON)
}

const removeNotes = (title) =>{
    console.log(chalk.blue('Loading Removing notes module...'))
    const notes = loadNotes()

    var checkNotes = notes.find((note) => note.title === title)

    if(!checkNotes){
        console.log(chalk.red("No Title with the name \"", title, "\" exist, please type in the correct and try again"))

    } else {
        console.log(chalk.yellow('Removing notes...'))
        var updatedNotes =  notes.filter((note) => note.title != title)

        saveNotes(updatedNotes)
        console.log(chalk.green('\"', title, '\" note has been removed'))
    }  
    
}


const listNotes = () =>{
    console.log(chalk.blue('Loading list notes module...'))
    console.log('')
    const notes = loadNotes()
    for(var i = 0, len = notes.length; i < len; i++){
        row = notes[i]

        console.log(chalk.green('Title:'), row['title'])
        console.log(chalk.green('Body:'), row['body'])
        console.log(chalk.greenBright('----------------------'))
    }
    
}

const readNotes = (title) =>{
    console.log(chalk.blue('Loading list notes module...'))
    const notes = loadNotes()

    var updatedNotes = notes.find((note) => note.title === title)

    if(!updatedNotes){
        console.log(chalk.red("No Title with the name \"", title, "\" exist, please type in the correct and try again"))

    } else {
        console.log(chalk.yellow('Reading notes...'))      
        console.log(chalk.green('Title:'), updatedNotes['title'])
        console.log(chalk.green('Body:'), updatedNotes['body'])
        
    }
    
}

const getNotes = () =>{
    console.log('getting notes...')
    return fs.readFileSync(file, 'utf-8')
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    readNotes: readNotes
}