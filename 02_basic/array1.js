const myArr = [1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4, 5)

//console.log(myArr[3])
//console.log(myArr2[1])

///////////////// Array Methods ////////////////////
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9)
//myArr.shift()

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(5))

//const newArr = myArr.join()
//console.log(newArr)// 1,2,3,4,5 -> String


// console.log("A", myArr)
// const n1 = myArr.slice(1,3)
// console.log(n1)
// console.log("B", myArr)
// const n2 = myArr.splice(1,3)
// console.log(n2)
// console.log("C", myArr)



const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

//marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][1])

// const merge = marvel.concat(dc)
// console.log(merge)
//const arr = [...marvel, ...dc]
//console.log(arr)

// const arr1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]],9]
// const usableArr = arr1.flat(Infinity)
// console.log(usableArr)

// console.log(Array.isArray("SuryanshBhati"))
// console.log(Array.from("SuryanshBhati"))
// console.log(Array.from({name: "Suryansh"})) // [] Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))