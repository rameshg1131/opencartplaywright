# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Testing 123
- Location: tests\example.spec.ts:3:5

# Error details

```
Error: locator.click: Unexpected token "m" while parsing css selector "h2:has-text('I/'m experienced'/)". Did you mean to CSS.escape it?
Call log:
  - waiting for h2:has-text('I/'m experienced'/)

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
                - generic [ref=e45]: We'll send relevant jobs and updates to this email
              - generic [ref=e46]:
                - generic [ref=e47]:
                  - generic [ref=e48]: Password*
                  - textbox "Password" [ref=e50]:
                    - /placeholder: (Minimum 6 characters)
                    - text: Ksuh@1807
                  - generic [ref=e53]:
                    - text: This helps your account stay protected
                    - generic [ref=e54]: 
                - button "Show password" [ref=e55] [cursor=pointer]:
                  - generic [ref=e56]: 
              - generic [ref=e57]:
                - generic [ref=e58]:
                  - generic [ref=e59]: Mobile number*
                  - textbox "Mobile number (+91 India)" [active] [ref=e61]:
                    - /placeholder: Enter your mobile number
                    - text: "9538546795"
                  - generic [ref=e62]: Recruiters will contact you on this number
                - generic [ref=e63]: "+91"
              - generic [ref=e64]:
                - generic [ref=e66]: Work status*
                - radiogroup "Work status" [ref=e67]:
                  - radio "I'm experienced. I have work experience (excluding internships)" [ref=e68] [cursor=pointer]:
                    - generic [ref=e70]:
                      - heading [level=2] [ref=e71]: I'm experienced
                      - paragraph [ref=e72]: I have work experience (excluding internships)
                  - radio "I'm a fresher. I am a student/ Haven't worked after graduation" [ref=e73] [cursor=pointer]:
                    - generic [ref=e75]:
                      - heading [level=2] [ref=e76]: I'm a fresher
                      - paragraph [ref=e77]: I am a student/ Haven't worked after graduation
              - link " Send me important updates & promotions via SMS, email, andWhatsApp LogoWhatsApp" [ref=e79] [cursor=pointer]:
                - /url: javascript:void(0)
                - generic [ref=e80]: 
                - generic [ref=e81]:
                  - text: Send me important updates & promotions via SMS, email, and
                  - img "WhatsApp Logo" [ref=e82]
                  - text: WhatsApp
              - generic [ref=e83]:
                - paragraph [ref=e84]:
                  - text: By clicking Register, you agree to the
                  - link "Terms and Conditions" [ref=e85] [cursor=pointer]:
                    - /url: https://www.naukri.com/termsconditions
                  - text: "&"
                  - link "Privacy Policy" [ref=e86] [cursor=pointer]:
                    - /url: https://www.naukri.com/privacypolicy
                  - text: of Naukri.com
                - button "Register now" [disabled] [ref=e87] [cursor=pointer]
        - generic [ref=e88]:
          - generic [ref=e89]: Or
          - generic [ref=e90]:
            - text: Continue with
            - button "Google" [ref=e91] [cursor=pointer]:
              - generic [ref=e93]: Google
      - contentinfo [ref=e94]:
        - generic [ref=e95]:
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "About Us" [ref=e98] [cursor=pointer]:
                - /url: //www.infoedge.in/
            - listitem [ref=e99]:
              - link "Contact Us" [ref=e100] [cursor=pointer]:
                - /url: https://www.naukri.com/mynaukri/mn_contactus.php
            - listitem [ref=e101]:
              - link "FAQs" [ref=e102] [cursor=pointer]:
                - /url: //my.naukri.com/faq/faq.php
            - listitem [ref=e103]:
              - link "Terms and Conditions" [ref=e104] [cursor=pointer]:
                - /url: https://www.naukri.com/termsconditions
            - listitem [ref=e105]:
              - link "Report a Problem" [ref=e106] [cursor=pointer]:
                - /url: //w5.naukri.com/fdbck/main/feedback.php
            - listitem [ref=e107]:
              - link "Privacy Policy" [ref=e108] [cursor=pointer]:
                - /url: https://www.naukri.com/privacypolicy
          - paragraph [ref=e109]: All rights reserved © 2026 Info Edge India Ltd.
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
  36 |     await page.waitForTimeout(2000)
  37 |      await page.keyboard.press('Tab')
  38 | 
  39 |     await page.getByLabel("Password").fill('Ksuh@1807')
  40 | 
  41 |     await page.keyboard.press('Tab')
  42 | 
  43 |     await page.getByLabel("Mobile number").fill('9538546795')
  44 | 
> 45 |     await page.locator("h2:has-text('I/'m experienced'/)").click()
     |                                                            ^ Error: locator.click: Unexpected token "m" while parsing css selector "h2:has-text('I/'m experienced'/)". Did you mean to CSS.escape it?
  46 | 
  47 | })
  48 | 
  49 | //import { test, expect, chromium } from '@playwright/test';
  50 | 
  51 | /* test('Testing 1234', async () => {
  52 |   const browser = await chromium.launch({ headless: false });
  53 |   const context = await browser.newContext({ viewport: { width: 1250, height: 1200 } });
  54 |   const page = await context.newPage();
  55 | 
  56 |   await page.goto('https://www.facebook.com');
  57 |   await expect(page).toHaveTitle(/Facebook/);
  58 | 
  59 |   await browser.close();
  60 | }) */
```