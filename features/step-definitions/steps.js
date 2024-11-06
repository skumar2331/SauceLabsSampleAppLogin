import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import ProductsPage from '../pageobjects/products.page.js';

Given(/^I am on the login page$/, async () => {
    console.log('On login Page');
    await expect(LoginPage.titleLoginPage).toBeExisting()
});

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
When(/^I login with (.*) and (.*)$/, async (username, password) => {
// When(/I login with {string} and {string}/, async (username, password) => {
    await LoginPage.login(username, password)
    await browser.pause(5000)
});

Then(/^I should be able to log in with correct credentials or see an error message saying (.*)$/, async (message) => {
    if(await (ProductsPage.labelProducts).isExisting()){
        await expect(ProductsPage.labelProducts).toBeExisting();
        await (ProductsPage.burgerMenu).click();
        await (ProductsPage.btnLogout).waitForExist();
        await (ProductsPage.btnLogout).click();
    }
    else{
        await expect(LoginPage.errorMessage).toHaveText(expect.stringContaining(message))
    }
});