interface Person {
    firstName: string
    lastName: string
    age: number
    address: Address
}
interface Address{
    postal_code: string
    city: string
}
const ironman : Person= {
    firstName: 'Andrés',
    lastName: 'Stark',
    age: 24,
    address: {
        postal_code: 'ABC123',
        city: 'New York'
    }
}

/* const spiderman = {...ironman} */
const spiderman = structuredClone(ironman)


spiderman.firstName = 'Peter'
spiderman.lastName = 'Parker'
/* spiderman.age = '24' */
spiderman.address.city = 'San José'

console.log(ironman, spiderman)