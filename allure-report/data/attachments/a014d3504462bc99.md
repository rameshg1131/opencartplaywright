# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example1.spec.ts >> Dailogs test
- Location: tests\example1.spec.ts:83:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator:  locator('#demo')
Expected: "Hello ''! How are you today?"
Received: "User cancelled the prompt."
Timeout:  5000ms

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('#demo')
    14 × locator resolved to <p id="demo">User cancelled the prompt.</p>
       - unexpected value "User cancelled the prompt."

```

```yaml
- paragraph: User cancelled the prompt.
```

# Test source

```ts
  37  |         await page.locator("#country").selectOption(dropdownlist[i])
  38  |     }
  39  |   }
  40  |   await page.waitForTimeout(3000)
  41  | }) */
  42  | 
  43  | /* test("Dropdowns test",async()=>{
  44  | 
  45  |   const browser= await chromium.launch({headless:false})
  46  |   const context= await browser.newContext()
  47  |   const page = await context.newPage()
  48  | 
  49  | //   await page.goto("https://testautomationpractice.blogspot.com/")
  50  | 
  51  | //   await page.evaluate(()=>{
  52  | //     window.scrollTo(0,500)
  53  | //   })
  54  |   
  55  | 
  56  | // await page.locator("#colors").selectOption(['Red','Green',"Blue"]) 
  57  | //   await page.locator("#colors").selectOption(['red','green',"blue"])
  58  |     // await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'}])  
  59  |     // await page.locator("#colors").selectOption([{index:2},{index:3}])
  60  | 
  61  | // await page.locator("#colors").selectOption([{value:'red'},{label:'Blue'},{index:2},{index:3}])
  62  | 
  63  | // const options= await page.locator("#animals options").allTextContents()
  64  | // const original = [...options]
  65  | // const sorted = [...options].sort()
  66  | // console.log(sorted)
  67  | 
  68  | await page.goto("https://www.youtube.com/")
  69  | // await page.locator("input.ytSearchboxComponentInput.yt-searchbox-input.title").fill("Python")
  70  | await page.getByPlaceholder("Search").fill("python")
  71  | // const suggestions:Locator = page.locator("span[role=button]")
  72  | const suggestions:Locator = page.locator("div.ytSuggestionComponentSuggestion>div>div>div>span")
  73  | 
  74  | 
  75  | console.log(await suggestions.allTextContents())
  76  | console.log(await suggestions.allInnerTexts())
  77  | 
  78  | await page.locator("//*[@id='i0']/div[5]").click()
  79  | 
  80  | await page.waitForTimeout(3000)
  81  | }) */
  82  | 
  83  | test("Dailogs test",async()=>{
  84  |   const browser = await chromium.launch({headless:false})
  85  |   const context = await browser.newContext()
  86  |   const page = await context.newPage()
  87  | 
  88  |   await page.goto("https://testautomationpractice.blogspot.com/")
  89  | 
  90  |   await page.evaluate(()=>{
  91  |     window.scrollTo(0,300)
  92  |   })
  93  | 
  94  |   await page.waitForTimeout(2000)
  95  | 
  96  |  /*  //alert dialog
  97  |    page.on('dialog',async(dailog)=>{
  98  |     console.log(dailog.message())
  99  |     // console.log(dailog.type())
  100 |     expect(dailog.message()).toContain("I am an alert box!")
  101 |     await dailog.accept()
  102 | 
  103 |   })
  104 | 
  105 |   await page.getByText("Simple Alert").click() */
  106 |  
  107 | /* // confirmalert 
  108 |   page.on('dialog',async(dialog)=>{
  109 |     console.log(dialog.type(), dialog.message())
  110 |     // console.log(dialog.message())
  111 |     expect(dialog.message()).toContain("Press a button!")
  112 |     // await dialog.accept()
  113 |     await dialog.dismiss()
  114 |   })
  115 | 
  116 | 
  117 |   await page.getByText("Confirmation Alert").click()
  118 |   // await expect(page.locator("#demo")).toHaveText("You pressed OK!")
  119 |   await page.waitForTimeout(2000)
  120 |   await expect(page.locator("#demo")).toHaveText("You pressed Cancel!") */
  121 | 
  122 |   //Prompt alert
  123 | 
  124 |   // await page.getByText("Prompt Alert").click()
  125 | 
  126 |   page.on('dialog',async(dialog)=>{
  127 |     console.log(dialog.type(), dialog.message())
  128 |     expect(dialog.message()).toContain("Please enter your name:")
  129 |     expect(dialog.defaultValue()).toContain("Harry Potter")
  130 |     // await dialog.accept('Ramesh')
  131 |     await dialog.accept('')
  132 |   })
  133 | 
  134 |   await page.getByRole('button',{name:'Prompt Alert'}).click()
  135 |   await page.waitForTimeout(3000)
  136 |   // await expect(page.locator("#demo")).toHaveText("Hello Ramesh! How are you today?")
> 137 |   await expect(page.locator("#demo")).toHaveText("Hello ''! How are you today?")
      |                                       ^ Error: expect(locator).toHaveText(expected) failed
  138 |  
  139 | })
```