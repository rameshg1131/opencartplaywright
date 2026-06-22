# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Naukri.spec.ts >> Login to App @sanity
- Location: tests\Naukri.spec.ts:8:5

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile", waiting until "load"

```

# Test source

```ts
  1  | import { tr } from '@faker-js/faker';
  2  | import{test,expect,Locator,chromium} from '@playwright/test'
  3  | 
  4  | // test.beforeAll("Launch App @sanity",async()=>{
  5  |     
  6  | // })
  7  | 
  8  | test("Login to App @sanity",async({page})=>{
  9  |     // const browser=chromium.launch()
  10 |     // const context= (await browser).newContext({viewport:{height:1200,width:1200}})
  11 |     // const page= (await context).newPage();
> 12 |     await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
     |                ^ Error: page.goto: Target page, context or browser has been closed
  13 |     const username:Locator = page.getByPlaceholder("Enter Email ID / Username")
  14 |     await username.fill("ramesh.g1131@gmail.com")
  15 |     const password:Locator =  page.getByPlaceholder("Enter Password")
  16 |     await password.fill("Kush@1807")
  17 |     const showhide:Locator = page.locator(".showhide.blue-text")
  18 |     await showhide.click({force:true});
  19 | })
```