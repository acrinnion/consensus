pay = ["Go to the zoo","Go to the aquarium","Travel (to 7/11 or Iceland)","Go to the mall ","Go to the pool (indoor or outdoor) ","Road trip ( if you have that much time) ","Have a mukbang","Color your hair","Bake","Thrift shop","Try a new restaurant (go to food -> restaurant)","Adopt a pet ","Get a tattoo/piercing","Go mini-golfing","Go bowling","Have a picnic","Watch a movie ( go to the movies ->theatre)","Go to a paint and sip ","Plant an herb garden","See a show","Visit an attraction","Make Homemade ice cream","Get a chia pet","Buy a succulent","Make a zen garden","Go to Dave & Buster's"];
free = ["Go to the park","Go on a Picnic","Work-out ( or don’t...do you)","Read","Hang out with your friends (sorry if you don’t have any)","Play messy twister (only free if you have twister and paint)","Bake","Color your hair","Go for a hike","Write a story","Have a photo shoot","Make a vision board","Watch DIY videos (food,science,cosmetics,etc.)","Experiment recipes","Clean","Have a garage sale","Watch a movie on Netflix","Have a dance party(by yourself or not)","Color","Do yoga","Make origami","Go bike riding","Go to the beach","Visit an attraction","Create a photo book","Meditate","Take a power nap","Make a time capsule","Watch your favorite movie","Learn a new language","Drink water (you’re probably dehydrated)","Cook something new (if you can cook...don’t burn your house down)","Donate clothes","Make a bucket list"];
food = ["Holy Schnitzel", "Bagels", "Pizza", "Buffalo Wild Wings", "Red Lobster", "Golden Corral","Miller's Ale House","Cheesecake Factory", "Friendly’s", "Denny’s", "IHOP", "Maggiano’s Little Italy", "Joe’s Crab Shack", "Olive Garden", "Ruby Tuesdays", "TGI Friday’s", "Waffle House", "Holy Schnitzel(NY or FL)","Peaches(NY or NJ)","McDonald","Taco Bell","Wendy’s ","Chick-fil-a","In-N-Out burger","Burger King","Subway","Dunkin’ Donut","Pizza Hut","Panera Bread","Chipotle ","Sonic Drive-In","KFC","Popeyes","Arby’s","Carl’s Jr.","Jack in the Box","Panda Express","Jimmy John’s","Whataburger","Bare Burger","Shake Shack","Five Guys","Zaxby’s","Culver’s","Bojangles’","Steak ‘n Shake","Papa Murphy’s","Church’s Chicken","Wingstop","Checkers","Qdoba","El Pollo Loco","Krispy Kreme","Del Taco","White Castle","Jersey Mike’s","Firehouse Subs","Jason’s Deli","Moe’s Southwest Grill","Tim Hortons","Boston Market","Baskin Robbins","McAlister’s Deli" ,"Captain D’s", "Auntie Anne’s", "Jamba Juice", "Tropical smoothie", "Chinese","Italian","Sushi","Indian food", "Southern food","Seafood","Spanish food"
];

function chooseFood(){
  var min = 0;
  var max = food.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return food[x];
}
function openfoodparampage(){
  var choice = chooseFood();
  document.getElementById("homepage").innerHTML = "<h2> You should get/go to </h2>" + choice + " <p class='back' onclick = 'window.location.reload();'> Back to home </p>";

}

function openactivparampage(){
  document.getElementById("homepage").innerHTML = "<h2> Activities </h2> <button id = 'free' class='button' onclick = 'showChoiceFree()'> Free </button> <button id= 'pay' class = 'button' onclick = 'showChoicePay()'> Pay </pay> </button> <p class='back' onclick = 'window.location.reload();'> Back to home </p>";

}
function chooseFree(){
  var min = 0;
  var max = free.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return free[x];
}

function showChoiceFree(){
  var choice = chooseFree();
  document.getElementById("homepage").innerHTML = "<h2> You Should... </h2><div>" + choice + "</div><p class='back' onclick = 'window.location.reload();'> Back to home </p>";
}

function choosePay(){
  var min = 0;
  var max = pay.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return pay[x];
}

function showChoicePay(){
  var choice = choosePay();
  document.getElementById("homepage").innerHTML = "<h2> You Should... </h2>" + choice + "<p class = 'back' onclick = 'window.location.reload();'> Back to home </p>";
}


function openyouchooseparampage() {
  document.getElementById("homepage").innerHTML = "<div id = 'yctitle'> <h4 id = 'pageTitle'>Your choices</h4> <h6> Input the options you want to choose between </h6>  <table id = 'displayTable'><tr><td>   <input id = '1' type='text'  value='Input an option' type='text'  onmouseover='empty(this)' onmouseout='fill(this)'> </input><tr><td><input id = '2' type='text'  value='Input an option'  onmouseover='empty(this)' onmouseout='fill(this)'> </input><tr><td><input id = '3' type='text' value='Input an option' onmouseover='empty(this)' onmouseout='fill(this)'> </input><tr></table><button id='plus' onclick = 'newID(); addInput()''> + </button>  <p> <button id = 'pickbutton' onclick = 'disappear()'> Find what to do! </button> <p class = 'back' onclick = 'window.location.reload();'> Back to home </p> </p></div>";
}

function empty(x){
  if (x.value == "Input an option"){
    x.value = ""
  }
}
function fill(x){
  if (x.value == ""){
  x.value = "Input an option"
  }
}

options = [];
idNumber = 3;
function newID() {
  idNumber = idNumber + 1;
}

function addInput(){
  var table = document.getElementById("displayTable");
  var newRow = table.insertRow();
  newRow.innerHTML = "<td> <input id =".concat(idNumber, " type=text'  value='Input an option'  onmouseover='empty(this)' onmouseout='fill(this)'> </input>"  );
}

function addOption(){
  x = 1;
  while (x < idNumber + 1){
  if (document.getElementById(x).value != "Input an option"){
    options.push(document.getElementById(x).value);
    }
  x = x + 1;
  }
}
function choose(){
  addOption();
  var min = 0;
  var max = options.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return options[x];
}

function disappear(){
  var choice = choose();
  if (choice == undefined){
    document.getElementById("homepage").innerHTML = "<h2> Please input your options </h2> <p class = 'back' onclick = openyouchooseparampage()> Restart </p>"
    idNumber = 3;
  } else{
    document.getElementById("homepage").innerHTML = "<h2> You should... </h2>" + choice + "<p class = 'back' onclick = 'window.location.reload();'> Back to home  </p>";
}
}

// var currentmovie = [];
// function choosemovie() {
//   var min = 0;
//   var max = currentmovie.push();
//   var t = Math.floor(Math.random() * (max - min) ) + min;
//   return currentmovie[t];
// }

// function disappearmovie(){
//   alert(currentmovie[0]);
//   var choice = choosemovie();
//   document.getElementById("homepage").innerHTML = choice;
// }

