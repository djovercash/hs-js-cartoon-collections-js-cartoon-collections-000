// Dwarf Roll Call //
function dwarfRollCall(dwarves) {
  var stringDwarves = [];
  for (var i = 0; i < dwarves.length; i++) {
    stringDwarves.push((i+1) + '. ' + dwarves[i] + " ");
  };
  return stringDwarves.join('');
};

// Summon Captain Planet //

function summonCaptainPlanet(veggies){
  var upperCaseVeggies = [];
  for (var i = 0; i < veggies.length; i++) {
    var veg = veggies[i];
    upperCaseVeggies.push(veg.toUpperCase() + "!");
  };
  return upperCaseVeggies;
};

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}
