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