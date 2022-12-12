const cardEmp01 = document.getElementById("card1");
cardEmp01.addEventListener("mouseenter", flipCard);

function flipCard(){
  cardEmp01.classList.toggle("flipCard");
}

const cardEmp1 = document.getElementById("card1");
cardEmp1.addEventListener("mouseleave", flipCard);

function returnCard(){
  cardEmp1.classList.toggle("flipCard");
}