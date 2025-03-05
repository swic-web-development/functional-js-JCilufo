// Functions Inside Variables and Arrow Functions
const backpackFullOfAmmo = [
    { item: "bullets", quantity: 10, priceEa: 0.5 },
    { item: "shotgun shells", quantity: 4, priceEa: 0.5 },
    { item: "rockets", quantity: 1, priceEa: 5.0 },
    { item: "energy cell units", quantity: 20, priceEa: 0.2 },
]

const calcOrderCost = (order) =>  order.quantity * order.priceEa

// Callback Functions
function doSomethingWithNumber(number, callbackFunction) {
    return callbackFunction(number)
}

function divideByTwo(num) {
    return num / 2
}

function double(num) {
    return num * 2
}

function triple(num) {
    return num * 3
}

console.log(doSomethingWithNumber(42, divideByTwo))
console.log(doSomethingWithNumber(42, double))
console.log(doSomethingWithNumber(42, triple))
