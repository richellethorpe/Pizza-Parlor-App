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