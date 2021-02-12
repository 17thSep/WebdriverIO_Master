"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
cucumber_1.Given(/^I am on the (\w+) page$/, (page) => {
    browser.url(`https://the-internet.herokuapp.com/${page}`);
});
cucumber_1.When(/^I login with (\w+) and (.+)$/, (username, password) => {
    $('#username').setValue(username);
    $('#password').setValue(password);
    $('button[type="submit"]').click();
});
cucumber_1.Then(/^I should see a flash message saying (.*)$/, (message) => {
    expect($('#flash')).toBeExisting();
    expect($('#flash')).toHaveTextContaining(message);
});
