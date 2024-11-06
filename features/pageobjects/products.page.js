import { $ } from '@wdio/globals'
import Page from './page.js';
import { ProductsPageSelectors } from '../../selectors/AllSelectors.js';

/**
 * sub page containing specific selectors and methods for a products page
 */
class ProductsPage extends Page {
    /**
     * define selectors using getter methods
     */

    get labelProducts () {
        return $(ProductsPageSelectors.labelProducts());
    }

    get burgerMenu () {
        return $(ProductsPageSelectors.burgerMenu());
    }

    get btnLogout () {
        return $(ProductsPageSelectors.btnLogout());
    }
}

export default new ProductsPage();
