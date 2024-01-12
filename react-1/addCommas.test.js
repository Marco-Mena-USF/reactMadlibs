const addCommas = require('./your-module-name');

// Your Mad Libs story with placeholders
const madLibsStory = "Once upon a time, in a {place}, there lived a {adjective} {noun}.";

// User-provided words
const userWords = {
  place: "castle",
  adjective: "mysterious",
  noun: "dragon",
};

// Generate the Mad Libs story
const completedStory = addCommas(madLibsStory, userWords);

// Display the completed story
console.log(completedStory);