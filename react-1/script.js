// Import the addCommas function
const addCommas = require('./your-module-name');

// Function to generate Mad Libs
function generateMadLibs() {
  const madLibsForm = document.getElementById('madLibsForm');
  const madLibsResult = document.getElementById('madLibsResult');
  const completedStory = document.getElementById('completedStory');

  // Get user-provided words
  const userWords = {
    place: document.getElementById('place').value,
    adjective: document.getElementById('adjective').value,
    noun: document.getElementById('noun').value,
  };

  // Your Mad Libs story with placeholders
  const madLibsStory = "Once upon a time, in a {place}, there lived a {adjective} {noun}.";

  // Generate the completed story
  const result = addCommas(madLibsStory, userWords);

  // Display the completed story
  completedStory.textContent = result;
  madLibsResult.classList.remove('hidden');
}

// Feel free to add more placeholders and enhance the styling based on your preferences.