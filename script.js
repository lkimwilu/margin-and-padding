let name = "Cate"

console.log("her name is", name)
let isMarried = true

let a = 2

let sum =null

let find;

let fruits = [
    "apple",
    "banana",
    "orange",
    "grapes"
]

let listOfNumbers = [
    35,
    40,
    278,
    null
]

let baraka = {}


// "" string
// 12212 number
// [] array
// {} object

let barakaKim = {
    name: 'baraka',
    age: 30,
    favorite: ["dance", "movie", "video"],
    speaks: true,
    sayMyName:function(){
        console.log(`My name is ${this.name}, and my age is ${this.age}`)
    }
}

console.log("name is", barakaKim.name)
console.log("favorite is", barakaKim.favorite[1])

let car = {
    brand: 'lambo',
    colors: ["red", "white", "gray"],
    price: 35000,
    getPrice:function(){
        console.log(`The price of this car is $${this.price} and the brand is ${this.brand}`)
    }
}
  console.log("car.brand", car.brand)
console.log("colors", car.colors[2])
    console.log('get price', car.getPrice)
    