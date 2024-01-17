// Implemented after ES6

class User {
  constructor(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;    
  }
  encryptPassword(){
    return (`${this.password}abc`)
  }
  changeUserName(){
    return (`${this.username.toUpperCase()}`)
  }
}

const chai = new User("aditya", "aditya@google.com", 48123)

console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}
  User1.prototype.encryptPassword = function(){
    return (`${this.password}abc`)
  }

  User1.prototype.changeUserName = function(){
    return (`${this.username.toUpperCase()}`)
  }

  const chai1 = new User1("adityasingh", "adityasingh@google.com", 4548123)

  console.log(chai1.encryptPassword());
  console.log(chai1.changeUserName());
