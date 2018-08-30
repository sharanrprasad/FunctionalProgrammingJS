//has three parts -  Command giver, command receiver and Conductor.
//command giver passes the instruction
//command receiver gets the instruction and calls the right conductor with the right command object.
//conductors are actually executing the commands

var conductor = require('./conductor');
var { ExitCommand, CreateCommand } = require('./commands');

var { createInterface }  = require('readline');
var rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// users are prompted to enter different commands. to create and modify files.
console.log('create <fileName> <text> | history | undo | redo | exit');
rl.prompt();

//Here this the command receiver from the terminal and calls the conductor with the right command object.
rl.on('line', input => {

  var [ commandText, ...remaining ] = input.split(' ')
  var [ fileName, ...fileText ] = remaining
  var text = fileText.join(' ')

  switch(commandText) {

    case "history":
      conductor.printHistory();
      break;

    case "undo":
      conductor.undo();
      break;

    case "redo":
      conductor.redo();
      break;

    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "create" :
      conductor.run(new CreateCommand(fileName, text));
      break;

    default :
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();

});


