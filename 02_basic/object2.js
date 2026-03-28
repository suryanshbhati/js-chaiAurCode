// singleton -> constructor
//Object.create

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "Suryansh",
    "fullName": "Suryansh Bhati",
    [mySym]: "Enter",
    age: 18,
    location: "Noida",
    isLoggedIn: false,
    lastloginDays: ["Mon", "Sat"]
}

//console.log(jsUser.name)
//console.log(jsUser["name"])

//console.log(jsUser.fullName)
//console.log(jsUser["fullName"])

//console.log(jsUser.mySym) //Interesting
//console.log(jsUser[mySym])

// jsUser.age = 20
// Object.freeze(jsUser)
// jsUser.age = 25
// console.log(jsUser.age)

jsUser.greeting = function(){
    console.log("Hello Js User")
}

jsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}

//console.log(jsUser.greeting())
//console.log(jsUser.greetingTwo())

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userName: {
            firstName: "Suryansh",
            lastName: "Bhati"
        }
    }
}

//console.log(regularUser.fullName.userName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj = { obj1, obj2, obj3} // Interesting
//const obj = { ...obj1, ...obj2, ...obj3}
//const obj = Object.assign({}, obj1, obj2, obj3)
//console.log(obj)

//console.log(Object.keys(tinderUser))
//console.log(Object.values(tinderUser))
//console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedIn"))