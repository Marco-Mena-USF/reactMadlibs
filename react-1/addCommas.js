function addCommas(story, words) {
    // Use regular expressions to find placeholders like {noun}, {verb}, etc.
    const placeholderRegex = /\{(\w+)\}/g;
    
    // Replace placeholders with words provided by the user
    const madLibsStory = story.replace(placeholderRegex, (_, placeholder) => {
      // Check if the placeholder exists in the provided words
      if (words.hasOwnProperty(placeholder)) {
        return words[placeholder];
      } else {
        // If the placeholder is not found, leave it unchanged
        return `{${placeholder}}`;
      }
    });
  
    return madLibsStory;
  }
  
  module.exports = addCommas;