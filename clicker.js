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
