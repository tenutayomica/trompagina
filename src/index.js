import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


function screenTwoTransporter3(){
  const distancia= -1*window.innerWidth; 
  window.scrollBy({
    left: distancia, 
    behavior: "smooth"
  })
}
function screenTwoTransporter4(){
  const distancia= -2*window.innerWidth; 
  window.scrollBy({
    left: distancia, 
    behavior: "smooth"
  })
}
function screenTwoTransporter5(){
  const distancia= -3*window.innerWidth; 
  window.scrollBy({
    left: distancia, 
    behavior: "smooth"
  })
}
window.onload= function(){
  try{
   document.getElementById("screen2transporter3").addEventListener("click", screenTwoTransporter3);
   document.getElementById("screen2transporter4").addEventListener("click", screenTwoTransporter4);
   document.getElementById("screen2transporter5").addEventListener("click", screenTwoTransporter5);
 }
 catch(){

 }
}