const name = "aditya"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Aditya-singh')

console.log(gameName[2]);
console.log(gameName.__proto__);

console.log(gameName.length)

console.log(gameName.toLowerCase())

const newString = gameName.substring(0,6)
console.log(newString)
const newString1 = gameName.slice(-8,5)
console.log(newString1)

const newString2 = " dataForTest "
console.log(newString2)
console.log(newString2.trim())


const url = "https://google.com/hello%20world"
console.log(url.replace('%20', '-'))

console.log(url.includes('aditya'))
console.log(url.includes('hello'))

console.log(gameName.split('-'))