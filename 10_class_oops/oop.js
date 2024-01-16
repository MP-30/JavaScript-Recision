const user = {
  username: "Aditya",
  loginCount: 6,
  signed: true,
  getUserDetails: function(){
    //console.log("Got user details from databases");
    //console.log(`Username:${this.username}`);
    //console.log(this);
  }
}

//console.log(user.loginCount);
//console.log(user.getUserDetails());
//console.log(this)

function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
  //  console.log(`Welcome ${this.username}`)
  }

  return this
}

const userOne = new User("aditya", 45, true)
const userTwo = new User("Itsme", 89, true)
console.log(userOne.constructor);
//console.log(userTwo);
