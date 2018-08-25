// proxy is a middle man which can prevent or middleman the requests

var Fs_Proxy = require('./Fs_Proxy');

//create a new proxy here
var fs = new Fs_Proxy(require('fs'));

// var txtFile = path.join(__dirname, 'Readme.txt');
var mdFile = path.join(__dirname, 'Readme.md');

var result = (error, contents) => {

  if (error) {
    console.log('\x07');
    console.error(error);
    process.exit(0);
  }

  console.log('reading file...');
  console.log(contents);

}

// fs.readFile(txtFile, 'UTF-8', result);
fs.readFile(mdFile, 'UTF-8', result);
