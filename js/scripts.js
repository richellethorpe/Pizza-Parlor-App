//Business logic

function Pizza(toppings, size){
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

//ninja turtle pizza toppings $1 "marshmallows" "pineapple" "chocolate fudge" "olives" "jalepenos"
//ninja turtle pizza toppings $2 "anchovies" "pepperoni" "clams" "smoked ham" "slime"

Pizza.prototype.toppingCost = function() {
  if (this.toppings === "marshmallows"){
    this.totalCost += 1;
  }
  return this.totalCost;
}