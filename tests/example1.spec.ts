import { fa, tr } from '@faker-js/faker'
import {test,expect,chromium,Locator} from '@playwright/test'

/* test("Dropdowns test",async()=>{

  const browser= await chromium.launch({headless:false})
  const context= await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://testautomationpractice.blogspot.com/")

  await page.evaluate(()=>{
    window.scrollTo(0,500)
  })
  //await page.waitForTimeout(3000)

//   await page.getByLabel("Country:").selectOption('India')
//   await page.getByLabel("Country:").selectOption({value:'brazil'})
//   await page.getByLabel("Country:").selectOption({label:'United Kingdom'})
//   await page.getByLabel("Country:").selectOption({index:5})
  
//   await page.waitForTimeout(3000)

  const dropdowns:Locator = page.locator("select[class=form-control][id=country] option")

  const dropdownsarray:string[] = await dropdowns.allInnerTexts()

  const dropdownlist = dropdownsarray.map(item=>item.trim())

  for (let i=0; i<dropdownlist.length; i++)
  {
    if(dropdownlist[i]=='Japan')
    {
        // await page.locator("select[class=form-control][id=country] option").selectOption('Japan')
        
        console.log((dropdownlist[i]))
        await page.locator("#country").selectOption(dropdownlist[i])
    }
  }
  await page.waitForTimeout(3000)
}) */

/* test("Dropdowns test",async()=>{

  const browser= await chromium.launch({headless:false})
  const context= await browser.newContext()
  const page = await context.newPage()

//   await page.goto("https://testautomationpractice.blogspot.com/")

//   await page.evaluate(()=>{
//     window.scrollTo(0,500)
//   })
  

// await page.locator("#colors").selectOption(['Red','Green',"Blue"]) 
//   await page.locator("#colors").selectOption(['red','green',"blue"])
    // await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'}])  
    // await page.locator("#colors").selectOption([{index:2},{index:3}])

// await page.locator("#colors").selectOption([{value:'red'},{label:'Blue'},{index:2},{index:3}])

// const options= await page.locator("#animals options").allTextContents()
// const original = [...options]
// const sorted = [...options].sort()
// console.log(sorted)

await page.goto("https://www.youtube.com/")
// await page.locator("input.ytSearchboxComponentInput.yt-searchbox-input.title").fill("Python")
await page.getByPlaceholder("Search").fill("python")
// const suggestions:Locator = page.locator("span[role=button]")
const suggestions:Locator = page.locator("div.ytSuggestionComponentSuggestion>div>div>div>span")


console.log(await suggestions.allTextContents())
console.log(await suggestions.allInnerTexts())

await page.locator("//*[@id='i0']/div[5]").click()

await page.waitForTimeout(3000)
}) */

/* test("Dailogs test",async()=>{
  const browser = await chromium.launch({headless:false})
  const context = await browser.newContext()
  const page = await context.newPage()

  // await page.goto("https://testautomationpractice.blogspot.com/")

  await page.goto("https://www.letskodeit.com/practice")

  // await page.evaluate(()=>{
  //   window.scrollTo(0,300)
  // })

 // await page.waitForTimeout(2000)

 /*  //alert dialog
   page.on('dialog',async(dailog)=>{
    console.log(dailog.message())
    // console.log(dailog.type())
    expect(dailog.message()).toContain("I am an alert box!")
    await dailog.accept()

  })

  await page.getByText("Simple Alert").click() */
 
/* // confirmalert 
  page.on('dialog',async(dialog)=>{
    console.log(dialog.type(), dialog.message())
    // console.log(dialog.message())
    expect(dialog.message()).toContain("Press a button!")
    // await dialog.accept()
    await dialog.dismiss()
  })


  await page.getByText("Confirmation Alert").click()
  // await expect(page.locator("#demo")).toHaveText("You pressed OK!")
  await page.waitForTimeout(2000)
  await expect(page.locator("#demo")).toHaveText("You pressed Cancel!") */

  //Prompt alert

  // await page.getByText("Prompt Alert").click()

  /* page.on('dialog',async(dialog)=>{
    console.log(dialog.type(), dialog.message())
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    // await dialog.accept('Ramesh')
    // await dialog.accept(' ')
    await dialog.dismiss()
  })

  await page.getByRole('button',{name:'Prompt Alert'}).click()
  await page.waitForTimeout(3000)
  // await expect(page.locator("#demo")).toHaveText("Hello Ramesh! How are you today?")
  await expect(page.locator("#demo")).toHaveText("User cancelled the prompt.") */


 /*  page.evaluate(()=>{
    window.scrollTo(0,500)
  })
  console.log(page.frames().length)

  // const frame= page.frameLocator("#courses-iframe")

  // const frame= page.frame({name:"iframe-name"})

  const frame=page.frame({url:"https://www.letskodeit.com/courses"})
  
  await frame?.locator("select[name=categories]").selectOption({index:1})

  await page.waitForTimeout(2000)


}) */ 

//test.describe.configure({mode:'parallel',retries:2,timeout:10000})
test("Tabs test",async()=>{
  const browser = await chromium.launch({headless:false})
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.goto("https://testautomationpractice.blogspot.com/")

  // const tab = await Promise.all([context.waitForEvent('page'), page.getByRole('button',{name:'New Tab'}).click()])
  
  // const pages= context.pages()

   // await pages[1].getByRole('link',{name:'Online Training'}).click()

  // await pages[1].getByText("TypeScript For Playwright & Cypress").click()

  page.evaluate(()=>{
    window.scrollTo(0,400)
  })
  await page.waitForTimeout(2000)
   const popups= await Promise.all([page.waitForEvent('popup'), page.getByText("Popup Windows").click()])
  
  console.log(context.pages().length)

  const popup = context.pages()
  
  //  console.log( tabs[0].url())
  // console.log( tabs[1].url())
  // console.log(popup[1].url())

  for( let pop of popup)
  {
    console.log(await pop.title())
  }

  await page.waitForTimeout(3000)


})