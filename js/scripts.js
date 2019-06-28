// BUSINESS LOGIC FOR INDIVIDUAL PIZZA
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.getPrice = function() {
var price = 0 ;
if (this.size === 'small') {
  price += 5;
} else if ( this.size === 'medium'){
  price += 7;
} else if ( this.size === 'large'){
  price += 9;
} 

if (this.topping ===  'Cheese') {
  price += 1;
} else if ( this.topping === "Pepperoni") {
  price += 2;
} else {
  price += 3;
}
return this.cost = price;
}


Pizza.prototype.fullOrder = function(){
  return "You have ordered a " + this.size + " pizza with " + this.topping + " for a total of $" + this.cost;
}


// USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault(); //event listener
    var inputtedPizzaSize = $("input:radio[name=size]:checked").val(); //user info
    var inputtedPizzaTopping = $("input:radio[name=topping]:checked").val(); //user info
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaTopping); //new pizza created
    newPizza.getPrice();
    $("#result").show(newPizza);
    var result = newPizza.fullOrder();
    $("#orderedPizza").text(result);

  })
})
