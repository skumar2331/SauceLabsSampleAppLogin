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
        // return $('//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[1]');
    }

    get inputUsername () {
        return $(LoginPageSelectors.inputUsername());
        // return $('//android.widget.EditText[@content-desc="test-Username"]');
    }

    get inputPassword () {
        return $(LoginPageSelectors.inputPassword());
        // return $('//android.widget.EditText[@content-desc="test-Password"]');
    }

    get btnSubmit () {
        return $(LoginPageSelectors.btnSubmit());
        // return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    }

    get errorMessage () {
        return $(LoginPageSelectors.errorMessage());
        // return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        // await this.inputPassword.waitForEnabled({ timeout: 50000 })
        
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // open () {
    //     return super.open('login');
    // }
}

export default new LoginPage();