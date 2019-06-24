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



// front-end logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    // var Input = $(input#).val();
    // var flavor = $("input:radio[name=flavor]:checked").val();
    var customerInput = $(input#name).val();
    // // // true or false delivery option
    // var deliveryInput = $(input#delivery).val();
    // // // true of false pick-up option
    // var pickUpInput = $(input#pick).val();
    // // option to schedule pick up of pizza
    // // **MAKE SURE TO CREATE ALERT IF BOTH ARE UNSELECTED OR MATCH SELECTED VALUES LIKE YES&&YES//
    // var timeInput = $(input#time).val();
    // // // input field for customer delivery address
    // var addressInput = $(input#address).val();
    // // // input field for customer delivery address
    // var cityInput = $(input#city).val();
    // // // input field for customer phone number
    // var phoneInput = $(input#phone).val();
    console.log(#name);
    // console.log(#city);
    // console.log(phone);
    // input field for pizza size
    // var sizeInput = $(input#size).val();
    // var doughInput = $(input#dough).val();
    // var sauceInput = $(input#sauce).val();
    // var vegtebleToppingsInput = $(input#vegtebleToppings).val();
    // var nutToppingsInput = $(input#nutToppings).val();
    // var herbToppings = $(herbToppings#size).val();
    // var seafoodInput = $(input#seafood).val();
    // var meatInput = $(input#meat).val();
    // var cheeseInput = $(input#cheese).val();
    // var deliveryInput = $(input#delivery).val();
  })
})
