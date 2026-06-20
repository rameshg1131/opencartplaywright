import {test,expect,chromium,Locator} from '@playwright/test'

test("Checkboxes test",async()=>{

  const browser= await chromium.launch({headless:false})
  const context= await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://testautomationpractice.blogspot.com/")

  await page.evaluate(()=>{
    window.scrollTo(0,500)
  })
  
  // await page.getByRole('checkbox',{name:'Sunday'}).check()
  // await page.waitForTimeout(3000)

  const checkboxes:Locator = page.locator("input[class=form-check-input][type=checkbox]")
  const checkbox:Locator[] = await checkboxes.all()

  for(let i=0; i<checkbox.length; i++)
  {

    console.log(await checkboxes.nth(i).textContent())

    if (i%2==0)
    {
      await checkboxes.nth(i).check()
      
    }
  }
  await page.waitForTimeout(5000)
  /* let i=0;
  while(i<checkbox.length)
  {
    if (await checkboxes.nth(i).isChecked())
    {
      await checkboxes.nth(i).uncheck()
    }
    i=i+1
  }
  await page.waitForTimeout(5000) */

})

 /* test("Checkboxes",async()=>{
  const browser= await chromium.launch({headless:false})
  const context= await browser.newContext()
  const page= await context.newPage()
  await page.goto("https://www.facebook.com/")
  await page.locator("span:has-text('Create new account')")
  await page.getByText("Create new account").click()
  await page.waitForTimeout(3000)
  await page.locator("//label[text()='First name']").fill("ramesh",{force:true})
  await page.locator("//label[text()='Surname']").fill("meena",{force:true})
  await page.waitForTimeout(3000)
 /*  await page.evaluate(()=>{
    window.scrollTo(0,500)
  }) */

/* test("Radio buttons",async()=>{
  const browser= await chromium.launch({headless:false})
  const context= await browser.newContext()
  const page= await context.newPage()
  await page.goto("https://testautomationpractice.blogspot.com/")
  await page.evaluate(()=>{
    window.scrollTo(0,500)
  })
  await page.locator("#male").check()
  await page.waitForTimeout(3000)
  await page.locator("#female").check()
  await page.waitForTimeout(3000)

}) */

/* test("Testing 123", async()=>{
    const browser= await chromium.launch({headless:false})
    const context= await browser.newContext()
    const page= await context.newPage()
    // await page.goto("https://www.facebook.com")
    await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
    await page.waitForTimeout(3000)
    const title= await page.title()
    await expect(page).toHaveTitle(title)
    // await page.getByAltText("Naukri Logo").screenshot()
    // let head;
    // const headings:Locator= page.locator("strong.hdn")
    // for (const heading in headings)
    // {
      
    //   let head= await headings.nth(0).innerText()

    // }
    // console.log(head)

    // await page.locator("img[alt='Naukri Logo']").click()
    // 

    // await page.getByText("Services").click()

    // await page.locator("a:has-text('Register for Free')").click()
    await page.getByRole('link',{name:'Register for Free'}).click()
    
    await page.getByLabel('Full name').fill("ramesh")

    await page.keyboard.press('Tab')

    await page.getByLabel("Email ID").fill('ramesh.g1131@gmail.com')
    
     await page.keyboard.press('Tab')

    await page.getByLabel("Password").fill('1234')

    await page.keyboard.press('Tab')

    // await page.getByLabel("Mobile number").fill('9538546795')
    await page.getByPlaceholder("Enter your mobile number").fill('9538546795')

    
    await page.evaluate(()=>{
      window.scrollTo(0,document.body.scrollHeight)
    })

    // await page.locator("h2:has-text('/I'm experienced'/)").click()
    await page.locator('h2', { hasText: /I'm experienced/ }).click();

   
    await page.locator("//i[@class='ico resman-icon resman-icon-check-box']").click()

    // await page.locator("button:has-text('Register now')").click()

    await page.waitForTimeout(5000)

}) */

//import { test, expect, chromium } from '@playwright/test';

/* test('Testing 1234', async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({ viewport: { width: 1250, height: 1200 } });
  const page = await context.newPage();

  await page.goto('https://www.facebook.com');
  await expect(page).toHaveTitle(/Facebook/);

  await browser.close();
}) */