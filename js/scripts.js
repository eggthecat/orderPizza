// BUSINESS LOGIC FOR PIZZA ORDER
function pizzaOrder() { //A blank array that will store pizza on order
  this.pizza = [], // this = pizzaOrder/ 'pizza' is object
  this.currentId = 0
}
//method:add new pizza/ locates pizzaOrder pizza array by calling this
pizzaOrder.prototype.addPizza = function(pizza)  {// pizza obj. is argument
  pizza.id = this.assignId();
  this.pizza.push(pizza);//add pizza to pizzaOrder array
}

pizzaOrder.prototype.assignId = function ()  {
  this.currentId +=1;
  return this.currentId;
}
// BUSINESS LOGIC FOR INDIVIDUAL PIZZA
function Pizza(Size, Toppings) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.fullOrder = function(){
  return this.size + " " + topping;
}

// console.log(Pizza);

// USER INTERFACE
$(document).ready(function(){
  $("form#new-pizza").submit(function(event){
    eventPrevent.Default();

  })

})








// var pizzaOrder = new PizzaOrder();
// var pizza = new Pizza("large", "pepperoni");
// var pizza2 = new Pizza("medium", "cheese");
// pizzaOrder.addPizza(pizza);
// pizzaOrder.addPizza(pizza2);

// Business Logic for AddressBook ---------
// function AddressBook() {
//   this.contacts = []
// }
//
// AddressBook.prototype.addContact = function(contact) {
//   this.contacts.push(contact);
// }
//
// // Business Logic for Contacts ---------
// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName,
//   this.lastName = lastName,
//   this.phoneNumber = phoneNumber
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }
//
// // var addressBook;
// var addressBook = new AddressBook();
// var contact = new Contact("Ada", "Lovelace", "503-555-0100");
// var contact2 = new Contact("Grace", "Hopper", "503-555-0199");
// addressBook.addContact(contact);
// addressBook.addContact(contact2);



















//
//
//
//
//
//
//
//
//
//
//
// //business logic
// function Customer = (name, phone, address, city) {
//   this.name = name;
//   this.phone = phone;
//   this.address = address,
//   this.city = city,
// }
//
// Customer.prototype.deliver = function (){
//   return this.name +  ", your delivery for"  +  this.address + " in " + this.city + "will arrive in 45 minutes.";
// }
//
// Customer.prototype.pickUp = function (){
//   return this.name + ", please pick your order up in 30 minutes. We will notify your phone number, " + this.phone + ", if any issues arise."
// }
//
// function Pizza = (name, phone, address, city, size, dough, sauce,cheese, topping) {
//   this.size = size,
//   this.topping = topping,
// }
//
// // ideally the message would come out like this on the html output"A large pizza with something dough, something sauce, and  something chees with something toppings for $"
// Pizza.prototype.order = function () {
//   return "A " + this.size + " pizza with " + this.dough + " dough, " + this.sauce + " sauce, and " + this.cheese  + " cheese along with  " + this.topping + "for toppings.";
// }
//
//
//
//
//
// // front-end logic
// $(document).ready(function(){
//   $("#pizzaForm").submit(function(event){
//     var Input = $(input#).val();
//     var flavor = $("input:radio[name=flavor]:checked").val();
//     var customerInput = $(input#name).val([]);
//     // // true or false delivery option
//     var deliveryInput = $(input#delivery).val();
//     // // true of false pick-up option
//     var pickUpInput = $(input#pick).val();
//     // option to schedule pick up of pizza
//     // **MAKE SURE TO CREATE ALERT IF BOTH ARE UNSELECTED OR MATCH SELECTED VALUES LIKE YES&&YES//
//     var timeInput = $(input#time).val();
//     // // input field for customer delivery address
//     var addressInput = $(input#address).val();
//     // // input field for customer delivery address
//     var cityInput = $(input#city).val();
//     // // input field for customer phone number
//     var phoneInput = $(input#phone).val();
//
//     input field for pizza size
//     var sizeInput = $(input#size).val();
//     var doughInput = $(input#dough).val();
//     var sauceInput = $(input#sauce).val();
//     var vegtebleToppingsInput = $(input#vegtebleToppings).val();
//     var nutToppingsInput = $(input#nutToppings).val();
//     var herbToppings = $(herbToppings#size).val();
//     var seafoodInput = $(input#seafood).val();
//     var meatInput = $(input#meat).val();
//     var cheeseInput = $(input#cheese).val();
//     var deliveryInput = $(input#delivery).val();
//   })
// })
