const myObject = {
  js : 'javascript',
  cpp: 'C++',
  rb: 'Ruby',
  swift: 'Swift by apple'
}

for (const key in myObject) {
  console.log(`${key} shortcut is for ${myObject[key]}`)
}


const programing = ['js', 'ruby', 'java', 'python', 'cpp'];

for (const key in programing) {
  console.log(`${key} is for ${programing[key]}`);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of america")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
  console.log(`${key} is key`);
}//because maps are not iterable