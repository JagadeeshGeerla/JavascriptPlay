const path = require('path');
const fs = require('fs');

var files = ['Module2.js'];

files.forEach(file => {
    try {
        const filePath = path.resolve(__dirname, file);
        //const readFile = fs.readFileSync(filePath);
        fs.readFile(filePath, function cbFunc1(err, data) {
            fs.writeFile(filePath + '.copy', data, function cbFunc2(err) {
                //Nest more callbacks here!!
            })
            // console.log(`File data is ${data}`);
        });
        console.log('Test');
    }
    catch (err) {
        console.log(err);
    }
})