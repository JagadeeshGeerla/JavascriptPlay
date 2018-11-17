// function (exports, require, module, __filename, __dirname) {

    // let i = 0;   //stays within this module scope due to automatic wrapping of the funciton

    //console.log(arguments);

    exports.a = 42;     // exports is an alias for module.exports
    module.exports.b = 35 // same as prev line.

    // Exports is an alias for module.exports, i.e. exports = module.exports. 
    // If, you reassign the exports object to something else, it doesn't have any difference, 
    // you just end up reassigning the exports object
    // exports = () => {}  // no use
    // module.exports = () => {}  // use this if you want to export a function.

    // return module.exports;   // Default return. No need to add this return stmt in the module.
// }(module.exports, .......)