// Functions Inside Variables and Arrow Functions
const backpackFullOfAmmunition = [
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

// Map Method
const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = numbers.map( (number) => number * 2
)

console.log(doubledNumbers)

const backpackFullOfAmmo = [
    { item: "bullets", quantity: 10, priceEa: 0.5 },
    { item: "shotgun shells", quantity: 4, priceEa: 0.5 },
    { item: "rockets", quantity: 1, priceEa: 5.0 },
    { item: "energy cell units", quantity: 20, priceEa: 0.2 },
]

function calculateOrderCost(order) {
    return order.quantity * order.priceEa
}

const totalValue = backpackFullOfAmmo.map((ammo) => {
    console.log(ammo)
    return calculateOrderCost(ammo)
})

console.log(totalValue)
