/*const path = require('path');
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
*/

// The above callback pattern is an example of pyramid of doom.
// Enter promises :)

// const fs = require('fs');
const {readFile} = require('fs').promises; 
//const util = require('util');

//const readFile = util.promisify(fs.readFile);

async function main() {
    console.log(`Starting to read`);
    const data = await readFile(__filename);
    console.log(`File data is here ${data}`);
}

main();

console.log('TEST');