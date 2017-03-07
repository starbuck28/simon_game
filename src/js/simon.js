//Physical components/triggers
//It has an on/off switch
//It has a start button
//It has a strict mode button
//It has a counter to keep track of length of pattern
//It has a yellow button, a green button, a red button, and a blue button

//Game is set to OFF by default.
//When player clicks ON button, the counter lights up at 0.
//When player clicks start button, the computer starts the game

  //If the pattern doesn't match
    //All 4 buttons flash twice
    //A negative sound is heard
    //If the strict button has been activated, the game starts over
    //If the strict button is not active, the computer's pattern lights up again
  //If the pattern does match
    //Buttons light up in a circle
    //A positive sound is heard
    //The counter increases by 1
    //The computer generates a random color and adds to the pattern
  //When the player's array reaches 20
    //The player is alerted of their win
    //The game starts over
  //When the OFF button is pressed, the game resets
    //All arrays are cleared, counter is set to 0, counter screen is blank



  var Simon = (function() {

    var computerArr = [];
    var playerArr = [];
    var counter = -1;

    function getNum() {
      return Math.floor(Math.random() * 4);
    }

    function getColor(num) {
      if (num === 0) {
        return "yellow";
      } else if (num === 1) {
        return "green";
      } else if (num === 2) {
        return "red";
      } else if (num === 3) {
        return "blue";
      }
    }

    function pickColor(color) {
        //When each colored button is clicked
          //The button's number is added to a player array
      Simon.playerArr.push(color);
      //A sound corresponding to the button is heard
      //The button lights up
      //A counter increases by 1
      Simon.counter++;
      //The player's array is compared with the computer's array
        //If the corresponding index values are not equal, an error alert is activated, counter is reset
        //Else if the arrays are equal, a success sequence is initiated, counter is reset
        //Else set a timeout for an error, counter is reset
    }

    function startGame() {
      //The computer generates a random number corresponding to a color (between 0 and 3)
      //The computer matches the number to a corresponding color
      //The number is pushed to an array keeping track of the pattern of colors
      Simon.computerArr.push(Simon.getColor(Simon.getNum()));
      console.log(Simon.computerArr);
      console.log(Simon.computerArr.length);
      //The corresponding color lights up
      //A corresponding sound plays
    }

    return {
      computerArr: computerArr,
      playerArr: playerArr,
      counter: counter,
      getNum: getNum,
      getColor: getColor,
      pickColor: pickColor,
      startGame: startGame
    };

  })();
