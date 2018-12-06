

function makeAdjectifier(adjective) {
    return function (noun) {
        return adjective + ' ' + noun;
    };
}

var holify = makeAdjectifier('holy');

console.log(holify('JS'));
console.log(holify('cow'));