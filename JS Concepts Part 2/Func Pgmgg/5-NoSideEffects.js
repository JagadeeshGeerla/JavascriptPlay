

var company = { name: 'Aptean', date: 2018 };

function renameComp(oldComp, newName) {
    return { name: newName, date: oldComp.date }
}

var newCompany = renameComp(company, 'CentralSquare');
console.log(company);
console.log(newCompany);