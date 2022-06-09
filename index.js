// The `receivesAFunction` function should:

//   - take a _callback function_ as an argument
//   - call the callback function
//   - it doesn't matter what this function returns, so long as it calls the
//     callback function

function receivesAFunction(alishka) {
    alishka();
}

function returnsANamedFunction() {
    function toodColdToday() {return "JUly is approaching "}
    return toodColdToday;
}

// The `returnsAnAnonymousFunction` function should:
//   - take no arguments
//   - return an _anonymous function_
function returnsAnAnonymousFunction() {
    return function(){}
}