//Business logic

function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.sizeCost = function(){
  if (this.size === "Small"){
   this.totalCost += 10
  }else if (this.size === "Medium"){
    this.totalCost +=12;
  }else if (this.size === "Large"){
    this.totalCost +=14;
  }
  return this.totalCost;
} 

//ninja turtle pizza toppings $1 "marshmallows" "pineapple" "chocolate" "olives" "jalapenos"
//ninja turtle pizza toppings $2 "anchovies" "pepperoni" "clams" "ham" "slime"

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
  console.log(za);
  za.sizeCost();
  za.toppingCost();
  console.log(za);

  document.getElementById("size-selection").innerText = sizeSelection;
  toppingsArray.forEach(element=> {
    const ul = document.querySelector("ul#printToppings");
    const li = document.createElement("li")
    li.append(element);
    ul.append(li);

   
  })

  document.getElementById("totalCost").innerText = za.totalCost; 
};

window.addEventListener("load", function() {
  
  document.querySelector("form#pizza-form").addEventListener("submit", handleZaOrder);
})