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
//The computer waits for the player to match the pattern
  //If the pattern doesn't match
    //All 4 buttons flash twice
    //A negative sound is heard
    //If the strict button has been activated, the game starts over
  //If the pattern does match
    //Buttons light up in a circle
    //A positive sound is heard
    //The counter increases by 1
    //The computer generates a random color and adds to the pattern
  //When the OFF button is pressed, the game resets
    //All arrays are cleared, counter is set to 0, counter screen is blank

//It generates a random pattern counting up from 1
  //Computer generates a random number between 0 and 3
  //Computer pushes number into existing array
  //Computer tracks length of array
//It lights up the buttons with random generated pattern
  //Computer iterates through array and lights up corresponding color for each index
//It recognizes a colored button push
  //When player clicks on button
    //Lights up color
    //Pushes number of clicked button to existing array
//It compares computer generated pattern to pattern entered by user
  //If correct, continues advancing pattern
  //If incorrect, alerts player pattern is wrong

  var Simon = (function() {
    return true;
  })();
