const fs = require('fs');

fs.appendFile('hello.html', 'Hello I am Html', (err) => {
    if(err) throw err;
    console.log('file Created')
});
