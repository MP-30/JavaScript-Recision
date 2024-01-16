function SetUserName(username){
  //DB call
  this.username = username
  console.log("called");
}
function createuser(username, email, password){
  SetUserName.call(this,username)
  
  this.email = email
  this.password = password
}

const chai = new createuser("chai", "chai@facebook.com", "73241")
console.log(chai);