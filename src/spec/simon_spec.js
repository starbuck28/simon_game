describe("Simon JavaScript Game", function() {
  it("is defined", function() {
    expect(Simon).toBeDefined();
  });
  it("should contain a game start function that generates a random number between 0 and 3", function() {
    expect(Simon.startGame()).toBeLessThan(4);
  });
});
