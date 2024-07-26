const btnPlus = document.getElementsByClassName("plus");
const btnMinus = document.getElementsByClassName("minus");
const btnLike = document.getElementsByClassName("fa-solid fa-heart");
const btnCheck = document.getElementsByTagName("input");
const priceForTotalTag = document.getElementsByClassName("Price");
const btnDelete = document.getElementsByClassName("fa-solid fa-trash-can");

// console.log(btnLike);
// console.log(btnPlus);
// console.log(priceForTotalTag);

// Global variable
// const totalTag = document.getElementById("total");
// var totalValue = Number(totalTag.innerHTML);
// console.log(totalValue);

// plus
for (var i = 0; i < btnPlus.length; i++) {
  btnPlus[i].addEventListener("click", increment);
}

// minus
for (var i = 0; i < btnMinus.length; i++) {
  btnMinus[i].addEventListener("click", decrement);
}

// like
for (var i = 0; i < btnLike.length; i++) {
  btnLike[i].addEventListener("click", changeColor);
}

//delete
for (var i = 0; i < btnDelete.length; i++) {
  btnDelete[i].addEventListener("click", deleteRow);
}

// checked
for (var i = 0; i < btnCheck.length; i++) {
  btnCheck[i].addEventListener("click", changeTotal);
}

function increment(event) {
  const btnPlus = event.target;
  // console.log(btnPlus);
  const divElt = btnPlus.parentElement;
  // console.log(divElt)
  const quantityTag = divElt.querySelector("p");
  var quantityValue = parseInt(quantityTag.innerHTML);
  // console.log(typeof(quantityValue))
  quantityValue++;
  quantityTag.innerHTML = quantityValue;
  const td_btn_Element = divElt.parentElement;
  const trElement = td_btn_Element.parentElement;
  const unitPriceValue = Number(
    trElement.querySelector(".unitPrice").innerHTML
  );
  var priceValue = Number(trElement.querySelector(".Price").innerHTML);
  priceValue = quantityValue * unitPriceValue;
  trElement.querySelector(".Price").innerHTML = priceValue;
  // console.log(priceValue)

  // *** Add total ****
  // *** Add condition if the check box is not selected ***
  mytable = trElement.parentElement;
  const btnCheck = trElement.querySelector("input");
  totalTag = mytable.querySelector("#total");
  totalValue = Number(totalTag.querySelector("p").innerHTML);
  if(btnCheck.checked){
    totalValue += unitPriceValue;
    totalTag.querySelector("p").innerHTML = totalValue;
  }

}

console.log(typeof totalValue);

// decrement fuction
function decrement(event) {
  const btnMinus = event.target;
  // console.log(btnPlus);
  const divElt = btnMinus.parentElement;
  // console.log(divElt)
  const quantityTag = divElt.querySelector("p");
  var quantityValue = parseInt(quantityTag.innerHTML);
  // console.log(typeof(quantityValue))
  quantityValue--;
  quantityTag.innerHTML = quantityValue;
  const td_btn_Element = divElt.parentElement;
  const trElement = td_btn_Element.parentElement;
  const unitPriceValue = Number(
    trElement.querySelector(".unitPrice").innerHTML
  );
  var priceValue = Number(trElement.querySelector(".Price").innerHTML);
  priceValue = quantityValue * unitPriceValue;
  trElement.querySelector(".Price").innerHTML = priceValue;
  // console.log(priceValue)

  // *** Add total ****
  // *** Add condition if the check box is not selected ***

  mytable = trElement.parentElement;
  const btnCheck = trElement.querySelector("input");
  totalTag = mytable.querySelector("#total");
  totalValue = Number(totalTag.querySelector("p").innerHTML);
  if(btnCheck.checked){
    totalValue -= unitPriceValue;
    totalTag.querySelector("p").innerHTML = totalValue;
  }

}

function changeColor(event) {
  const btnLike = event.target;
  // console.log(btnLike)
  if (btnLike.style.color == "red") {
    btnLike.style.color = "#fff";
  } else {
    btnLike.style.color = "red";
  }
}

function deleteRow(event){
  const btnDelete = event.target;
  var row = btnDelete.parentElement.parentElement.parentElement; 
  var mytable = row.parentElement;
  const priceValue = Number(row.querySelector(".Price").innerHTML);
  const totalTag = mytable.querySelector("#total");
  var totalValue = Number(totalTag.querySelector("p").innerHTML)

  totalValue -= priceValue;
  totalTag.querySelector("p").innerHTML = totalValue;


  mytable.deleteRow(row.rowIndex);
}

function changeTotal(event){
  const btnCheck = event.target;
  const tdElement = btnCheck.parentElement;
  const trElement = tdElement.parentElement;
  const priceTag= trElement.querySelector(".Price")
  var priceValue = Number(priceTag.innerHTML) // will be used 
  const mytable = trElement.parentElement;
  const totalTag = mytable.querySelector("#total");
  var totalValue = Number(totalTag.querySelector("p").innerHTML)
  if(btnCheck.checked){
    // console.log("is checked")
    totalValue += priceValue ;
    totalTag.querySelector("p").innerHTML = totalValue;
  }
  else {
    // console.log("is not checked")
    totalValue -= priceValue ;
    totalTag.querySelector("p").innerHTML = totalValue;
  }
}
// copy paste :)