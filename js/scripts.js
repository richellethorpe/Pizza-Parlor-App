function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.sizeCost = function(){
  if (this.size === "Small   +$10"){
   this.totalCost += 10
  }else if (this.size === "Medium   +$12"){
    this.totalCost +=12;
  }else if (this.size === "Large   +$14"){
    this.totalCost +=14;
  }
  return this.totalCost;
} 


Pizza.prototype.toppingCost = function() {
  let toppingsArray = this.toppings;
  toppingsArray.forEach(topper => {
  if ((topper === "Marshmallows") || (topper === "Pineapple")|| (topper === "Chocolate")|| (topper === "Olives")|| (topper === "Jalapenos")){
    this.totalCost += 1;
  }else if ((topper === "Anchovies") || (topper === "Pepperoni")|| (topper === "Clams")|| (topper === "Ham")|| (topper === "Slime")){
    this.totalCost +=2;
  }
})
  return this.totalCost;
};

function handleZaOrder(e){
  e.preventDefault();
  document.getElementById("pizza-form").setAttribute("class", "hidden");
  document.querySelector("div#receipt").removeAttribute("class", "hidden");
  const sizeSelection = document.querySelector("input[name='za-size']:checked").value;  
  const toppingSelections = document.querySelectorAll("input[name=za-topping]:checked");
  
  const toppingInput = Array.from(toppingSelections);
  let toppingsArray = [];
  toppingInput.forEach (element => {
    toppingsArray.push(element.value);
  })
  
  let za = new Pizza(sizeSelection, toppingsArray);
  za.sizeCost();
  za.toppingCost();
  document.getElementById("total-cost").innerText = ("$" + za.totalCost);


  toppingsArray.forEach(element=> {
    const tbody = document.getElementById("toppingSelection");
    const tr = document.createElement("tr")
    tr.append(element);
    if ((element === "Marshmallows") || (element === "Pineapple")|| (element === "Chocolate")|| (element === "Olives")|| (element === "Jalapenos")){
      tbody.append(tr);
      tr.append (" $1")

    }else if ((element === "Anchovies") || (element === "Pepperoni")|| (element === "Clams")|| (element === "Ham")|| (element === "Slime")){
      tbody.append(tr);
      tr.append (" $2")
    }
  })
  document.getElementById("size-selection").innerText = sizeSelection;

};

function handleNewOrder () {
  document.getElementById("pizza-form").removeAttribute("class", "hidden");
  document.querySelector("div#receipt").setAttribute("class", "hidden");
  document.getElementById("pizza-form").reset();
  }



window.addEventListener("load", function() {
  this.document.getElementById("newOrder").addEventListener("click", handleNewOrder);
  document.querySelector("form#pizza-form").addEventListener("submit", handleZaOrder);
})

