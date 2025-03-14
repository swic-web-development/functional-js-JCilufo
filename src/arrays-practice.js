// Filter
const players = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const playersWithMoreFragsThanDeaths = players.filter((player) => {

    console.log(`We are now looking at this player: ${player.name}`)

return player.frags > player.deaths
})

console.log(playersWithMoreFragsThanDeaths)

// Reduce
const players1 = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const totalFrags = players1.reduce((total, player) => total + player.frags, 0
)

console.log(totalFrags)

// Find
const players2 = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const firstPlayerWithMoreFragsThanDeaths = players2.find((player) => player.frags > player.deaths)

console.log(firstPlayerWithMoreFragsThanDeaths)

// Some
const players3 = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const hasFrags = players3.some((player) => player.frags)

console.log(hasFrags)

// Every
const players4 = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const allPlayersHaveMoreFragsThanDeaths = players4.every((player) => player.frags > player.deaths)

console.log(allPlayersHaveMoreFragsThanDeaths)

// Sort
const players5 = [
    { name: "Doomguy", frags: 25, deaths: 0 },
    { name: "Slayer", frags: 25, deaths: 1 },
    { name: "Marine", frags: 12, deaths: 15 },
    { name: "noob", frags: 0, deaths: 25 },
]

const sortedPlayers = players5.sort((a, b) => b.frags - a.frags)

console.log(sortedPlayers)

// Coding challenge 1
const backpackFullOfAmmo = [
    { item: "bullets", quantity: 10, priceEa: 0.5 },
    { item: "shotgun shells", quantity: 1, priceEa: 0.5 },
    { item: "rockets", quantity: 1, priceEa: 5.0 },
    { item: "energy cell units", quantity: 20, priceEa: 0.2 },
]

// In order to calculate the total value of the backpack, I took the quantity of each item and multiplied it by the price. I display the item, quantity, and price followed by the total for each item. Then I use the accumulator starting at 0 and add the total of each item to eventually display the total value of the backpack.
const totalValue = backpackFullOfAmmo.reduce((accumulator, currentItem) => {
    const itemTotal = currentItem.quantity * currentItem.priceEa;
    console.log(`Item: ${currentItem.item}, Quantity: ${currentItem.quantity}, Price Each: ${currentItem.priceEa}, Item Total: ${itemTotal}`);
    return accumulator + itemTotal;

}, 0)

console.log(`Total Value: ${totalValue}`);

// Coding challenge 2
