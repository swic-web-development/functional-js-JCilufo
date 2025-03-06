`const hobbits = [`  

    { name: "Pippin", age: 29 },
    { name: "Sam", age: 39 },
    { name: "Frodo", age: 51 },
    { name: "Merry", age: 37 },
    { name: "Bilbo", age: 129 },
`];`  

`const  adultHobbit= hobbits.find(({ age }) => age >= 33);`  

`console.log(adultHobbit);`
