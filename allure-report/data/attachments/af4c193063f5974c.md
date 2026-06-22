# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Naukri.spec.ts >> Login to App @sanity
- Location: tests\Naukri.spec.ts:9:5

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
  3  | import { error } from 'node:console';
  4  | 
  5  | // test.beforeAll("Launch App @sanity",async()=>{
  6  |     
  7  | // })
  8  | // Launch and Login to App
  9  | test("Login to App @sanity",async({page})=>{
  10 |     // const browser=chromium.launch()
  11 |     // const context= (await browser).newContext({viewport:{height:1200,width:1200}})
  12 |     // const page= (await context).newPage();
> 13 |     await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
     |                ^ Error: page.goto: Target page, context or browser has been closed
  14 |     const username:Locator = page.getByPlaceholder("Enter Email ID / Username")
  15 |     await username.fill("ramesh.g1131@gmail.com")
  16 |     const password:Locator =  page.getByPlaceholder("Enter Password")
  17 |     await password.fill("Kush@1807")
  18 |     const showhide:Locator = page.locator(".showhide.blue-text")
  19 |     await showhide.click({force:true});
  20 |     const loginbutton= page.locator("button:has-text('Login')")
  21 |     for (const login in loginbutton)
  22 |     {
  23 |         try
  24 |         {
  25 |             await loginbutton.nth(0).click({force:true})
  26 |             break;
  27 |         }
  28 |         catch(error){
  29 |             console.log("No such element found",error)
  30 |         }
  31 |     }
  32 |     await page.waitForTimeout(3000)
  33 |     
  34 |     /* Clicking on the profile icon */
  35 | 
  36 |     const icon:Locator = page.getByAltText("naukri user profile img")
  37 |     await icon.click();
  38 |     
  39 |     const view_update:Locator=page.locator("a:has-text('View & Update Profile')")
  40 |     await view_update.click()
  41 | 
  42 |     const delete_resume:Locator= page.locator("span.icon-wrap i[title='Click here to delete your resume']")
  43 |     await delete_resume.click({force:true})
  44 |     
  45 | 
  46 |     const delete_popup:Locator = page.locator("button.btn-dark-ot");
  47 |     for (let del in delete_popup)
  48 |     {
  49 |         await delete_popup.nth(2).click({force:true})
  50 |     }
  51 |     await page.waitForTimeout(3000);
  52 | 
  53 |     const upload_resume:Locator = page.locator("span.dummyUploadNewCTA")
  54 |     await upload_resume.click({force:true})
  55 | })
  56 | 
```