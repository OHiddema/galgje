var wrongGuesses = 0;

arrayBtn();

function arrayBtn(){
  for(let i=0; i<26; i++){
      let elem = document.createElement('div');
      let node = document.createTextNode(String.fromCharCode(65+i));
      
      elem.setAttribute('class', 'dynaBtn');
      elem.appendChild(node);
      document.body.appendChild(elem);
  }
}

$(function () {

  $('.dynaBtn').click(function () {
    var found = false;

    let wordToGuess = $('#guessWord').val().toUpperCase();
    let letterToSearch = this.innerHTML;

    for (let i=0; i<wordToGuess.length; i++) {
      if (wordToGuess.substr(i,1) == letterToSearch) {
        found = true;
        $('.fillWord').eq(i).html(letterToSearch);
      }
    }

    if (found === true) {   //check if we guessed the whole word correct
      let allCorrect = true;
      for (let i=0; i<wordToGuess.length; i++) {
        if (wordToGuess.substr(i,1) !== $('.fillWord').eq(i).html()) {
          allCorrect = false;
        }
      }
      if (allCorrect === true) {
        alert('Gefeliciteerd! Je hebt gewonnen!');
      }
    }

    if (found === false) {
      wrongGuesses +=1;
      $('#lblFouteBeurten').html(wrongGuesses);
      if (wrongGuesses === 10) {
        alert('Helaas pindakaas! Je hebt 10 foute beurten gemaakt, dus verloren.');
      }
    }
});

  $('#btnCreate').click(function () {
    let elem = document.createElement('br');
    document.body.appendChild(elem);


    for (let i=1; i<= $('#guessWord').val().length; i++ ) {
      let elem = document.createElement('div');
      elem.setAttribute('class', 'fillWord');
      document.body.appendChild(elem);  
    }

    // dirty fix!
    $('.fillWord').html('.');
    // dirty fix!
    
  })
});
