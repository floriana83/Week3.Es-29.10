//// primo esercizio 
// Riprendendo la pagina web creata a lezione, voglio che il bottone che rinomina l'elemento H1 aggiunga un testo
//  inserito dall'utente, tramite prompt.
const h1Element = document.querySelector("h1");
const h1InsBtn = document.querySelector(".button-ins");

h1InsBtn.addEventListener(
  "click",
  () => {
    h1Element.textContent = prompt ("Inserisci nuova intestazione: ");
  },
);


// // secondo esercizio
const listawrapper = document.querySelector(".txtList");
const lista = document.querySelector("ul");
const ListBtn = document.querySelector(".button-list");


const Input = () =>{
    let Inputlist = document.createElement('li');
    Inputlist.textContent = listawrapper.value;
    lista.appendChild(Inputlist);
    };

ListBtn.addEventListener(
 "click",
 () => {
        Input()
 }); 



