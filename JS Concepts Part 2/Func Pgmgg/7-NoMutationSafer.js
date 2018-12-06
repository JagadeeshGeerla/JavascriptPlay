

var numSysts = ['Roman', 'Arabic', 'Chinese'];

const newNumSysts = numSysts.map((num) => {
    if (num === 'Arabic') { return 'Hindu-' + num; }
    else { return num; }
});

console.log(newNumSysts);
console.log(numSysts);