const path = require('path');
const fs = require('fs');

var files = ['Module1.js', 'Module2.js', 'dummy.js'];

files.forEach(file => {
    try {
        const filePath = path.resolve(process.env.HOME, file);
        const readFile = fs.readFileSync(filePath);

        console.log(`File data is ${readFile}`);
    }
    catch (err) {
        console.log(err);
    }
})