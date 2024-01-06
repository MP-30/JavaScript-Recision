const myNums = [1,2,3];

// const myTotal =  myNums.reduce(function (acc, curntValue) {
//   console.log(`acc: ${acc} and curntValue: ${curntValue}`);
//   return acc + curntValue
// }, 0)


// now we will use normal function

const myTotal = myNums.reduce((acc, curval) => (acc + curval),0)

console.log(myTotal);


const shoppingCart = [
  {
    itemName: "js course",
    price: 5685
  },
  {
    itemName: "py course",
    price: 7885
  },
  {
    itemName: "c++ course",
    price: 8685
  },
  {
    itemName: "java course",
    price: 5125
  }
]

const shoppingTotal = shoppingCart.reduce((acc, item) => (acc + item.price),0)

console.log(shoppingTotal
  )