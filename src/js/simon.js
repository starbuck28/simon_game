//Physical components/triggers
//It has an on/off switch
//It has a start button
//It has a strict mode button
//It has a counter to keep track of length of pattern
//It has a yellow button, a green button, a red button, and a blue button

//Game is set to OFF by default.
//When player clicks ON button, the counter lights up at 0.
//When player clicks start button, the computer starts the game
  //The computer generates a random number corresponding to a color (between 0 and 3)
  //The number is pushed to an array keeping track of the pattern of colors
  //The corresponding color lights up
  //A corresponding sound plays
//The computer waits for the player to match the pattern
  //When each colored button is clicked
    //A sound corresponding to the button is heard
    //The button lights up
    //The button's number is added to a player array
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
    function startGame() {
      return Math.floor(Math.random()) * 3;
    }

    return {
      startGame: startGame
    };

  })();
