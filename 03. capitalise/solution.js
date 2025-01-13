function capitalise(word) {
  word[0] = word[0].toUpperCase();

  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

}

console.log(capitalise("hello"));

console.log(capitalise("PyThOn"));

module.exports = { capitalise };


// word.charAt(0) - Gets the first character of the word at index 0
// .toUpperCase() - Converts that first character to uppercase
// word.slice(1) - slice of the word from index 1 to the end
// .toLowerCase() - Converts the last part to lowercase





