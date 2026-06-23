const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
}

const name = person.name
const age = person.age
const key = person.key

const { name: name2, age: age2, key: key2 } = person
console.log({ name, age, key })
console.log({ name2, age2, key2 })


interface Hero {
    name: string
    age: number
    key: string
    rank?: string
}

const useContext = (hero: Hero) => {
    const { age, key, name, rank = 'sin rango' } = hero
    return {
        keyName: key,
        user: {
            name,
            age,
        },
        rank,
    }
}


/* const context = useContext(person) */
/* console.log(context) */

/* context.user.age */

/* const {keyName, user:{name:name3, age:age3}, rank} = useContext(person) */
const { keyName, user: user3, rank } = useContext(person)
const { name: name3, age: age3 } = user3

console.log({ keyName, name3, age3, rank })