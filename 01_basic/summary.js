// Primitive

// 7 Types : String, Boolean, Number, null, undefined, Symbol, BigInt
//const id = Symbol("abc")
//const otherId = Symbol("abc")

//console.log(id === otherId)

//const bigNum = 283746783909487n
//console.log(typeof(bigNum))


// Reference(Non-primitive)

// Array, Objects,Functions

// Memory : 
// Stack : (Primitive)
// Heap : (Non-Primitive)

let username = "suryanshbhati"

let anotherName = username
anotherName = "vaibhavbhati"

//console.log(username)
//console.log(anotherName)

let userOne = {
    username: "suryanshbhati",
    upi: "abc@ybl.com"
}

let userTwo = userOne
userTwo.username = "vaibhavbhati"

console.log(userOne.username)
console.log(userTwo.username)