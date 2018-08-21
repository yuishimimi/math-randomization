//create an array of adjectives or adverbs
var insultAdjective = [
"you suck",
"that's a prostitute's name",
"ew",
"lit"
]
//ask the person for his or her name
var askName = prompt ("What is your name?")
//create a random generator
var x = Math.floor(Math.random() * insultAdjective.length);
//let the user know what kind of person you are. for example
//username followed or preceded by the array item
window.alert(insultAdjective[x]);