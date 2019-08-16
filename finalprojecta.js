pay = ["Go to the zoo",
"Go to the aquarium",
"Travel (to 7/11 or Iceland)",
"Go to the mall ",
"Go to the pool (indoor or outdoor) ",
"Road trip ( if you have that much time) ",
"Mukbang",
"Color hair",
"Bake",
"Thrift shop",
"Try a new restaurant (go to food -> restaurant)",
"Adopt a pet ",
"Get a tattoo/piercing",
"Mini-golf",
"Go bowling",
"Picnic",
"Watch a movie ( go to the movies ->theatre)",
"Paint and sip ",
"Plant an herb garden",
"See a show",
"Visit an attraction",
"Homemade ice cream"
];
free = ["Go to the park",
"Go on a Picnic",
"Work-out ( or don’t...do you)",
"Read",
"Hang out with your friends (sorry if you don’t have any)",
"Messy twister (only free if you have twister and paint)",
"Bake",
"Color hair",
"Hike",
"Write a story",
"Have a photo shoot",
"Make a vision board",
"DIY videos (food,science,cosmetics,etc.)",
"Experiment recipes",
"Clean",
"Garage sale",
"Watch a movie on Netflix",
"Dance party",
"Color",
"Do yoga",
"Origami",
"Go bike riding",
"Go to the beach",
"Visit an attraction",
"Create a photo book",
"Meditate",
"Take a power nap",
"Make a time capsule"
];
function openactivparampage(){
  document.getElementById("homepage").innerHTML = "<h2> Activities </h2> <button id = 'free' class='button' onclick = 'showChoiceFree()'> Free </button> <button id= 'pay' class = 'button' onclick = 'showChoicePay()'> Pay </pay> </button> <p> <button class = 'button' onclick = 'window.location.reload();'> Back to home </button> </p>";

}
function chooseFree(){
  var min = 0;
  var max = free.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return free[x];
}

function showChoiceFree(){
  var choice = chooseFree();
  document.getElementById("homepage").innerHTML = "<h2> You Should... </h2>" + choice + "<p><button class = 'button' onclick = 'window.location.reload();'> Back to home </button> </p>";
}

function choosePay(){
  var min = 0;
  var max = pay.push();
  var x = Math.floor(Math.random() * (max - min) ) + min;
  return pay[x];
}

function showChoicePay(){
  var choice = choosePay();
  document.getElementById("homepage").innerHTML = "<h2> You Should... </h2>" + choice + "<p> <button class = 'button' onclick = 'window.location.reload();'> Back to home </button> </p>";
}


function openyouchooseparampage() {
  document.getElementById("homepage").innerHTML = "<h2 id = 'pageTitle'>Your choices</h2> <h4> Input the options you want to choose between </h4>  <input id = '1' type='text'  value='Input an option' type='text'  onmouseover='empty(this)' onmouseout='fill(this)'> </input><br><input id = '2' type='text'  value='Input an option'  onmouseover='empty(this)' onmouseout='fill(this)'> </input><br><input id = '3' type='text' value='Input an option' onmouseover='empty(this)' onmouseout='fill(this)'> </input><br><button onclick = 'newID(); addInput()''> + </button><button onclick = 'disappear()'> Find what you should do! </button> <p> <button onclick = 'window.location.reload();'> Back to home </button> </p>";
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
  while (x < idNumber){
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
    document.getElementById("homepage").innerHTML = "<h2> Please input your options </h2> <button class = 'button' onclick = openyouchooseparampage()> Restart </button>"

  } else{
    document.getElementById("homepage").innerHTML = "<h2> You should... </h2>" + choice + "<p><button class = 'button' onclick = 'window.location.reload();'> Back to home </button> </p>";
}
}

function homepageopen(){
  document.getElementById("homepage").style.display = "block";
  document.getElementById("movieparampage").style.display = "none";
}

function openmovieparampage() {
  document.getElementById("homepage").style.display = "none"
  document.getElementById("movieparampage").style.display = "block"
}


window.onload = homepageopen;
