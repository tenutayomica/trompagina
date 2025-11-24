import './App.css';
import React, { useEffect, useRef } from 'react';
import pag1 from './components/pag1';

function scrollBack(screenId){
  const target= document.getElementById(screenId);
  if(target){
    const rect = target.getBoundingClientRect();
    const targetAbsolutePosition = rect.left + window.scrollX;
    window.scrollTo({
      left: targetAbsolutePosition,
      behavior: 'smooth'
    });
  } 
}
function App() {
  useEffect(()=>{
    const screenTwoTransporter3 = () => scrollToScreen('screen2');
    const screenTwoTransporter4 = () => scrollToScreen('screen2');
    const screenTwoTransporter5 = () => scrollToScreen('screen2');
    const btn3 = document.getElementById("screen2transporter3");
    const btn4 = document.getElementById("screen2transporter4");
    const btn5 = document.getElementById("screen2transporter5");
    if (btn3) btn3.addEventListener("click", screenTwoTransporter3);
    if (btn4) btn4.addEventListener("click", screenTwoTransporter4);
    if (btn5) btn5.addEventListener("click", screenTwoTransporter5);
    return () => {
      if (btn3) btn3.removeEventListener("click", screenTwoTransporter3);
      if (btn4) btn4.removeEventListener("click", screenTwoTransporter4);
      if (btn5) btn5.removeEventListener("click", screenTwoTransporter5);
    };
  }, []);
  return (
    <div className="App">
      <pag1/>
    </div>
  );
}
/*function screenTwoTransporter3(){
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
}*/
export default App;
