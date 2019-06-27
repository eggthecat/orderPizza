// BUSINESS LOGIC FOR INDIVIDUAL PIZZA
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.protoype.getPrice = function() {
var price = 0 ;
if (this.size === 'small') {
  price += 5;
} else if ( this.size === 'medium'){
  price += 7;
} else {
  price += 9;
}
}

Pizza.prototype.fullOrder = function(){
  return "You have ordered a " + this.size + " pizza with " + this.topping;
}

// console.log(Pizza);

// USER INTERFACE LOGIC
// var PizzaOrder = new PizzaOrder();  //this is global var

$(document).ready(function(){
  $("form#orderForm").submit(function(event){
    event.preventDefault(); //event listener
    var inputtedPizzaSize = $("input:radio[name=size]:checked").val(); //user info
    var inputtedPizzaTopping = $("input:radio[name=topping]:checked").val(); //user info
    var newPizza = new Pizza(inputtedPizzaSize, inputtedPizzaTopping); //new pizza created
    // pizzaOrder.addPizza(newPizza); //add pizza to pizzaOrder using
    $("#result").show(newPizza);
    var result = newPizza.fullOrder();
    $("#orderedPizza").text(result);


  })

})
