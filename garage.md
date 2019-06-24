html explanation for input&output

ie. document.getElementById("id").innerHTML=5*5;



**Pizza order details**

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



**VARIOUS HTML**

<script>
            function send() {
                var genders = document.getElementsByName("gender");
                if (genders[0].checked == true) {
                    alert("Your gender is male");
                } else if (genders[1].checked == true) {
                    alert("Your gender is female");
                } else {
                    // no checked
                    var msg = '<span style="color:red;">You must select your gender!</span><br /><br />';
                    document.getElementById('msg').innerHTML = msg;
                    return false;
                }
                return true;
            }

            function reset_msg() {
                document.getElementById('msg').innerHTML = '';
            }
        </script>
    </head>
    <body>
        <form action="" method="POST">
            <label>Gender:</label>
            <br />
            <input type="radio" name="gender" value="m" onclick="reset_msg();" />Male
            <br />
            <input type="radio" name="gender" value="f" onclick="reset_msg();" />Female
            <br />
            <div id="msg"></div>
            <input type="submit" value="send>>" onclick="return send();" />
        </form>

**VARIOUS HTML**

<!--  general layout for containter/form/div -->
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

<!-- oneway to intorduce input -->
  <label for=""></label>
  <input type="text" name="" value="">
  <button type="button" name="button"></button>

<!-- another way to do form  -->
<div  >
  <p>Name: <<input id="customer" type="text" size="" name="" value=""></p>

<h4>Slect the size</h4>
<input name="size" type

</div>

<!-- another way to onput text instead is password which will hide from onlookers -->

password instead of text
