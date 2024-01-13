// generate a random color

const randomColor = function(){
  const hex = "0123456789ABCDF"
  let color = '#'
  for (let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random()*16)]
  }
  return color
};
let intervalID;
const startChangingColor = function(){
  
  if(!intervalID){
    intervalID  = setInterval(changeBackGroung, 2000)
  }
  function changeBackGroung(){
    document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function(){
  clearInterval(intervalID);
  intervalID = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor) 

document.querySelector('#stop').addEventListener('click', stopChangingColor) 

console.log(randomColor());