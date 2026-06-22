# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Testing
- Location: tests\example.spec.ts:3:5

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "www.facebook.com", waiting until "load"

```

# Test source

```ts
  1  | import {test,expect,chromium} from '@playwright/test'
  2  | 
  3  | test("Testing", async()=>{
  4  |     const browser= await chromium.launch({headless:false})
  5  |     const context= await browser.newContext({viewport:{height:1200,width:1200}})
  6  |     const page= await context.newPage()
> 7  |     await page.goto("www.facebook.com")
     |                ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  8  | })
  9  | 
  10 | /* import { test, expect, chromium } from '@playwright/test';
  11 | 
  12 | test('Testing', async () => {
  13 |   const browser = await chromium.launch({ headless: false });
  14 |   const context = await browser.newContext({ viewport: { width: 1200, height: 1200 } });
  15 |   const page = await context.newPage();
  16 | 
  17 |   await page.goto('https://www.facebook.com');
  18 |   await expect(page).toHaveTitle(/Facebook/);
  19 | 
  20 |   await browser.close();
  21 | }) */;
```