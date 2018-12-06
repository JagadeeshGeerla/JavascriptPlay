
// for (var i = 1; i <= 5; i++) {
//     (function (j) {
//         setTimeout(function () {
//             console.log("i: " + j);
//         }, j * 1000);
//     })(i);
// }


for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log("i: " + i);
    },  1000);
}



