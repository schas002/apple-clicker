// A branch or tag name should be put here.
const VERSION = "master";

// Keeps the current game state and some metadata (that is currently unused).
var State = {
  "gameVersion": VERSION,
  "gameStartedAt": new Date().toISOString(),
  "gameRestartedAt": new Date().toISOString(),
  "preferences": {
    // none yet
  },
  "resources": {
    "apple": {
      "count": 0,
      "totalThisRestart": 0,
      "total": 0
    }
  },
  "clickables": {
    "clickme": 0
  },
  "buildings": {
    // none yet
  },
  "upgrades": {
    // none yet
  },
  "achievements": {
    // none yet
  }
};

function addResource(resource, amount) {
  var resObject = State["resources"][resource];
  resObject["count"]++; resObject["totalThisRestart"]++; resObject["total"]++;
}

function displayNumbers() {
  for(var key in State["resources"]) {
    for(var key2 in State["resources"][key]) {
      var id = key + "_" + key2;
      if(document.getElementById(id)) {
        document.getElementById(id).innerHTML = State["resources"][key][key2];
      }
    }
  }
}

document.getElementById("clickme").addEventListener("click", function() {
  addResource("apple", 1);
  State["clickables"]["clickme"]++;
  displayNumbers();
});
