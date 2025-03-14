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
const monsters = [
    // Deals 10-60 damage per bite
    { name: 'Cacodemon', health: 400, damage: 35 },
    
    // Deals 15-75 damage per claw/fireball
    { name: 'Baron of Hell', health: 1000, damage: 45 },
    
    // Deals 20-200 damage per rocket
    { name: 'Cyberdemon', health: 4000, damage: 125 },
    
    // Deals 5-50 damage per bite
    { name: 'Hell Knight', health: 800, damage: 25 },
    
    // Deals 10-100 damage per bite
    { name: 'Imp', health: 200, damage: 20 },
    
    // Deals 5-25 damage per bite
    { name: 'Lost Soul', health: 100, damage: 10 },
    
    // Deals 5-50 damage per bite
    { name: 'Pinky', health: 300, damage: 15 },
    
    // Deals 10-100 damage per bite
    { name: 'Revenant', health: 500, damage: 30 },
    
    // Deals 5-50 damage per bite
    { name: 'Spectre', health: 200, damage: 20 },
    
    // Deals 5-50 damage per bite
    { name: 'Spider Mastermind', health: 2000, damage: 50 },
    
    // Deals 5-50 damage per bite
    { name: 'Vile', health: 1000, damage: 40 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombie', health: 100, damage: 5 },
    
    // Deals 5-50 damage per bite
    { name: 'Zombieman', health: 200, damage: 10 },
  ];

// I used the map method to create an array that only displays the names of each monster.
  const monsterNames = monsters.map(monster => monster.name);

  // I used the filter method to create an array that only displays the monster that have more than 150 health.
  const healthyMonsters = monsters.filter(monster => monster.health > 150);

  // I used the reduce method to calculate the total health of all the monsters.
  const totalHealth = monsters.reduce((accumulator, monster) => {
    return accumulator + monster.health;
  }, 0);

  // I used the sort method to sort the monsters by damage in descending order.
  const sortedMonsters = monsters.sort((a,b) => b.damage - a.damage);

  console.log(monsterNames, healthyMonsters, totalHealth, sortedMonsters);