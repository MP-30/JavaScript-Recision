// for of loop

const arr = [1,2,3,4,5]

for (const num of arr) {
   console.log(num); 
}

const greeting = "Hello World"
for (const greet of greeting) {
  console.log(`Each char is: ${greet}`);
}


//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "India")

console.log(map);

for (const [key1, value] of map) {
  console.log(key1, ':-', value);
}

const myObject = {
  'game1': 'NFS',
  'game2': 'COD'
}

for (const [key, value] of myObject) {
  console.log(key, ':-',value )
}