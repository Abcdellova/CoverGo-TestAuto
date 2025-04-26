const { test, expect } = require('@playwright/test');
const { CoverGoTest } = require('../pageObjects/coverGoTest');
let coverGoTest; // Declare globally in this file
test.beforeEach(async ({ page }) => {
  coverGoTest = new CoverGoTest(page);
});
const testData = require('../testData/coverGoTestData.json');
const sharedData = {
  randomText: '',
  randomEmail: '',
  randomPassWord: ''
};

test.describe.serial('Customer Flow', () => {
  test('Register as a new Customer', async ({ page }) => {

    // Generate random string
    sharedData.randomText = await coverGoTest.getRandomString(8);

    // Generate email with generated random string
    sharedData.randomEmail = `test_${sharedData.randomText}@example.com`;

    // Generate email with generated random string
    sharedData.randomPassWord = `Password@${sharedData.randomText}123`;

    // Browse the website
    await page.goto(testData.testUrl);

    // Click the Signin text to register
    await coverGoTest.signIn.waitFor({ state: 'visible' });
    await coverGoTest.signIn.click();

    // Click the "Register your account"
    await coverGoTest.registerLink.waitFor({ state: 'visible' });
    await coverGoTest.registerLink.click();

    // Fill up the First Name field
    await coverGoTest.firstNameField.waitFor({ state: 'visible' });
    await coverGoTest.firstNameField.fill(sharedData.randomText);

    // Fill up the Last Name field
    await coverGoTest.lastNameField.waitFor({ state: 'visible' });
    await coverGoTest.lastNameField.fill(sharedData.randomText);

    // Fill up the Date of Birth field
    await coverGoTest.dateOfBirthField.waitFor({ state: 'visible' });
    await coverGoTest.dateOfBirthField.fill(testData.registerDetails.dateOfBirth);

    // Fill up the Street field
    await coverGoTest.streetField.waitFor({ state: 'visible' });
    await coverGoTest.streetField.fill(sharedData.randomText);

    // Fill up the Postal Code field
    await coverGoTest.postalCodeField.waitFor({ state: 'visible' });
    await coverGoTest.postalCodeField.fill(testData.registerDetails.postalCode);

    // Fill up the City field
    await coverGoTest.cityField.waitFor({ state: 'visible' });
    await coverGoTest.cityField.fill(sharedData.randomText);

    // Fill up the State field
    await coverGoTest.stateField.waitFor({ state: 'visible' });
    await coverGoTest.stateField.fill(sharedData.randomText);

    // Select a Country dropdown field
    await coverGoTest.countryDropDown.waitFor({ state: 'visible' });
    await coverGoTest.countryDropDown.selectOption(testData.registerDetails.country);

    // Fill up the Phone field
    await coverGoTest.phoneField.waitFor({ state: 'visible' });
    await coverGoTest.phoneField.fill(testData.registerDetails.phoneNumber);

    // Fill up the Email field
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await coverGoTest.emailField.fill(sharedData.randomEmail);

    // Fill up the Password field
    await coverGoTest.passWordField.waitFor({ state: 'visible' });
    await coverGoTest.passWordField.fill(sharedData.randomPassWord);

    // Click the Register button
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();

    // Assert that the registration is successful and landed on the expected page
    await coverGoTest.loginForm.waitFor({ state: 'visible' });
    await expect(coverGoTest.loginForm).toBeVisible();

  });

  test('Log in as Customer', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Click the Signin text to log in
    await coverGoTest.signIn.waitFor({ state: 'visible' });
    await coverGoTest.signIn.click();

    // Fill up the Email field
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await expect(coverGoTest.emailField).toBeVisible();
    await coverGoTest.emailField.fill(sharedData.randomEmail);

    // Fill up the Password field
    await coverGoTest.passWordField.waitFor({ state: 'visible' });
    await expect(coverGoTest.passWordField).toBeVisible();
    await coverGoTest.passWordField.fill(sharedData.randomPassWord);

    // Click the Login button
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();

    // Assertion that the login is successful and landed on the expected page
    await coverGoTest.favoriteTab.waitFor({ state: 'visible' });
    await coverGoTest.profileTab.waitFor({ state: 'visible' });
    await coverGoTest.invoicesTab.waitFor({ state: 'visible' });
    await coverGoTest.messagesTab.waitFor({ state: 'visible' });

  });

  test('Add an item to the Favorite tab', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Click the Signin text to log in
    await coverGoTest.signIn.waitFor({ state: 'visible' });
    await coverGoTest.signIn.click();

    // Fill up the Email field
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await expect(coverGoTest.emailField).toBeVisible();
    await coverGoTest.emailField.fill(sharedData.randomEmail);

    // Fill up the Password field
    await coverGoTest.passWordField.waitFor({ state: 'visible' });
    await expect(coverGoTest.passWordField).toBeVisible();
    await coverGoTest.passWordField.fill(sharedData.randomPassWord);

    // Click the Login button
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();

    // Assertion that the login is successful and landed on the expected page
    await coverGoTest.favoriteTab.waitFor({ state: 'visible' });
    await coverGoTest.profileTab.waitFor({ state: 'visible' });
    await coverGoTest.invoicesTab.waitFor({ state: 'visible' });
    await coverGoTest.messagesTab.waitFor({ state: 'visible' });

    // Go to the Home page
    await coverGoTest.home.click();

    // Search an item
    await coverGoTest.searchItem(testData.listOfItem.combinationPliers);

    // Select the item
    const itemDisplayed = await coverGoTest.itemDisplay(testData.listOfItem.combinationPliers);
    await itemDisplayed.waitFor({ state: 'visible' });
    await expect(itemDisplayed).toBeVisible();
    await itemDisplayed.click();

    // Click the Add to Favorite button
    await coverGoTest.addToFavoriteBtn.waitFor({ state: 'visible' });
    await expect(coverGoTest.addToFavoriteBtn).toBeVisible();
    await coverGoTest.addToFavoriteBtn.click();

    // Go to Favorite tab to verify the item is added
    await coverGoTest.profileMenu.click();
    await coverGoTest.favoriteTab.waitFor({ state: 'visible' });
    await expect(coverGoTest.favoriteTab).toBeVisible();
    await coverGoTest.favoriteTab.click();

    // Assertion to confirm that the item is added in Favorite tab
    const productName = await coverGoTest.productNameInFavoriteTab;
    await productName.waitFor({ state: 'visible' });
    await expect(productName).toBeVisible();
    await expect(productName).toHaveText(testData.listOfItem.combinationPliers);

  });

  test('Add an item to the Cart', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Click the Signin text to log in
    await coverGoTest.signIn.waitFor({ state: 'visible' });
    await coverGoTest.signIn.click();

    // Fill up the Email field
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await expect(coverGoTest.emailField).toBeVisible();
    await coverGoTest.emailField.fill(sharedData.randomEmail);

    // Fill up the Password field
    await coverGoTest.passWordField.waitFor({ state: 'visible' });
    await expect(coverGoTest.passWordField).toBeVisible();
    await coverGoTest.passWordField.fill(sharedData.randomPassWord);

    // Click the Login button
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();

    // Assertion that the login is successful and landed on the expected page
    await coverGoTest.favoriteTab.waitFor({ state: 'visible' });
    await coverGoTest.profileTab.waitFor({ state: 'visible' });
    await coverGoTest.invoicesTab.waitFor({ state: 'visible' });
    await coverGoTest.messagesTab.waitFor({ state: 'visible' });

    // Go to the Home page
    await coverGoTest.home.click();

    // Search an item
    await coverGoTest.searchItem(testData.listOfItem.boltCutters);

    // Get the product price before adding to cart
    const itemDisplayed = await coverGoTest.itemDisplay(testData.listOfItem.boltCutters);
    await itemDisplayed.waitFor({ state: 'visible' });
    await expect(itemDisplayed).toBeVisible();
    let productPrice = await coverGoTest.productPrice;
    await productPrice.waitFor({ state: 'visible' });
    await expect(productPrice).toBeVisible();
    const productPriceAtListing = await productPrice.textContent();

    // Select the item
    await itemDisplayed.click();

    // Click the Add to Cart button
    await coverGoTest.addToCartBtn.waitFor({ state: 'visible' });
    await expect(coverGoTest.addToCartBtn).toBeVisible();
    await coverGoTest.addToCartBtn.click();

    // Go to Cart to view the item
    await coverGoTest.cartIcon.waitFor({ state: 'visible' });
    await expect(coverGoTest.cartIcon).toBeVisible();
    await coverGoTest.cartIcon.click();

    // Assertion to confirm that the item is added in Cart
    const producTitle = await coverGoTest.productTitleInCart;
    await producTitle.waitFor({ state: 'visible' });
    await expect(producTitle).toBeVisible();
    await expect(producTitle).toHaveText(testData.listOfItem.boltCutters);
    productPrice = await coverGoTest.productPrice;
    const productPriceAtCart = await productPrice.textContent();
    await expect(productPriceAtCart).toBe(productPriceAtListing);

  });


  test('Checkout an item to the Cart', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Click the Signin text to log in
    await coverGoTest.signIn.waitFor({ state: 'visible' });
    await coverGoTest.signIn.click();

    // Fill up the Email field
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await expect(coverGoTest.emailField).toBeVisible();
    await coverGoTest.emailField.fill(sharedData.randomEmail);

    // Fill up the Password field
    await coverGoTest.passWordField.waitFor({ state: 'visible' });
    await expect(coverGoTest.passWordField).toBeVisible();
    await coverGoTest.passWordField.fill(sharedData.randomPassWord);

    // Click the Login button
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();

    // Assertion that the login is successful and landed on the expected page
    await coverGoTest.favoriteTab.waitFor({ state: 'visible' });
    await coverGoTest.profileTab.waitFor({ state: 'visible' });
    await coverGoTest.invoicesTab.waitFor({ state: 'visible' });
    await coverGoTest.messagesTab.waitFor({ state: 'visible' });

    // Go to the Home page
    await coverGoTest.home.click();

    // Search an item
    await coverGoTest.searchItem(testData.listOfItem.thorHammer);

    // Select the item
    const itemDisplayed = await coverGoTest.itemDisplay(testData.listOfItem.thorHammer);
    await itemDisplayed.waitFor({ state: 'visible' });
    await expect(itemDisplayed).toBeVisible();
    await itemDisplayed.click();

    // Click the Add to Cart button
    await coverGoTest.addToCartBtn.waitFor({ state: 'visible' });
    await expect(coverGoTest.addToCartBtn).toBeVisible();
    await coverGoTest.addToCartBtn.click();

    // Go to Cart to view the item
    await coverGoTest.cartIcon.waitFor({ state: 'visible' });
    await expect(coverGoTest.cartIcon).toBeVisible();
    await coverGoTest.cartIcon.click();

    // Assertion to confirm that the item is added in Cart
    const producTitle = await coverGoTest.productTitleInCart;
    await producTitle.waitFor({ state: 'visible' });
    await expect(producTitle).toBeVisible();
    await expect(producTitle).toHaveText(testData.listOfItem.thorHammer);
    
    // Click the Proceed button in Cart form
    await coverGoTest.proceedBtnInCart.waitFor({ state: 'visible' });
    await expect(coverGoTest.proceedBtnInCart).toBeVisible();
    await coverGoTest.proceedBtnInCart.click();

    // Click the Proceed button in Log in form
    await coverGoTest.proceedBtnInLogin.waitFor({ state: 'visible' });
    await expect(coverGoTest.proceedBtnInLogin).toBeVisible();
    await coverGoTest.proceedBtnInLogin.click();

    // Click the Proceed button in Address form
    await coverGoTest.proceedBtnInAddress.waitFor({ state: 'visible' });
    await expect(coverGoTest.proceedBtnInAddress).toBeVisible();
    await coverGoTest.proceedBtnInAddress.click();

    // Select "Cash on Deliver" as Payment Method
    await coverGoTest.paymentMethod.waitFor({ state: 'visible' });
    await expect(coverGoTest.paymentMethod).toBeVisible();
    await coverGoTest.paymentMethod.selectOption(testData.paymentMethod.cashOnDelivery);

    // Click the Confirm button
    await coverGoTest.confirmBtn.click();

    // Verify that the payment succeed
    await coverGoTest.paymentSuccessful.waitFor({ state: 'visible' });
    await expect(coverGoTest.paymentSuccessful).toBeVisible();

    // Click the Confirm button
    await coverGoTest.confirmBtn.click();

    // Get the generated invoice number for verification in Invoices tab
    const oderConfirmation = await coverGoTest.orderConfirmationTxt;
    await oderConfirmation.waitFor({ state: 'visible' });
    await expect(oderConfirmation).toBeVisible();
    const invoiceText = await oderConfirmation.textContent();
    const invoiceNumber = invoiceText?.trim();

    // View the invoice on the Invoices tab
    await coverGoTest.profileMenu.click();
    await coverGoTest.invoicesTab.waitFor({ state: 'visible' });
    await expect(coverGoTest.invoicesTab).toBeVisible();
    await coverGoTest.invoicesTab.click();

    // Verify the generated invoice is displayed
    const invoiceInInvoiceTab = await coverGoTest.invoiceNumber;
    const invoiceTextInInvoiceTab = await invoiceInInvoiceTab.textContent();
    const invoiceNumberInInvoiceTab = invoiceTextInInvoiceTab?.trim();
    await expect(invoiceNumber).toBe(invoiceNumberInInvoiceTab);

  });

  test('Verify Category Feature', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Go to Category > Hand Tools
    await coverGoTest.categories.waitFor({ state: 'visible' });
    await coverGoTest.categories.click();
    await coverGoTest.handToolsCategory.waitFor({ state: 'visible' });
    await coverGoTest.handToolsCategory.click();

    // Assertion to confirm that item displayed is relevant to Hand Tools
    while (true) {
      const isDisabled = await coverGoTest.disabledNextBtn.isVisible();
      if (isDisabled) {
        break;
      };
      const powerTools = [
        testData.listOfItem.sheetSander,
        testData.listOfItem.circularSaw
      ];
      // Loop through each item and assert it's not visible
      for (const tool of powerTools) {
        await expect(coverGoTest.itemDisplay(tool)).not.toBeVisible();
      };
      // Click the Next button
      await coverGoTest.nextBtn.click();
    };

  });

  test('Verify Sorting Feature', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Sort to Ascending
    await coverGoTest.sortDropDown.waitFor({ state: 'visible' });
    await expect(coverGoTest.sortDropDown).toBeVisible();
    await coverGoTest.sortDropDown.selectOption(testData.sort.ascending);

    // Assertion to confirm that item is sorted in Ascending
    let tools = [
      testData.listOfItem.sheetSander,
      testData.listOfItem.thorHammer
    ];
    for (const tool of tools) { // Loop through each item and assert it's not visible
      await expect(coverGoTest.itemDisplay(tool)).not.toBeVisible();
    };
    tools = [
      testData.listOfItem.boltCutters,
      testData.listOfItem.circularSaw
    ];
    for (const tool of tools) { // Loop through each item and assert it's visible
      await expect(coverGoTest.itemDisplay(tool)).toBeVisible();
    };

    // Sort to Descending
    await coverGoTest.sortDropDown.waitFor({ state: 'visible' });
    await expect(coverGoTest.sortDropDown).toBeVisible();
    await coverGoTest.sortDropDown.selectOption(testData.sort.descending);

    // Assertion to confirm that item is sorted in Descending
    tools = [
      testData.listOfItem.combinationPliers,
      testData.listOfItem.boltCutters,
      testData.listOfItem.circularSaw
    ];
    for (const tool of tools) { // Loop through each item and assert it's not visible
      await expect(coverGoTest.itemDisplay(tool)).not.toBeVisible();
    };
    tools = [
      testData.listOfItem.thorHammer,
      testData.listOfItem.toolCabinet
    ];
    for (const tool of tools) { // Loop through each item and assert it's visible
      await expect(coverGoTest.itemDisplay(tool)).toBeVisible();
    };

  });

  test('Verify Filter Feature', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Filter the list of item by Hammer
    await coverGoTest.filterByHammer.waitFor({ state: 'visible' });
    await expect(coverGoTest.filterByHammer).toBeVisible();
    await coverGoTest.filterByHammer.click();

    // Assertion to confirm that item is sorted in Ascending
    let tools = [
      testData.listOfItem.sheetSander,
      testData.listOfItem.combinationPliers,
      testData.listOfItem.boltCutters,
      testData.listOfItem.circularSaw,
      testData.listOfItem.toolCabinet
    ];
    for (const tool of tools) { // Loop through each item and assert it's not visible
      await expect(coverGoTest.itemDisplay(tool)).not.toBeVisible();
    };
    tools = [
      testData.listOfItem.thorHammer,
      testData.listOfItem.sledgeHammer,
      testData.listOfItem.courtHammer
    ];
    for (const tool of tools) { // Loop through each item and assert it's visible
      await expect(coverGoTest.itemDisplay(tool)).toBeVisible();
    };

  });

  test('Verify Language', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Select a German as Language
    await coverGoTest.languageBtn.waitFor({ state: 'visible' });
    await expect(coverGoTest.languageBtn).toBeVisible();
    await coverGoTest.languageBtn.click();
    await coverGoTest.languagesDropDown.waitFor({ state: 'visible' });
    await expect(coverGoTest.languagesDropDown).toBeVisible();
    let selectLanguage = await coverGoTest.languageOpt(testData.languages.german);
    await selectLanguage.click();

    // Assertion to confirm the language is changed to German
    let h4Elements = await coverGoTest.gridTitlesInHome;
    let count = await h4Elements.count(); // Get total count
    for (const keyword of testData.germanKeywords) { // Loop through keywords and check if any h4 contains each one
      let found = false;
      for (let i = 0; i < count; i++) {
        const text = await h4Elements.nth(i).innerText();
        if (text.includes(keyword)) {
          found = true;
          break;
        };
      };
      expect(found).toBeTruthy();
    };

    // Select a Spanish as Language
    await coverGoTest.languageBtn.waitFor({ state: 'visible' });
    await expect(coverGoTest.languageBtn).toBeVisible();
    await coverGoTest.languageBtn.click();
    await coverGoTest.languagesDropDown.waitFor({ state: 'visible' });
    await expect(coverGoTest.languagesDropDown).toBeVisible();
    selectLanguage = await coverGoTest.languageOpt(testData.languages.spanish);
    await selectLanguage.click();

    // Assertion to confirm the language is changed to Spanish
    h4Elements = await coverGoTest.gridTitlesInHome;
    count = await h4Elements.count(); // Get total count
    for (const keyword of testData.spanishKeywords) { // Loop through keywords and check if any h4 contains each one
      let found = false;
      for (let i = 0; i < count; i++) {
        const text = await h4Elements.nth(i).innerText();
        if (text.includes(keyword)) {
          found = true;
          break;
        };
      };
      expect(found).toBeTruthy();
    };

  });


  test('Verify Contact Feature', async ({ page }) => {

    // Browse the website
    await page.goto(testData.testUrl);

    // Go to Contact
    await coverGoTest.contact.waitFor({ state: 'visible' });
    await expect(coverGoTest.contact).toBeVisible();
    await coverGoTest.contact.click();

    // Fill up the Contact form
    await coverGoTest.firstNameField.waitFor({ state: 'visible' });
    await coverGoTest.firstNameField.fill(sharedData.randomText);
    await coverGoTest.lastNameField.waitFor({ state: 'visible' });
    await coverGoTest.lastNameField.fill(sharedData.randomText);
    await coverGoTest.emailField.waitFor({ state: 'visible' });
    await coverGoTest.emailField.fill(sharedData.randomEmail);
    await coverGoTest.subjectDropDown.waitFor({ state: 'visible' });
    await coverGoTest.subjectDropDown.selectOption(testData.subject);
    await coverGoTest.messageTextArea.waitFor({ state: 'visible' });
    await coverGoTest.messageTextArea.fill(testData.testMessage);
    await coverGoTest.uploadFile.waitFor({ state: 'visible' });
    await coverGoTest.uploadFile.setInputFiles(testData.file.path);

    // Submit the Contact form
    await coverGoTest.submit.waitFor({ state: 'visible' });
    await coverGoTest.submit.click();
    
    // Assertion to confirm that the contact form is successfully submitted
    await coverGoTest.contactSuccessAlert.waitFor({ state: 'visible' });
    await expect(coverGoTest.contactSuccessAlert).toBeVisible();

  });


});