let body = document.body;
let btn = document.querySelector('.btn');
let hexColor = document.querySelector('.hex__color');




btn.onclick = () =>{
  let hex = '#' + Math.floor(Math.random() * 16777216).toString(16);

  hexColor.innerHTML = hex;
  hexColor.style.color = hex;
  body.style.backgroundColor = hex;
}