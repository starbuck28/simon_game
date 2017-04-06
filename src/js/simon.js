//Physical components/triggers
//It has an on/off switch
//It has a start button
//It has a strict mode button
//It has a counter to keep track of length of pattern
//It has a yellow button, a green button, a red button, and a blue button

//Game is set to OFF by default.
//When player clicks ON button, the counter lights up at 0.
//When player clicks start button, the computer starts the game



  //When the OFF button is pressed, the game resets
    //All arrays are cleared, counter is reset, counter screen is blank



  var Simon = (function() {

    var computerArr = [];
    var playerArr = [];
    var counter = -1;

    //Gets random number between 0 and 3
    function getNum() {
      return Math.floor(Math.random() * 4);
    }

    //Assigns color to corresponding number
    function getColor(num) {
      if (num === 0) {
        return "#yellow";
      } else if (num === 1) {
        return "#green";
      } else if (num === 2) {
        return "#red";
      } else if (num === 3) {
        return "#blue";
      }
    }

    //Returns lighter shade of a color (button lights up)
    function getLighterColor(id) {
      if (id === "#yellow") {
        return "#FFFC92";
      } else if (id === "#green") {
        return "#8FF98F";
      } else if (id === "#red") {
        return "#F95D5D";
      } else if (id === "#blue") {
        return "#6262F9";
      }
    }

    //Returns original shade of a color
    function resetColor(color) {
      if (color === "#yellow") {
        return "#FFFF00";
      } else if (color === "#green") {
        return "#00FF00";
      } else if (color === "#red") {
        return "#FF0000";
      } else if (color === "#blue") {
        return "#0000FF";
      }
    }

    //Returns a sound corresponding to a color
    function getSound(color) {
        if (color === "#yellow") {
          return 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3';
        } else if (color === "#green") {
          return 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3';
        } else if (color === "#red") {
          return 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3';
        } else if (color === "#blue") {
          return 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';
        }
    }

    //Checks to see if player wins
    function doesPlayerWin() {
      if (Simon.playerArr.length === 20) {
        return true;
        //When the player's array reaches 20
          //The player is alerted of their win
          //The game starts over
      }
    }


    function pickColor(color) {
        //When each colored button is clicked
          //The button's number is added to a player array
      Simon.playerArr.push(color);
      //The button lights up
      $(color).css("fill", Simon.getLighterColor(color));
      setTimeout(function() {
        $(color).css("fill", Simon.resetColor(color));
      }, 300);
      //The sound corresponding to the color is played
      var sound = new Audio(Simon.getSound(color));
      sound.play();
      console.log(Simon.playerArr);
      //The player's array is compared with the computer's array
      if (Simon.playerArr.length === Simon.computerArr.length) {
        for (var i = 0; i < Simon.playerArr.length; i++) {
          if (Simon.playerArr[i] !== Simon.computerArr[i]) {
            //If the corresponding index values are not equal, an error alert is activated, counter is reset
            alert("Wrong pattern!");
            Simon.counter = 0;
            //All 4 buttons flash twice
            //A negative sound is heard
            //If the strict button has been activated, the game starts over
            //If the strict button is not active, the computer's pattern lights up again
            return false;
          } else {
            //If the pattern does match
            alert("Correct pattern!");
              //Buttons light up in a circle
              //A positive sound is heard
              //The counter increases by 1
              Simon.counter++;
              //The computer generates a random color and adds to the pattern
            return true;
          }
        }
      } else {
        //Else set a timeout for an error, counter is reset
        Simon.counter = 0;
        return false;
      }

    }

    function startGame() {
      //The computer generates a random number corresponding to a color (between 0 and 3)
      //The computer matches the number to a corresponding color
      //The number is pushed to an array keeping track of the pattern of colors
      Simon.computerArr.push(Simon.getColor(Simon.getNum()));
      console.log(Simon.computerArr);
      console.log(Simon.computerArr.length);
      var lightColor;
      var oldColor;
      //The computer iterates through its array
      Simon.computerArr.forEach(function(element, index){
        lightColor = Simon.getLighterColor(element);
        setTimeout(function() {
          $(element).css("fill", Simon.getLighterColor(element));
        }, (1000 + 700 * index));
        console.log(element);
        var sound = new Audio(Simon.getSound(element));
        setTimeout(function() {
          sound.play();
        }, (1000 + 700 * index));
      });
      Simon.computerArr.forEach(function(element, index){
        oldColor = Simon.resetColor(element);
        setTimeout(function() {
          $(element).css("fill", Simon.resetColor(element));
        }, (1500 + 700 * index));
        console.log(element);
      });
        //A corresponding sound plays

    }

    //Game is turned off, game is reset
    function turnOff() {
      Simon.playerArr = [];
      Simon.computerArr = [];
      Simon.counter = 0;
    }

    return {
      computerArr: computerArr,
      playerArr: playerArr,
      counter: counter,
      getNum: getNum,
      getColor: getColor,
      getLighterColor: getLighterColor,
      getSound: getSound,
      pickColor: pickColor,
      resetColor: resetColor,
      doesPlayerWin: doesPlayerWin,
      startGame: startGame,
      turnOff: turnOff
    };
  })();


//When a color button is clicked
$(".color-btn").click(function() {
  var color = "#" + $(this).attr("id");
  //The player's array is updated
  Simon.pickColor(color);
  console.log(color);
});

//When the start button is clicked, the game starts
$("#btn-1").click(function() {
  Simon.startGame();
});
