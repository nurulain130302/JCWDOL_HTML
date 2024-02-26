interface IAddres{
    address: string
}

interface IPerson{
    name: string
    age: number
    address: IAddres
}

interface ICalculus{
    add:(x:number, y: number) => {}
    multiply: (x: number, y: number) => {}
}

let myname: string = "Ain"
myname = "Nurul"
console.log(myname)

let myage: number = 34
let hobbies: string[] =  ["PS4", "Mobile Legends"]
let obj: IPerson = {
    name: 'Ain',
    age: 22,
    address: {address: "kepanjen"}
}

console.log(obj);

let people: IPerson[] = [
    { name: "Ain", age: 22, address: { address:"kepanjen"}},
    { name: "Nurul", age: 22, address: { address: "malang"}}
]

let isMarried: boolean = true

console.log(people);
function add(x: number, y: number){
    return x + y 

}

function multiply(x: number, y: number){
    return x * y
}

let result = add(45,44)
let result2 = multiply(34,45)

console.log(result, result2)