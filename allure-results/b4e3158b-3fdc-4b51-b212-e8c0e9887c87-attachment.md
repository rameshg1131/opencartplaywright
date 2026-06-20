# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginDataDriven.spec.ts >> Login Test with CSV Data: Valid login @datadriven
- Location: tests\LoginDataDriven.spec.ts:57:8

# Error details

```
Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
Call log:
  - navigating to "http://localhost/opencart/upload/", waiting until "load"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e6]:
    - heading "This site can’t be reached" [level=1] [ref=e7]
    - paragraph [ref=e8]:
      - strong [ref=e9]: localhost
      - text: refused to connect.
    - generic [ref=e10]:
      - paragraph [ref=e11]: "Try:"
      - list [ref=e12]:
        - listitem [ref=e13]: Checking the connection
        - listitem [ref=e14]:
          - link "Checking the proxy and the firewall" [ref=e15] [cursor=pointer]:
            - /url: "#buttons"
    - generic [ref=e16]: ERR_CONNECTION_REFUSED
  - generic [ref=e17]:
    - button "Reload" [ref=e19] [cursor=pointer]
    - button "Details" [ref=e20] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { MyAccountPage } from '../pages/MyAccountPage';
  4  | import { DataProvider } from '../utils/dataProvider';
  5  | import { TestConfig } from '../test.config';
  6  | import { HomePage } from '../pages/HomePage';
  7  | import fs from 'fs';
  8  | 
  9  | 
  10 | //Load JSON test data logindata.json
  11 | 
  12 | const jsonPath="testdata/logindata.json";
  13 | //const jsonTestData=DataProvider.getTestDataFromJson(jsonPath);
  14 | const logindata = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
  15 | 
  16 | 
  17 | for(const {testName, email, password, expected} of logindata)
  18 | {
  19 |    test(`Login Test with JSON Data: ${testName} @datadriven`, async({page})=>{
  20 | 
  21 |         const config = new TestConfig(); // create instance
  22 |         await page.goto(config.appUrl);    // getting appURL from test.config.ts file
  23 | 
  24 |         const homePage = new HomePage(page);
  25 |         await homePage.clickMyAccount();
  26 |         await homePage.clickLogin();
  27 | 
  28 |         const loginPage = new LoginPage(page);
  29 |         await loginPage.login(email, password);
  30 | 
  31 |         if(expected.toLowerCase()==='success')
  32 |         {
  33 |             const myAccountPage=new MyAccountPage(page);
  34 |             const isLoggedIn=await myAccountPage.isMyAccountPageExists();
  35 |             expect(isLoggedIn).toBeTruthy();
  36 | 
  37 |         }
  38 |         else{
  39 |             const errorMessage=await loginPage.getloginErrorMessage();
  40 |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
  41 |             expect(errorMessage).toContain('Warning: No match');
  42 |         }
  43 |     })
  44 | 
  45 | }
  46 | 
  47 | 
  48 | 
  49 | //Load CSV test data logindata.json
  50 | 
  51 | const csvPath = "testdata/logindata.csv";
  52 | const csvTestData = DataProvider.getTestDataFromCsv(csvPath);
  53 | 
  54 | 
  55 | for(const data of csvTestData)
  56 | {
  57 |    test(`Login Test with CSV Data: ${data.testName} @datadriven`, async({page})=>{
  58 | 
  59 |         const config = new TestConfig(); // create instance
> 60 |         await page.goto(config.appUrl);    // getting appURL from test.config.ts file
     |                    ^ Error: page.goto: net::ERR_CONNECTION_REFUSED at http://localhost/opencart/upload/
  61 | 
  62 |         const homePage = new HomePage(page);
  63 |         await homePage.clickMyAccount();
  64 |         await homePage.clickLogin();
  65 | 
  66 |         const loginPage = new LoginPage(page);
  67 |         await loginPage.login(data.email, data.password);
  68 | 
  69 |         if(data.expected.toLowerCase()==='success')
  70 |         {
  71 |             const myAccountPage=new MyAccountPage(page);
  72 |             const isLoggedIn=await myAccountPage.isMyAccountPageExists();
  73 |             expect(isLoggedIn).toBeTruthy();
  74 | 
  75 |         }
  76 |         else{
  77 |             const errorMessage=await loginPage.getloginErrorMessage();
  78 |             //expect(errorMessage).toBe('Warning: No match for E-Mail Address and/or Password.');
  79 |             expect(errorMessage).toContain('Warning: No match');    
  80 |         }
  81 |     })
  82 | 
  83 | }
```