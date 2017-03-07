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
});
