/* ***                              Hints                                   *** 
Try entering the spelling for Given incorrectly, TypeScript wont allow you    
Mouse hover 'browser' you will the assosicated libraries
Enter $ alone you will the suggestion
Enter $('#password') and enter . all the assosicated functions will be shown
For expect to work you need to add "expect-webdriverio" in the tsconfig.json under types
*/   
describe("Sample Test set", () => {
  it("Test case", () => {

    browser.navigateTo("https://the-internet.herokuapp.com/login");
    $("//*[@id='username']").click();
    $("//*[@id='username']").setValue("tomsmith");
    $("#password").setValue("SuperSecretPassword!");
    $('button[type="submit"]').click();
    
  });
});
