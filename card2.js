const cardEmp02 = document.getElementById("card2");
cardEmp02.addEventListener("mouseenter", flipCard);

function flipCard(){
  cardEmp02.classList.toggle("flipCard");
}

const cardEmp2 = document.getElementById("card2");
cardEmp2.addEventListener("mouseleave", flipCard);

function returnCard(){
  cardEmp2.classList.toggle("flipCard");
}