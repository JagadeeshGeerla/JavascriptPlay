

var company = { name: 'Aptean', date: 2018};

function renameComp(newName) {
    company.name = newName;
    console.log('Renamed!');
}

renameComp('CentralSquare');
console.log(company);