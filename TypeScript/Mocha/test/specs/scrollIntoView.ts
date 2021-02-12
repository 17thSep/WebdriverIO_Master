describe("Sample Test set", () => {
  it("Test case", () => {
    browser.navigateTo("https://dfinity.org/");
    $('#cky-btn-accept').click()
    $('//*[@id="gatsby-focus-wrapper"]/div[2]/section/form/button').click()    
    browser.debug()    
  });
});
