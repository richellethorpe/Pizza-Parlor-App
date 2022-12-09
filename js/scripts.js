//Business logic

function Pizza(size, toppings){
  this.toppings = toppings;
  this.size = size;
  this.totalCost = 0;
}

Pizza.prototype.sizeCost = function(){
  if (this.size === "small"){
   this.totalCost += 10
  }else if (this.size === "medium"){
    this.totalCost +=12;
  }else if (this.size === "large"){
    this.totalCost +=14;
  }
  return this.totalCost;
} 

//ninja turtle pizza toppings $1 "marshmallows" "pineapple" "chocolate-fudge" "olives" "jalapenos"
//ninja turtle pizza toppings $2 "anchovies" "pepperoni" "clams" "smoked-ham" "slime"

Pizza.prototype.toppingCost = function() {
  let toppingsArray = this.toppings;
  toppingsArray.forEach(topper => {
  if ((topper === "marshmallows") || (topper === "pineapple")|| (topper === "chocolate-fudge")|| (topper === "olives")|| (topper === "jalapenos")){
    this.totalCost += 1;
  }else if ((topper === "anchovies") || (topper === "pepperoni")|| (topper === "clams")|| (topper === "smoked-ham")|| (topper === "slime")){
    this.totalCost +=2;
  }
})
  return this.totalCost;
};




function handleZaOrder(e){
  e.preventDefault();
  document.getElementById("pizza-form").setAttribute("class", "hidden");
  document.querySelector("div#receipt").removeAttribute("class");
  const sizeSelection = document.querySelector("input[name='za-size']:checked").value;  
  const toppingSelections = document.querySelectorAll("input[name=za-topping]:checked");
  console.log(toppingSelections);
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

  document.getElementById("totalCost").innerText = za.totalCost;  
  })
};

window.addEventListener("load", function() {
  
  document.querySelector("form#pizza-form").addEventListener("submit", handleZaOrder);
})