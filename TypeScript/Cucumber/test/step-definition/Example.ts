/* ***                              Hints                                   *** 
Try entering the spelling for Given incorrectly, TypeScript wont allow you    
Mouse hover 'browser' you will the assosicated libraries
Enter $ alone you will the suggestion
Enter $('#password') and enter . all the assosicated functions will be shown
For expect to work you need to add "expect-webdriverio" in the tsconfig.json under types
*/     

const { Given, When, Then } = require('@cucumber/cucumber')

Given(/^I am on the login page$/, () => {
    browser.url('https://the-internet.herokuapp.com/login');
});

When(/^I login with (\w+) and (.+)$/, (username:string, password: string) => {
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('button[type="submit"]').click(); 
});

Then(/^I should see a flash message saying (.*)$/, (message: string) => {     
    expect($('#flash')).toBeExisting();
    expect($('#flash')).toHaveTextContaining(message);
});

