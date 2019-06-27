// business logic

function send ()
{
  if(validate() === false) {
    return;
  }
  if (validateRadio()=== false){
    alert("Please select a size");
    return;
  }
  if (validatePaymentMethod()=== false)
  {
    alert("You have to choose a payment method");
    return;
  }

  alert("Your beer order has been sent");

  checkForm();

  return;
}

PROTOTYPE EXAMPLES
Dog.prototype.speak = function() {
  console.log("Woof!");
}

Dog.prototype.humanYears = function() {
  return this.age * 7;
}

HOW TO SIMPLIFY OBJECT ASSOCIATIONS
var pdx = { name: "Portland" };
var sfo = { name: "San Francisco" };
var sea = { name: "Seattle" };
var cso = { name: "Aktau" };
var dzn = { name: "Zhezkazgan" };

var usa = { name: "United States of America", cities: [pdx, sfo, sea] };
var kazakhstan = { name: "Kazakhstan", cities: [cso, dzn] };
var uruguay = { name: "Uruguay", cities: [] };

PUSH EXAMPLE

var mlz = { name: "Melo" };
uruguay.cities.push(mlz);



<!-- REMOVED FROM .JS DUE TO COMPLEXITY   -->
<!-- // // BUSINESS LOGIC FOR PIZZA ORDER
// function pizzaOrder() { //A blank array that will store pizza on order
//   this.pizza = [], // this = pizzaOrder/ 'pizza' is object
//   this.currentId = 0
// }
// //method:add new pizza/ locates pizzaOrder pizza array by calling this
// pizzaOrder.prototype.addPizza = function(pizza)  {// pizza obj. is argument
//   pizza.id = this.assignId();
//   this.pizza.push(pizza);//add pizza to pizzaOrder array
// }
//
// pizzaOrder.prototype.assignId = function ()  {
//   this.currentId +=1;
//   return this.currentId; -->
