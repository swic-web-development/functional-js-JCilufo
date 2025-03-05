// Functions Inside Variables and Arrow Functions
const backpackFullOfAmmo = [
    { item: "bullets", quantity: 10, priceEa: 0.5 },
    { item: "shotgun shells", quantity: 4, priceEa: 0.5 },
    { item: "rockets", quantity: 1, priceEa: 5.0 },
    { item: "energy cell units", quantity: 20, priceEa: 0.2 },
]

const calcOrderCost = (order) =>  order.quantity * order.priceEa
