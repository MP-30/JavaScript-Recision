const a = 45;
let b = 89;
var c = 56;

if (true){
  const a = 10;
  let b = 36;
  var c = 78;
  //console.log(`Value of if condition's a is ${a} and b is ${b}  c is ${c}`)
}

//console.log(`Value of normal a is ${a} and b is ${b}  c is ${c}`)


/* Nested scopes*/
function one(){
  const username = "hitesh"

  function two(){
    const website = "youtube"
    console.log(username)
  }
  //console.log(website);
  two()
}
//one();


if (true){
  const username = 'aditya'
  if (username === 'aditya'){
    const website = "youtube"
    //console.log(username + website)
  }
  //console.log(website);
}
//console.log(username)

/* ++++++++++++++++Important and intersting+++++++++ */

function addone(num){
  return num + 1
}
console.log(addone(5));

const addTwo = function(num){ //this is expersion we called it function also
  return num  +2
}
console.log(addTwo(3));