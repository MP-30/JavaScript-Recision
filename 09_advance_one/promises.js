const promiseOne = new Promise(function(resolve, reject){
  // Do async task
  //db call. cryptography, network
  setTimeout(function(){
    console.log('Async task is complete');
    resolve()
  } ,1000)
})

promiseOne.then(function(){
  console.log("Promise consumed");
})

new Promise(function (resolve, reject){
  setTimeout(function(){
    console.log("Async Task 2");
    resolve();
  },3000)
}).then(function(){
  console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
  setTimeout(function(){
    resolve({username:"Aditya", email:"aditya@gogo.com"})
  },5000)
})

promiseThree.then(function(user){
  console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
  
    setTimeout(function(){
      let error = true
      if (!error){
        resolve({username: "aditya", password: "465"})
      }else{
        reject('ERROR: Something went wrong')
      }
    },2000)
  })


promiseFour
.then((user)=>{
  console.log(user);
  return user.username
})
.then((username)=>{
  console.log(username);
})
.catch(function(err){
  console.log(err)
}).finally(()=> console.log("The promise is resoled or rejected"))


const promiseFive = new Promise(function(resolve, reject) {
  setTimeout(function(){
    let error = true
    if (!error){
      resolve({username: "javascript", password: "465"})
    }else{
      reject('ERROR: JS went wrong')
    }
  },2000)
});


async function comsumePromiseFive (){
  try {
    const response = await promiseFive
   console.log(response);
  } catch (error) {
    console.log(error);   
  }
}
comsumePromiseFive()
/*
async function getallUser(){
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.log("Getting error", error);
  }
}
getallUser();
*/

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))