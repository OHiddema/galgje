var wrongGuesses = 0;

arrayBtn();

// Dynamically build 26 'buttons' with A..Z
function arrayBtn() {
  for (let i = 0; i < 26; i++) {
    let elem = document.createElement('div');
    let node = document.createTextNode(String.fromCharCode(65 + i));

    elem.setAttribute('class', 'alphabetBtn');
    elem.appendChild(node);
    document.body.appendChild(elem);
  }
}

$(function () {

  // Dynamically create placeholders for the letters of the word to be guessed
  $('#btnCreate').click(function () {
    let elem = document.createElement('br');
    document.body.appendChild(elem);

    for (let i = 1; i <= $('#guessWord').val().length; i++) {
      let elem = document.createElement('div');
      elem.setAttribute('class', 'fillWord');
      document.body.appendChild(elem);
    }

    // dirty fix!
    $('.fillWord').html('.');
    // dirty fix!

  })

  // The user chooses a letter
  $('.alphabetBtn').click(function () {
    var found = false;

    let wordToGuess = $('#guessWord').val().toUpperCase();
    let letterToSearch = this.innerHTML;

    // Check if the chosen letter is in the word to be guessed
    for (let i = 0; i < wordToGuess.length; i++) {
      if (wordToGuess.substr(i, 1) == letterToSearch) {
        found = true;
        // Fill in the letters in the right positions
        $('.fillWord').eq(i).html(letterToSearch);
      }
    }

    // Check if we guessed the whole word correct
    if (found === true) {
      let allCorrect = true;
      for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess.substr(i, 1) !== $('.fillWord').eq(i).html()) {
          allCorrect = false;
        }
      }
      if (allCorrect === true) {
        alert('Gefeliciteerd! Je hebt gewonnen!');
      }
    }

    // Check if max number of wrong guesses is reached
    if (found === false) {
      wrongGuesses += 1;
      $('#lblFouteBeurten').html(wrongGuesses);
      if (wrongGuesses === 10) {
        alert('Helaas pindakaas! Je hebt 10 foute beurten gemaakt, dus verloren.');
      }
    }
  });

});
