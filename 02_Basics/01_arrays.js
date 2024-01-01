//array

const myArr = [0,1,2,3,4,5,6,7,8,9]
const MyHeros = ["Shaktiman", "Aditya", "DonNo1"]
const myArr2 = new Array(5,6,9,8,7) 

console.log(myArr[2])

//Array Methods

myArr.push(6)
console.log(myArr)
myArr.push(89)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr.unshift(68)
console.log(myArr)
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(99))

const newArr = myArr.join()
console.log(newArr)
console.log(typeof newArr)

// slice, splice

console.log("A", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B", myArr)

const myn2 = myArr.splice(1, 3)
console.log(myn2)
console.log("C", myArr)


