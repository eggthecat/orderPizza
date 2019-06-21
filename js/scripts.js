// business logic

let Pizza {
  var size = ["Mini","Personal","Medium","Large"]
  var dough = ["Gluten-Free","Vegetarian","Vegan"]
  var sauce = ["Red","White","Pesto","Gluten-Free","Vegetarian","Vegan"]
  var vegtebleToppings = ["Alfalfa Sprouts", "Artichoke hearts", "Avocado", "Baby leeks","Beetroot", "Black Beans", "Broccoli", "Capers", "Capicolla", "Carrot", "Cherry tomatoes", "Dried tomatoes", "Eggplant", "Fungi", "Fungi carciofi", "Green peppers", "Kalamata olives", "Lettuce", "Mushrooms", "Onions", "Olives", "Peas", "Porcini mushrooms", "Portobello Mushrooms", "Red beans", "Red onions", "Red peppers", "Roast cauliflower", "Roasted eggplant", "Roasted Garlic", "Roasted peppers", "scallions", "Shallots", "Snow peas", "Spinach", "Sun dried tomatoes", "Sweet corn", "Watercress", "Wild mushrooms", "Yellow peppers", "Yellow squash", "Zucchini"]
  var nutToppings = ["Almonds", "Peanuts", "Pistachios", "Pecans", "Pine Nuts", "Walnuts"]
  var herbToppings = ["Basil", "Bay Leaf", "Cardamon", "Chili (Dried or Fresh)", "Chives", "Cilantro", "Coriander", "Cumin", "Dill", "Garlic", "Jalapeno Peppers", "Laurel", "Marjoram", "Methi Leaves (aka Fenugreek)", "Oregano", "Parley", "Pepper", "Rosemary"]
  var seaFood =["Anchovies", "Cajun Prawn", "Crayfish", "Lobster", "Oysters", "Prawns", "Salmon", "Shrimps", "Smoked Salmon", "Squid", "Tuna", "Whitebait"]
  var meat = ["Bacon", "BBQ Chicken", "Beef", "Cajun Chicken", "Chicken Masala", "Chicken Tikka", "Chorizo", "Duck", "Ham", "Honey Cured Ham", "Meatballs", "Pepperoni", "Proscuitto", "Salami", "Sausage", "Serrano Ham", "Turkey", "Venison"]
  var cheese = ["Blue Cheese", "Brie", "Camembert", "Chedar", "Colby", "Feta", "Gluten-Free", "Goat Cheese", "Gorgonzola", "Limburger", "Manchego", "Monterey Jack", "Parmesan", "Mozzarella", "Muenster", "No Cheese", "Port de Salut", "Provolone", "Ricota", "Romano", "Roquefort", "Smoked Gouda", "Vegan"]
}

// front-end logic
$(document).ready(function(){
  $("#formOne").submit(function(event){
    // var Input = $(input#).val();
    // var flavor = $("input:radio[name=flavor]:checked").val();
    var customerInput = $(input#name).val();
    // true or false delivery option
    var deliveryInput = $(input#delivery).val();
    // true of false pick-up option
    var pickInput = $(input#pick).val();
    // option to schedule pick up of pizza
    //**MAKE SURE TO CREATE ALERT IF BOTH ARE UNSELECTED OR MATCH SELECTED VALUES LIKE YES&&YES
    var timeInput = $(input#time).val();
    // input field for customer delivery address
    var addressInput = $(input#address).val();
    // input field for customer delivery address
    var cityInput = $(input#city).val();
    // input field for customer phone number
    var phoneInput = $(input#phone).val();
    // input field for pizza size
    var sizeInput = $(input#size).val();
    var doughInput = $(input#dough).val();
    var sauceInput = $(input#sauce).val();
    var vegtebleToppingsInput = $(input#vegtebleToppings).val();
    var nutToppingsInput = $(input#nutToppings).val();
    var herbToppings = $(herbToppings#size).val();
    var seafoodInput = $(input#seafood).val();
    var meatInput = $(input#meat).val();
    var cheeseInput = $(input#cheese).val();
    var deliveryInput = $(input#delivery).val();
  })
})
