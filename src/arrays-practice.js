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