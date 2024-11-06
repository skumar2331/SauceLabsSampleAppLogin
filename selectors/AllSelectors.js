export class LoginPageSelectors {
    static titleLoginPage = () => '//android.widget.ScrollView[@content-desc="test-Login"]/android.view.ViewGroup/android.widget.ImageView[1]';
    static inputUsername = () => '//android.widget.EditText[@content-desc="test-Username"]';
    static inputPassword = () => '//android.widget.EditText[@content-desc="test-Password"]';
    static btnSubmit = () => '//android.view.ViewGroup[@content-desc="test-LOGIN"]';
    static errorMessage = () => '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView';
}

export class ProductsPageSelectors {
    static labelProducts = () => '//android.widget.TextView[@text="PRODUCTS"]';
    static burgerMenu = () => '//android.view.ViewGroup[@content-desc="test-Menu"]';
    static btnLogout = () => '//android.view.ViewGroup[@content-desc="test-LOGOUT"]';
}