describe("Sample Test set", () => {
  it("Test case", () => {
    browser.navigateTo("https://the-internet.herokuapp.com/login");
    $("//*[@id='username']").click()
    $("//*[@id='username']").setValue('Ara')
    $("//*[@id='username']").clearValue()    
  });
});
