const tinderUser = new Object()

tinderUser.id = "132asd"
tinderUser.name = "Aditya"
tinderUser.isLoggedIn = false

//console.log(tinderUser)

const regularUser = {
  email: "aditya@google.com",
  fullname: {
    userfullname:{
      firstname: "hitesh",
      lastname: "choudhary"
    }
  }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}
//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({},obj1, obj2, obj3)

const obj3 = {...obj1 ,...obj2}
console.log(obj3);

const users = [
  {
    id:1,
    email: "aditya@com"
  },
  {
    id:2,
    email: "singh@com"
  }
]
users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('name'))

const course = {
  course : "Js in hindi",
  price: "999",
  courseInstructor: "Aditya"
}

//course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor)
console.log(instructor);

