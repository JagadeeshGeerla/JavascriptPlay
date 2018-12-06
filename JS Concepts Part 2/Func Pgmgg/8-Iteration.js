

function sum(numbers) {
    let total =0;
    for(i=0; i<numbers.length; i++) {
        total +=numbers[i];
    }
    return total;
}

console.log(sum([0,1,2,3,4]));


function sum(numbers) {
    if(numbers.length === 1) {
        return numbers[0];
    } else {
        return numbers [0] + sum(numbers.slice(1));
    }
}

console.log(sum([0,1,2,3,4]));
