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
});
