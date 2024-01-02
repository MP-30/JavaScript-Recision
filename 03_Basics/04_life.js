//Immediately Invoked Function Expressions (IIFE)

(function chai(){
  console.log(`DB CONNECTED`);
})();

( (name) =>{
  console.log(`DB connected2 ${name}`);
}

)("aditya")