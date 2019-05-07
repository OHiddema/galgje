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
    let wordToGuess = $('#guessWord').val().toUpperCase();
    let letterToSearch = this.innerHTML;

    for (let i=0; i<wordToGuess.length; i++) {
      if (wordToGuess.substr(i,1) == letterToSearch) {
        console.log(i);
      }
    }
  });

});