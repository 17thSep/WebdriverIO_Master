import { Given, When, Then } from 'cucumber'

Given(/^I am on the (\w+) page$/, (page: string) => {
    browser.url(`https://the-internet.herokuapp.com/${page}`);
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

