
/* const myArray:number[] = [1,2,3,'4', 5, 6] */
const myArray:number[] = [1,2,3,4, 5, 6]
/* myArray.push('10') */
myArray.push(11)
console.log(myArray)

/* const myArray2 = [...myArray] */
const myArray2 = structuredClone(myArray)
myArray2.push(77)

for (const myNumber of myArray) {
    console.log(myNumber + 10)
}

console.log({myArray, myArray2})