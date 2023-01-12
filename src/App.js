import { useEffect, useState } from 'react';
import './App.css';
import cardBack from './images/cardBack.jpg';

function App() {

  function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

  const [selected, setSelected] = useState(false);
  const [won, setWon] = useState(false);
  const [card1, setCard1] = useState("");

  useEffect(()=>{
    let r1 = randomIntFromInterval(1, 6);
    let r2 = randomIntFromInterval(1, 6);
    let r3 = randomIntFromInterval(1, 6);
    let r4 = randomIntFromInterval(1, 6);
    let r5 = randomIntFromInterval(1, 6);
    let r6 = randomIntFromInterval(1, 6);

    if(r2 == r1 || r2 == r3 || r2 == r4 || r2 == r5 || r2 == r6){
      while(r2 == r1 || r2 == r3 || r2 == r4 || r2 == r5 || r2 == r6){
        r2 = randomIntFromInterval(1, 6);
      }
    }
    if(r3 == r1 || r3 == r2 || r3 == r4 || r3 == r5 || r3 == r6){
      while(r3 == r1 || r3 == r2 || r3 == r4 || r3 == r5 || r3 == r6){
        r3 = randomIntFromInterval(1, 6);
      }
    }
    if(r4 == r1 || r4 == r3 || r4 == r2 || r4 == r5 || r4 == r6){
      while(r4 == r1 || r4 == r3 || r4 == r2 || r4 == r5 || r4 == r6){
        r4 = randomIntFromInterval(1, 6);
      }
    }
    if(r5 == r1 || r5 == r3 || r5 == r4 || r5 == r2 || r5 == r6){
      while(r5 == r1 || r5 == r3 || r5 == r4 || r5 == r2 || r5 == r6){
        r5 = randomIntFromInterval(1, 6);
      }
    }
    if(r6 == r1 || r6 == r3 || r6 == r4 || r6 == r5 || r6 == r2){
      while(r6 == r1 || r6 == r3 || r6 == r4 || r6 == r5 || r6 == r2){
        r6 = randomIntFromInterval(1, 6);
      }
    }

    document.getElementById("c" + r1).innerHTML="JavaScript"
    document.getElementById("c" + r2).innerHTML="JavaScript"
    document.getElementById("c" + r3).innerHTML="C++"
    document.getElementById("c" + r4).innerHTML="C++"
    document.getElementById("c" + r5).innerHTML=".NET"
    document.getElementById("c" + r6).innerHTML=".NET"
 
  }, [])

  const clickHandler = (e) =>{
    let id = e.target.id
    let card = document.getElementById(id);

    if(selected == false){
      setSelected(true);
      card.style.backgroundImage="none"
      card.style.backgroundColor="gray"
      card.style.color="black"
      setCard1(id);
    } else {
      setSelected(false)
      if(document.getElementById(card1).innerHTML==card.innerHTML){
        let cards = document.getElementsByClassName('cards');
        card.style.backgroundImage="none"
        card.style.backgroundColor="gray"
        card.style.color="black"
        for(let i=0; i<cards.length; i++){
          if(cards[i].style.color!="black"){
            setWon(false);
          } else {
            setWon(true);
          }
        }
       if(won){
       alert("YOU WIN!")
       document.getElementById('container').style.pointerEvents="none";
      }
      } else {
        alert("Try again")
          card.style.backgroundColor="gray"
          card.style.backgroundImage="none"
          card.style.color="black"
          setTimeout(()=>{
            // card.style.backgroundColor="yellow"
            // document.getElementById(card1).style.backgroundColor="yellow"
            card.style={backgroundImage: "url('./images/cardBack.jpg')"};
            document.getElementById(card1).style={backgroundImage: "url('./images/cardBack.jpg')"};
            document.getElementById(card1).style.color="transparent"
            card.style.color="transparent"
          }, 1000)
      }
    }
  }
  
  return (
    <div id="container">
      <div id="c1" className="cards" onClick={ clickHandler }>
       
      </div>

    <div id="c2" className="cards" onClick={ clickHandler }>
 
    </div>

    <div id="c3" className="cards" onClick={ clickHandler }>
       
      </div>

    <div id="c4" className="cards" onClick={ clickHandler }>
       
      </div>


    <div id="c5" className="cards" onClick={ clickHandler }>
       
      </div>

    <div id="c6" className="cards" onClick={ clickHandler }></div>

    </div>
  );
}

export default App;
