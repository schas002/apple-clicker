// A branch or tag name should be put here.
const VERSION = "master";

// Economics settings.
const BUILDING_PRICE_INFLATION = 1.234;

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
    "clickme": {
      "apple": 0
    }
  },
  "buildings": {
    "cursor": {
      "count": 0,
      "produced": {
        "apple": 0
      }
    }
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
  resObject["count"] += amount;
  resObject["totalThisRestart"] += amount;
  resObject["total"] += amount;
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
  for(var key in State["buildings"]) {
    var id = key + "_count"
    if(document.getElementById(id)) {
      document.getElementById(id).innerHTML = State["buildings"][key]["count"];
    }
  }
}

document.getElementById("clickme").addEventListener("click", function() {
  addResource("apple", 1);
  State["clickables"]["clickme"]++;
  displayNumbers();
});

document.getElementById("cursor_build").addEventListener("click", function() {
  var cursorObject = State["buildings"]["cursor"];
  var cursorCost = Math.round(15 * Math.pow(BUILDING_PRICE_INFLATION,
    cursorObject["count"]));
  if(State["resources"]["apple"]["count"] >= cursorCost) {
    cursorObject["count"]++;
    State["resources"]["apple"]["count"] -= cursorCost;
    var newCost = Math.round(15 * Math.pow(BUILDING_PRICE_INFLATION,
      cursorObject["count"]));
    document.getElementById("cursor_cost").innerHTML = newCost;
    displayNumbers();
  } else {
    // Hope I get a message panel soon
    alert("I can't afford that!");
  }
});

window.setInterval(function() {
  var cursorObject = State["buildings"]["cursor"];
  addResource("apple", cursorObject["count"]);
  cursorObject["produced"]["apple"] += cursorObject["count"];
  displayNumbers();
}, 4000);
