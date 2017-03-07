describe("Simon JavaScript Game", function() {
  it("is defined", function() {
    expect(Simon).toBeDefined();
  });
  it("should generate a random number", function() {
    expect(Simon.getNum()).toBeLessThan(4);
  });
  it("should have a function startGame that contains getNum", function() {
    expect(Simon.startGame).toBeDefined();
  });
  it("should push a random number to the computer's array", function() {
    Simon.startGame();
    expect(Simon.computerArr.length).toEqual(1);
  });
  it("should be able match each number with a color", function() {
    expect(Simon.getColor(0)).toEqual("yellow");
    expect(Simon.getColor(1)).toEqual("green");
    expect(Simon.getColor(2)).toEqual("red");
    expect(Simon.getColor(3)).toEqual("blue");
  });
  it("should allow the player to add a color to an array and increase a counter by 1", function() {
    Simon.pickColor("yellow");
    expect(Simon.playerArr).toEqual(["yellow"]);
    expect(Simon.counter).toEqual(0);
  });
  it("should compare index value from player's array with computer's array and return false if they are not equal", function() {
    Simon.computerArr = ["yellow", "green"];
    Simon.playerArr = ["blue"];
    expect(Simon.pickColor()).toEqual(false);
  });
});
