const chalk = require('chalk')
var util = require('util');
const tasks = {
    tasks: [
        {
            text: 'Shoping',
            compelted: true,
        },
        {
            text: 'cleaning yard',
            compelted: false,
        },
        {
            text: 'Film course',
            compelted: false,
        }
    ],
    getTasksToDo() {
        // return this.tasks.filter((task)=> task.compelted === false)

        var failedTasks = ''
        this.tasks.forEach((task) => {
            if (task.compelted === false){
                var text = task.text
                var compelted = task.compelted
                failedTasks += (chalk.blue(text) + ' : ' + chalk.red(compelted) + '\n')
                
            }
        })
        return failedTasks
    }

}

console.log(tasks.getTasksToDo())