// GLOBAL CONSTANT VARIABLES
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

// BUTTONS!
const codifyButton = document.querySelector('#codify-button');
const decodifyButton = document.querySelector('#decodify-button');
const randomButton = document.querySelector('#button-randomize');


function callCypher (operator, message) {

  let codifiedMessage = [];
  // test purposes, the values will be implemented through a functional HTML input
  let codeKey = parseFloat(document.getElementById('codekey-input').value) || 0;
  let codifyString = message;

  // use 1 for CYPHERING THE MESSAGE; otherwise, use any other value for decoding a cypher - for good practices, opt for using the number 2 for decoding
  if (operator !== 1){
    codeKey = -codeKey;
  }

  message = message.toUpperCase();

  for (i = 0; i < message.length; i++){
    if (typeof codeKey !== 'number') {
      console.log("Invalid codification value! Please insert a number!")
      return
    }

    let letterIndex = alphabet.indexOf(message[i]);
    let codeLetterIndex = letterIndex + codeKey;

    if (message[i] === ' ') {
      codifiedMessage = codifiedMessage + ' ';
    } else if (letterIndex === -1) { // Checks for undefined values
      codifiedMessage = codifiedMessage + '#';
    } else {
    // This IF loops the alphabet vector when the codeLetterIndex goes higher/lower than the possible values (0 to 26). FUNCTIONAL BUT NOT OPTIMIZED, BE CAREFUL!
      if (codeLetterIndex > 25 || codeLetterIndex < 0){
        while (codeLetterIndex > 25) {
          codeLetterIndex = codeLetterIndex % 26;
        }
        while (codeLetterIndex < 0) {
          codeLetterIndex = codeLetterIndex + 26;
        }
      }
      codifiedMessage = codifiedMessage + alphabet[codeLetterIndex];
   }
 }
 return codifiedMessage.toLowerCase();
}

codifyButton.addEventListener('click', button => {
  let messageToCode = document.getElementById('message-input').value || 'Hello World';
  let resultCodifiedMessage =  callCypher(1, messageToCode);
  document.getElementById('message-output').innerText = resultCodifiedMessage;
})

decodifyButton.addEventListener('click', button => {
  let messageToCode = document.getElementById('message-input').value || 'Hello World';
  let resultCodifiedMessage =  callCypher(2, messageToCode);
  document.getElementById('message-output').innerText = resultCodifiedMessage;
})

randomButton.addEventListener('click', button => {
  let randomCodeKey = Math.floor(Math.random() * 26)
  let randomizeSignal = Math.floor(Math.random() * 2)
  if (randomizeSignal > 0.5) { randomCodeKey = -randomCodeKey; }
  document.getElementById('codekey-input').value = randomCodeKey;
})
