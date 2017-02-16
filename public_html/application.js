var playerChoice;

var readable = {
  '0': 'Rock',
  '1': 'Paper',
  '2': 'Scissors'
  }

var compChoice = {
  rndcomp: function() {
     //this. refers to compChoice
     //creates a random number and round the number to its nearest integer
    this.store = Math.floor(Math.random() * 3);
    //depending on the number we get this will match that number to the readable values
    this.text = readable[this.store];
  }, 
}

var order = [0, 1, 2];
//choosing the iwinner
var chooseWinner = function(player, comp) {
   //if the players order match with the computers order then its a draw
    if(order[player] == order[comp]) {
    return " The game is tied ";
  }
  //if the order of the player is one above the computer then the user wins 
  if(order[player] == order[comp + 1]) {
    return " You won ";
    //other wise the computer wins you lose
  } else {
    return " You lost ";
  }
}
//the querySelector get's the first element in the document with the class name in this case the paragraph tag "p"
var paragraph = document.querySelector('p');

var Clickable = function(tag, userChoice) {
  //adding the click listener
  tag.addEventListener('click', function() {
    //setting the players choice
    playerChoice = userChoice;
    // give feedback to the computer compChoice
    compChoice.rndcomp();
    //this will print out the readable version of the computers choice
    paragraph.innerText = "The computer chose: " + compChoice.text;
    // display the winner, the += will add on to the previous innerText
    paragraph.innerText += '\n' + chooseWinner(playerChoice, compChoice.store);
  });
}

var images = {
  tagname: document.getElementsByTagName('img'),
  rndcomp: function() {
      //goes through the tag names legth which is the number of image length
      for(var counter = 0; counter < this.tagname.length; counter++) {
      //this willl assign the click to the tagname after the loop is run
      Clickable(this.tagname[counter], counter);
    }
  }
}
//calling the images function
images.rndcomp();