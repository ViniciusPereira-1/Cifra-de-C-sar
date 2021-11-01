// GLOBAL CONSTANT VARIABLES
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// TEST VARIABLES
let testMessage = 'teste etset aaazzz biblioteconomia !a%34235basd@ ddd8583aci3 0@Ç^~ AaAaAAAaA'

function callCypher (operator, message) {

  let codifiedString = [];
  // test purposes, the values will be implemented through a functional HTML input
  let codeKey = 1;
  let codifyString = message;

  // use 1 for CYPHERING THE MESSAGE; otherwise, use any other value for decoding a cypher - for good practices, opt for using the number 2 for decoding
  if (operator !== 1){
    codeKey = -codeKey;
  }

  codifyString = codifyString.toUpperCase();

  for (i = 0; i < codifyString.length; i++){
    if (typeof codeKey !== 'number') {
      console.log("Invalid codification value! Please insert a number!")
      return
    }

    let letterIndex = alphabet.indexOf(codifyString[i]);
    let codeLetterIndex = letterIndex + codeKey;

    if (codifyString[i] === ' ') {
      codifiedString = codifiedString + ' ';
    } else if (letterIndex === -1) { // Checks for undefined values
      codifiedString = codifiedString + '?';
    } else {
    // This IF loops the alphabet vector when the codeLetterIndex goes higher/lower than the possible values (0 to 26). FUNCTIONAL BUT NOT OPTIMIZED, BE CAREFUL!
      if (codeLetterIndex > 25 || codeLetterIndex < 0){
        while (codeLetterIndex > 25) {
          codeLetterIndex = codeLetterIndex - 26;
        }
        while (codeLetterIndex < 0) {
          codeLetterIndex = codeLetterIndex + 26;
        }
      }
      codifiedString = codifiedString + alphabet[codeLetterIndex];
   }
 }
 return codifiedString.toLowerCase();
}

// Calling with variables
console.log(callCypher(1, testMessage));
let codifiedMessage= callCypher(1, testMessage);
console.log(callCypher(2, codifiedMessage));

// Calling with strings
console.log(callCypher(1, 'Isso foi uma mensagem de teste'));
console.log(callCypher(2, callCypher(1,'Isso foi uma mensagem de teste')));
