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

function returnsAnAnonymousFunction() {
    return function(){}
}