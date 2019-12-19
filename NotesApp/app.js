const notes = require('./notes.js')
const validator = require('validator')
const yargs = require('yargs')
const chalk = require('chalk')
var util = require('util');

//update version
yargs.version('1.1.0')


//create add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note text',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv) {
        notes.addNotes(argv.title, argv.body)
    }
})


//create Remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.removeNotes(argv.title)
    }
})


//create List command
yargs.command({
    command: 'list',
    describe: 'list all note',
    builder: {},
    handler(){
        notes.listNotes()
    }
})


//create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})


//parse the agurments and displaying it
yargs.parse()

