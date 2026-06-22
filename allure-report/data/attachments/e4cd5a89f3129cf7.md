# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Testing 123
- Location: tests\example.spec.ts:3:5

# Error details

```
Error: locator.check: Error: Not a checkbox or radio button
Call log:
  - waiting for locator('//i[@class=\'ico resman-icon resman-icon-check-box\']')
    - locator resolved to <i class="ico resman-icon resman-icon-check-box"></i>

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "Go to Naukri homepage" [ref=e6] [cursor=pointer]:
        - /url: https://www.naukri.com
        - img "Naukri logo" [ref=e7]
      - generic [ref=e8]:
        - text: Already Registered?
        - link "Login" [ref=e9] [cursor=pointer]:
          - /url: https://www.naukri.com/nlogin/login
        - text: here
  - generic [ref=e10]:
    - generic [ref=e13]:
      - heading "On registering, you can" [level=2] [ref=e14]
      - list [ref=e15]:
        - listitem [ref=e16]:
          - generic [ref=e17]: 
          - paragraph [ref=e18]: Build your profile and let recruiters find you
        - listitem [ref=e19]:
          - generic [ref=e20]: 
          - paragraph [ref=e21]: Get job postings delivered right to your email
        - listitem [ref=e22]:
          - generic [ref=e23]: 
          - paragraph [ref=e24]: Find a job and grow your career
    - generic [ref=e25]:
      - generic [ref=e27]:
        - generic [ref=e28]:
          - heading "Create your Naukri profile" [level=1] [ref=e29]
          - paragraph [ref=e30]: Search & apply to jobs from India's No.1 Job Site
          - form "Create your Naukri profile" [ref=e31]:
            - generic [ref=e34]:
              - generic [ref=e35]: Full name*
              - generic [ref=e36]:
                - generic [ref=e37]: 
                - textbox "Full name" [ref=e38]:
                  - /placeholder: What is your name?
                  - text: ramesh
            - generic [ref=e39]:
              - generic [ref=e41]:
                - generic [ref=e42]: Email ID*
                - textbox "Email ID" [ref=e44]:
                  - /placeholder: Tell us your Email ID
                  - text: ramesh.g1131@gmail.com
                - generic [ref=e47]: An account with this email address already exists. Login
              - generic [ref=e48]:
                - generic [ref=e49]:
                  - generic [ref=e50]: Password*
                  - textbox "Password" [ref=e52]:
                    - /placeholder: (Minimum 6 characters)
                    - text: Ksuh@1807
                  - generic [ref=e55]:
                    - text: This helps your account stay protected
                    - generic [ref=e56]: 
                - button "Show password" [ref=e57] [cursor=pointer]:
                  - generic [ref=e58]: 
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]: Mobile number*
                  - generic [ref=e62]:
                    - generic [ref=e63]: 
                    - textbox "Mobile number (+91 India)" [ref=e64]:
                      - /placeholder: Enter your mobile number
                      - text: "9538546795"
                  - generic [ref=e65]: Recruiters will contact you on this number
                - generic [ref=e66]: "+91"
              - generic [ref=e67]:
                - generic [ref=e69]: Work status*
                - radiogroup "Work status" [ref=e70]:
                  - radio "I'm experienced. I have work experience (excluding internships)" [checked] [active] [ref=e71] [cursor=pointer]:
                    - generic [ref=e73]:
                      - heading [level=2] [ref=e74]: I'm experienced
                      - paragraph [ref=e75]: I have work experience (excluding internships)
                  - radio "I'm a fresher. I am a student/ Haven't worked after graduation" [ref=e76] [cursor=pointer]:
                    - generic [ref=e78]:
                      - heading [level=2] [ref=e79]: I'm a fresher
                      - paragraph [ref=e80]: I am a student/ Haven't worked after graduation
              - generic [ref=e81]:
                - generic [ref=e82]: Resume
                - generic [ref=e83]:
                  - button "Upload Resume" [ref=e85] [cursor=pointer]
                  - paragraph [ref=e87]: "DOC, DOCx, PDF, RTF | Max: 2 MB"
                - generic [ref=e88]: Recruiters prefer candidates who have a resume on their profile
                - button "Choose File"
              - link " Send me important updates & promotions via SMS, email, andWhatsApp LogoWhatsApp" [ref=e90] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e91]: 
                - generic [ref=e92]:
                  - text: Send me important updates & promotions via SMS, email, and
                  - img "WhatsApp Logo" [ref=e93]
                  - text: WhatsApp
              - generic [ref=e94]:
                - paragraph [ref=e95]:
                  - text: By clicking Register, you agree to the
                  - link "Terms and Conditions" [ref=e96] [cursor=pointer]:
                    - /url: https://www.naukri.com/termsconditions
                  - text: "&"
                  - link "Privacy Policy" [ref=e97] [cursor=pointer]:
                    - /url: https://www.naukri.com/privacypolicy
                  - text: of Naukri.com
                - button "Register now" [ref=e98] [cursor=pointer]
        - generic [ref=e99]:
          - generic [ref=e100]: Or
          - generic [ref=e101]:
            - text: Continue with
            - button "Google" [ref=e102] [cursor=pointer]:
              - generic [ref=e104]: Google
      - contentinfo [ref=e105]:
        - generic [ref=e106]:
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "About Us" [ref=e109] [cursor=pointer]:
                - /url: //www.infoedge.in/
            - listitem [ref=e110]:
              - link "Contact Us" [ref=e111] [cursor=pointer]:
                - /url: https://www.naukri.com/mynaukri/mn_contactus.php
            - listitem [ref=e112]:
              - link "FAQs" [ref=e113] [cursor=pointer]:
                - /url: //my.naukri.com/faq/faq.php
            - listitem [ref=e114]:
              - link "Terms and Conditions" [ref=e115] [cursor=pointer]:
                - /url: https://www.naukri.com/termsconditions
            - listitem [ref=e116]:
              - link "Report a Problem" [ref=e117] [cursor=pointer]:
                - /url: //w5.naukri.com/fdbck/main/feedback.php
            - listitem [ref=e118]:
              - link "Privacy Policy" [ref=e119] [cursor=pointer]:
                - /url: https://www.naukri.com/privacypolicy
          - paragraph [ref=e120]: All rights reserved © 2026 Info Edge India Ltd.
```

# Test source

```ts
  1  | import {test,expect,chromium,Locator} from '@playwright/test'
  2  | 
  3  | test("Testing 123", async()=>{
  4  |     const browser= await chromium.launch({headless:false})
  5  |     const context= await browser.newContext({viewport:{height:1300,width:1500}})
  6  |     const page= await context.newPage()
  7  |     // await page.goto("https://www.facebook.com")
  8  |     await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
  9  |     await page.waitForTimeout(3000)
  10 |     const title= await page.title()
  11 |     await expect(page).toHaveTitle(title)
  12 |     // await page.getByAltText("Naukri Logo").screenshot()
  13 |     // let head;
  14 |     // const headings:Locator= page.locator("strong.hdn")
  15 |     // for (const heading in headings)
  16 |     // {
  17 |       
  18 |     //   let head= await headings.nth(0).innerText()
  19 | 
  20 |     // }
  21 |     // console.log(head)
  22 | 
  23 |     // await page.locator("img[alt='Naukri Logo']").click()
  24 |     // 
  25 | 
  26 |     // await page.getByText("Services").click()
  27 | 
  28 |     // await page.locator("a:has-text('Register for Free')").click()
  29 |     await page.getByRole('link',{name:'Register for Free'}).click()
  30 |     
  31 |     await page.getByLabel('Full name').fill("ramesh")
  32 | 
  33 |     await page.keyboard.press('Tab')
  34 | 
  35 |     await page.getByLabel("Email ID").fill('ramesh.g1131@gmail.com')
  36 |     
  37 |      await page.keyboard.press('Tab')
  38 | 
  39 |     await page.getByLabel("Password").fill('Ksuh@1807')
  40 | 
  41 |     await page.keyboard.press('Tab')
  42 | 
  43 |     // await page.getByLabel("Mobile number").fill('9538546795')
  44 |     await page.getByPlaceholder("Enter your mobile number").fill('9538546795')
  45 | 
  46 |     // await page.locator("h2:has-text('/I'm experienced'/)").click()
  47 |     await page.locator('h2', { hasText: /I'm experienced/ }).click();
  48 | 
  49 |    
  50 | 
  51 |     await page.locator("//i[@class='ico resman-icon resman-icon-check-box']").scrollIntoViewIfNeeded()
> 52 |     await page.locator("//i[@class='ico resman-icon resman-icon-check-box']").check()
     |                                                                               ^ Error: locator.check: Error: Not a checkbox or radio button
  53 | 
  54 |      await page.waitForTimeout(5000)
  55 | 
  56 | })
  57 | 
  58 | //import { test, expect, chromium } from '@playwright/test';
  59 | 
  60 | /* test('Testing 1234', async () => {
  61 |   const browser = await chromium.launch({ headless: false });
  62 |   const context = await browser.newContext({ viewport: { width: 1250, height: 1200 } });
  63 |   const page = await context.newPage();
  64 | 
  65 |   await page.goto('https://www.facebook.com');
  66 |   await expect(page).toHaveTitle(/Facebook/);
  67 | 
  68 |   await browser.close();
  69 | }) */
```