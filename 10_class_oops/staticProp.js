class User{
  constructor(username){
    this.username = username
  }
  logMe(){
    console.log(`Username: ${this.username}`);
  }
  static createID(){
    return `427`
  }
}
const aditya = new User("aditya")
//console.log(aditya.createID());

class Teacher extends User{
  constructor(username, email){
    super(username)
    this.email = email  
  }
}

const mobile = new Teacher("Phone", "phone.com")
mobile.logMe();
//console.log(mobile.createID());