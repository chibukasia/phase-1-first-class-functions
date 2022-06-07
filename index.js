function receivesAFunction(sayHi) {
    sayHi()
}
function sayHi() {
    return `say hi`;
}

function returnsANamedFunction() {
    return sayHi;
}

function returnsAnAnonymousFunction() {
    return function () {
        return "hello everyone";
    }
}