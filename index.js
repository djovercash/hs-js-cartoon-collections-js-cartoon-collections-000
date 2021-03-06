// Dwarf Roll Call //
function dwarfRollCall(dwarves) {
  var stringDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    stringDwarves.push((i+1) + '. ' + dwarves[i] + " ");
  };
  return stringDwarves.join('');
};

// Summon Captain Planet //

function summonCaptainPlanet(planeteerCalls){
  var upperCaseCalls = [];
  for (var i = 0; i < planeteerCalls.length; i++) {
    var power = planeteerCalls[i];
    upperCaseCalls.push(power.toUpperCase() + "!");
  };
  return upperCaseCalls;
};

// Long Planeteer Calls //
function longPlaneteerCalls(words) {
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    if (word.length > 4) {
      return true;
    };
  };
  return false;
};

// Find The Cheese //
function findTheCheese (foods) {
  var cheese = 'cheddar';
  for (var i = 0; i < foods.length; i++) {
    var food = foods[i];
    if (cheese.indexOf(food) > -1) {
      return food;
    };
  };
  return "no cheese!";
};
