# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> User login test @master @sanity @regression
- Location: tests\Login.spec.ts:42:5

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Test source

```ts
  1  | /**
  2  |  * Test Case: Login with Valid Credentials
  3  |  * 
  4  |  * Tags: @master @sanity @regression
  5  |  * 
  6  |  * Steps:
  7  |  * 1) Navigate to the application URL
  8  |  * 2) Navigate to Login page via Home page
  9  |  * 3) Enter valid credentials and log in
  10 |  * 4) Verify successful login by checking 'My Account' page presence
  11 |  */
  12 | 
  13 | import { test, expect } from '@playwright/test';
  14 | import { HomePage } from '../pages/HomePage';
  15 | import { LoginPage } from '../pages/LoginPage';
  16 | import { MyAccountPage } from '../pages/MyAccountPage';
  17 | import { TestConfig } from '../test.config';
  18 | import { tr } from '@faker-js/faker';
  19 | 
  20 | let config: TestConfig;
  21 | let homePage: HomePage;
  22 | let loginPage: LoginPage;
  23 | let myAccountPage: MyAccountPage;
  24 | 
  25 | // This hook runs before each test
  26 | test.beforeEach(async ({ page }) => {
  27 |   config = new TestConfig(); // Load config (URL, credentials)
> 28 |   await page.goto(config.appUrl); // Navigate to base URL
     |              ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  29 | 
  30 |   // Initialize page objects
  31 |   homePage = new HomePage(page);
  32 |   loginPage = new LoginPage(page);
  33 |   myAccountPage = new MyAccountPage(page);
  34 | });
  35 | 
  36 | // Optional cleanup after each test
  37 | test.afterEach(async ({ page }) => {
  38 |   await page.close(); // Close browser tab (good practice in local/dev run)
  39 | });
  40 | 
  41 | 
  42 | test('User login test @master @sanity @regression',async()=>{
  43 | 
  44 |     //Navigate to Login page via Home page
  45 | 
  46 |     await homePage.clickMyAccount();
  47 |     await homePage.clickLogin();
  48 | 
  49 |     //Enter valid credentials and log in
  50 |     await loginPage.setEmail(config.email);
  51 |     await loginPage.setPassword(config.password);
  52 |     await loginPage.clickLogin();
  53 | 
  54 |     //alternatevly
  55 |     //await loginPage.login(config.email,config.password);
  56 | 
  57 |     //Verify successful login by checking 'My Account' page presence
  58 |    
  59 |       const isLoggedIn=await myAccountPage.isMyAccountPageExists();
  60 | 
  61 |       if (isLoggedIn)
  62 |       {
  63 |         expect(isLoggedIn).toBeTruthy();
  64 |       }
  65 |       else
  66 |       {
  67 |         await loginPage.getloginErrorMessage()
  68 |       }
  69 |       
  70 | })
  71 | 
```