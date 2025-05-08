class CoverGoTest {
    constructor(page) {
      this.page = page;
    }

    /**
     * @description Selector for Home in navigation bar
     */
    get home() {
      return this.page.locator("a[data-test='nav-home']");
    }

    /**
     * @description Selector for Categories in navigation bar
     */
    get categories() {
      return this.page.locator("a[data-test='nav-categories']");
    }

    /**
     * @description Selector for Contact in navigation bar
     */
    get contact() {
      return this.page.locator("a[href*='contact']");
    }

    /**
     * @description Selector for Signin in navigation bar
     */
    get signIn() {
      return this.page.locator("a[href*='login']");
    }

    /**
     * @description Selector for Profile Menu in navigation bar
     */
    get profileMenu() {
      return this.page.locator("a[data-test='nav-menu']");
    }

    /**
     * @description Selector for Signin in navigation bar
     */
    get cartIcon() {
      return this.page.locator("a[href*='checkout']");
    }

    get languageBtn() {
      return this.page.locator("button#language");
    }

    /**
     * @description Selector for Register your account link
     */
    get registerLink() {
      return this.page.locator("a[href*='register']");
    }

    /**
     * @description Selector for First Name field
     */
    get firstNameField() {
      return this.page.locator("input#first_name");
    }

    /**
     * @description Selector for Last Name field
     */
    get lastNameField() {
      return this.page.locator("input#last_name");
    }

    /**
     * @description Selector for Date of Birth field at registration form
     */
    get dateOfBirthField() {
      return this.page.locator("input#dob");
    }

    /**
     * @description Selector for Street field at registration form
     */
    get streetField() {
      return this.page.locator("input#street");
    }

    /**
     * @description Selector for Postal Code field at registration form
     */
    get postalCodeField() {
      return this.page.locator("input#postal_code");
    }

    /**
     * @description Selector for City field at registration form
     */
    get cityField() {
      return this.page.locator("input#city");
    }

    /**
     * @description Selector for State field at registration form
     */
    get stateField() {
      return this.page.locator("input#state");
    }

    /**
     * @description Selector for Country dropdown field at registration form
     */
    get countryDropDown() {
      return this.page.locator("select#country");
    }

    /**
     * @description Selector for Phone field at registration form
     */
    get phoneField() {
      return this.page.locator("input#phone");
    }

    /**
     * @description Selector for Email field
     */
    get emailField() {
      return this.page.locator("input#email");
    }

    /**
     * @description Selector for Password fields at registration and login form
     */
    get passWordField() {
      return this.page.locator("input#password");
    }

    /**
     * @description Selector for submit button or input element to submit the form
     */
    get submit() {
      return this.page.locator("*[type='submit']");
    }

    /**
     * @description Selector for Login form
     */
    get loginForm() {
      return this.page.locator("app-login");
    }

    /**
     * @description Selector for Favorite tab
     */
    get favoriteTab() {
      return this.page.locator("a[href*='favorite']");
    }

    /**
     * @description Selector for Profile tab
     */
    get profileTab() {
      return this.page.locator("a[href*='profile']");
    }

    /**
     * @description Selector for Invoices tab
     */
    get invoicesTab() {
      return this.page.locator("a[href*='invoices']");
    }

    /**
     * @description Selector for Messages tab
     */
    get messagesTab() {
      return this.page.locator("a[href*='messages']");
    }

    /**
     * @description Selector for Search field at Home page
     */
    get searchField() {
      return this.page.locator("input#search-query");
    }

    /**
     * @description Selector for Add to Favorite button for the item/s
     */
    get addToFavoriteBtn() {
      return this.page.locator("button#btn-add-to-favorites");
    }

    /**
     * @description Selector for Product Name on the Favorite tab
     */
    get productNameInFavoriteTab() {
      return this.page.locator("h5[data-test='product-name']");
    }

    /**
     * @description Selector for Add to Cart button for the item/s
     */
    get addToCartBtn() {
      return this.page.locator("button#btn-add-to-cart");
    }

    /**
     * @description Selector for Product Title on the Cart
     */
    get productTitleInCart() {
      return this.page.locator("span.product-title");
    }

    /**
     * @description Selector for Product Price on the Cart
     */
    get productPrice() {
      return this.page.locator("span[data-test='product-price']");
    }

    /**
     * @description Selector for Proceed button in Cart panel when checking out an item
     */
    get proceedBtnInCart() {
      return this.page.locator("app-cart button[data-test*='proceed']");
    }

    /**
     * @description Selector for Proceed button in Login panel when checking out an item
     */
    get proceedBtnInLogin() {
      return this.page.locator("app-login button[data-test*='proceed']");
    }

    /**
     * @description Selector for Proceed button in Address panel when checking out an item
     */
    get proceedBtnInAddress() {
      return this.page.locator("app-address button[data-test*='proceed']");
    }

    /**
     * @description Selector for Payment Method dropdown field
     */
    get paymentMethod() {
      return this.page.locator("select#payment-method");
    }

    /**
     * @description Selector for Comfirm button when checking out an item
     */
    get confirmBtn() {
      return this.page.locator("button[data-test='finish']");
    }

    /**
     * @description Selector for alert message when the payment is successful
     */
    get paymentSuccessful() {
      return this.page.locator("div[data-test='payment-success-message']");
    }

    /**
     * @description Selector for alert message when the order confirmation is successful
     */
    get orderConfirmationTxt() {
      return this.page.locator("div#order-confirmation span");
    }

    /**
     * @description Selector for Invoice Numer on the table at Invoices tab
     */
    get invoiceNumber() {
      return this.page.locator("table td:first-of-type");
    }

    /**
     * @description Selector for Hand Tools category under of Category
     */
    get handToolsCategory() {
      return this.page.locator("a[href*='hand-tools']");
    }

    /**
     * @description Selector for Next button on the Home page
     */
    get nextBtn() {
      return this.page.locator("li.page-item a[aria-label='Next']");
    }

    /**
     * @description Selector for Next button that is disabled on the Home page
     */
    get disabledNextBtn() {
      return this.page.locator("li.page-item.disabled a[aria-label='Next']");
    }

    /**
     * @description Selector for Sort dropdown field on the Home page
     */
    get sortDropDown() {
      return this.page.locator("select[data-test='sort']");
    }

    /**
     * @description Selector for grid titles on the Home page
     */
    get gridTitlesInHome() {
      return this.page.locator("body h4");
    }

    /**
     * @description Selector for Language dropdown field
     */
    get languagesDropDown() {
      return this.page.locator("#dropdown-animated");
    }

    /**
     * @description Selector for Subject dropdown field on the Contact form
     */
    get subjectDropDown() {
      return this.page.locator("select#subject");
    }

    /**
     * @description Selector for Message textarea field on the Contact form
     */
    get messageTextArea() {
      return this.page.locator("textarea#message");
    }

    /**
     * @description Selector for File Upload field on the Contact form
     */
    get uploadFile() {
      return this.page.locator("input#attachment");
    }

    /**
     * @description Selector for alert message when submitting contact is successful
     */
    get contactSuccessAlert() {
      return this.page.locator("app-contact div.alert-success");
    }

    /**
     * @description Selector for Hammer category under of Filter
     */
    get filterByHammer() {
      return this.page.locator("//label[contains(text(), 'Hammer')]")
    }

    /**
     * @description Method to generate a random string
     * @param {String} length 
     * @returns Random String
     */
    async getRandomString(length = 8) {
      return Math.random().toString(36).slice(2, 2 + length);
    }

    /**
     * @description Method to search an item on the Home page
     * @param {String} itemName 
     */
    async searchItem(itemName) {
      const searchField = await this.searchField;
      await searchField.waitFor({ state: 'visible' });
      const currentValue = await searchField.inputValue();
      await (currentValue !== itemName ? searchField.fill(`${itemName}`) : Promise.resolve());
      const submit = await this.submit;
      await submit.click();
    }

    /**
     * @description Dynamically selector for items displayed in Home page
     * @param {String} itemName 
     * @returns Return element
     */
    itemDisplay(itemName) {
      return this.page.locator(`a.card img[alt='${itemName}']`);
    }

    /**
     * @description Dynamically selector for languages displayed in Language feature
     * @param {String} language 
     * @returns Return element
     */
    languageOpt(language) {
      return this.page.locator(`[data-test='lang-${language}']`);
    }

  }
  
  // Correct export syntax
  module.exports = { CoverGoTest };