import { $ } from '@wdio/globals'
import Page from './page.js';
import { LoginPageSelectors } from '../../selectors/AllSelectors.js';
/**
 * Login Page Objects - selectors and methods specific to login page
 */
class LoginPage extends Page {
    /**
     * getter methods for selectors
     */

    get titleLoginPage () {
        return $(LoginPageSelectors.titleLoginPage());
    }

    get inputUsername () {
        return $(LoginPageSelectors.inputUsername());
    }

    get inputPassword () {
        return $(LoginPageSelectors.inputPassword());
    }

    get btnSubmit () {
        return $(LoginPageSelectors.btnSubmit());
    }

    get errorMessage () {
        return $(LoginPageSelectors.errorMessage());
    }

    /**
     * Login using username and password
     */
    async login (username, password) {        
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();