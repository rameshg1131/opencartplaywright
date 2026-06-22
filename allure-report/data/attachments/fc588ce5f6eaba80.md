# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> Checkboxes
- Location: tests\example.spec.ts:3:6

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('label:has-text(\'First name\')') resolved to 2 elements:
    1) <label>…</label> aka locator('label').filter({ hasText: 'NameFirst nameSurname' })
    2) <label for="_R_1cl2p4jikacppb6amH1_" class="x10d0gm4 x1fhayk4 x3cjxhe x1al4vs7 x12scifz xmper1u xdg88n9 xzwoauc x193iq5w x6ikm8r x10wlt62 x47corl x10l6tqk xlyipyv x1d7kzl9 xii2z7h x11xpdln x1r7x56h xuxw1ft xp5op4 x1y44fgy xdzva22 xs8nzd4 x1fzehxr xha3pab">First name</label> aka getByText('First name')

Call log:
  - waiting for locator('label:has-text(\'First name\')')

```

# Page snapshot

```yaml
- generic [ref=e12]:
  - generic [ref=e13]:
    - generic [ref=e24]:
      - button "Back" [ref=e27] [cursor=pointer]:
        - img [ref=e28]
      - main [ref=e34]:
        - generic [ref=e37]:
          - img "Meta logo" [ref=e39]
          - generic [ref=e47]:
            - generic [ref=e49]: Get started on Facebook
            - generic [ref=e52]: Create an account to connect with friends, family and communities of people who share your interests.
          - generic [ref=e56]:
            - generic [ref=e62]: Name
            - generic [ref=e65]:
              - generic [ref=e69]:
                - textbox "Name First name Surname" [ref=e70]
                - generic: First name
              - generic [ref=e74]:
                - textbox "Surname" [ref=e75]
                - generic: Surname
          - generic [ref=e79]:
            - generic [ref=e83]:
              - generic [ref=e85]: Date of birth
              - button "Click for more information about entering date of birth" [ref=e87] [cursor=pointer]:
                - img [ref=e88]
            - group [ref=e96]:
              - combobox "Select day" [ref=e100] [cursor=pointer]:
                - generic [ref=e101]:
                  - generic: Day
                  - img [ref=e103]
              - combobox "Select month" [ref=e108] [cursor=pointer]:
                - generic [ref=e109]:
                  - generic: Month
                  - img [ref=e111]
              - combobox "Select year" [ref=e116] [cursor=pointer]:
                - generic [ref=e117]:
                  - generic: Year
                  - img [ref=e119]
          - generic [ref=e127]:
            - generic [ref=e131]:
              - generic [ref=e133]: Gender
              - button "Click for more information about selecting gender" [ref=e135] [cursor=pointer]:
                - img [ref=e136]
            - combobox [ref=e143] [cursor=pointer]:
              - generic [ref=e144]:
                - generic: Select your gender
                - img [ref=e146]
          - generic [ref=e150]:
            - generic [ref=e154]:
              - generic [ref=e160]: Mobile number or email address
              - generic [ref=e165]:
                - textbox "Mobile number or email address Mobile number or email address" [ref=e166]
                - generic: Mobile number or email address
            - generic [ref=e168]:
              - text: You may receive notifications from us.
              - link "Learn why we ask for your contact information" [ref=e169] [cursor=pointer]:
                - /url: https://www.facebook.com/help/297947214257999/?helpref=uf_share
          - generic [ref=e173]:
            - generic [ref=e179]: Password
            - generic [ref=e184]:
              - textbox "Password Password" [ref=e185]
              - generic: Password
          - generic [ref=e191]:
            - generic [ref=e194]:
              - text: People who use our service may have uploaded your contact information to Facebook.
              - link "Learn more" [ref=e195] [cursor=pointer]:
                - /url: https://www.facebook.com/help/637205020878504
              - text: .
            - generic [ref=e198]:
              - text: By tapping Submit, you agree to create an account and to Facebook's
              - link "Terms" [ref=e199] [cursor=pointer]:
                - /url: https://www.facebook.com/terms.php
              - text: ","
              - link "Privacy Policy" [ref=e200] [cursor=pointer]:
                - /url: https://www.facebook.com/policy.php
              - text: and
              - link "Cookies Policy" [ref=e201] [cursor=pointer]:
                - /url: https://www.facebook.com/help/cookies
              - text: .
            - generic [ref=e204]:
              - text: The
              - link "Privacy Policy" [ref=e205] [cursor=pointer]:
                - /url: https://www.facebook.com/policy.php
              - text: describes the ways we can use the information we collect when you create an account. For example, we use this information to provide, personalise and improve our products, including ads.
          - generic [ref=e208]:
            - button "Submit" [ref=e211] [cursor=pointer]:
              - generic [ref=e214]: Submit
            - button "I already have an account" [ref=e217] [cursor=pointer]:
              - generic [ref=e220]: I already have an account
    - main [ref=e227]:
      - generic [ref=e232]:
        - generic [ref=e234]:
          - generic [ref=e236]: English (UK)
          - link "ಕನ್ನಡ" [ref=e239] [cursor=pointer]:
            - /url: "#"
          - link "اردو" [ref=e242] [cursor=pointer]:
            - /url: "#"
          - link "मराठी" [ref=e245] [cursor=pointer]:
            - /url: "#"
          - link "తెలుగు" [ref=e248] [cursor=pointer]:
            - /url: "#"
          - link "हिन्दी" [ref=e251] [cursor=pointer]:
            - /url: "#"
          - link "தமிழ்" [ref=e254] [cursor=pointer]:
            - /url: "#"
          - link "More languages…" [ref=e257] [cursor=pointer]:
            - /url: "#"
        - generic [ref=e260]:
          - link "Sign up" [ref=e263] [cursor=pointer]:
            - /url: https://www.facebook.com/reg/
          - link "Log in" [ref=e266] [cursor=pointer]:
            - /url: https://www.facebook.com/login/
          - link "Messenger" [ref=e269] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fmessenger.com%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Facebook Lite" [ref=e272] [cursor=pointer]:
            - /url: https://www.facebook.com/lite/
          - link "Video" [ref=e275] [cursor=pointer]:
            - /url: https://www.facebook.com/watch/
          - link "Meta Pay" [ref=e278] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fabout.meta.com%2Ftechnologies%2Fmeta-pay&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Meta Store" [ref=e281] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Meta Quest" [ref=e284] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fquest%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Ray-Ban Meta" [ref=e287] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.com%2Fsmart-glasses%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Meta AI" [ref=e290] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.meta.ai%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Instagram" [ref=e293] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Threads" [ref=e296] [cursor=pointer]:
            - /url: https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.threads.com%2F&h=AUC2EnNe5Zf4ypLdflBAAZ_2SJPlrduzFfnjdp6iQ_iuDc3cxCIFOEj3WBqbYxSv8WLCZx4foJMNJ2RC_YWtLPY2-zJLst98UwkTq0nxfLW_GrbrbPJacfJgDPN-8xraadcJ0ufwYpEQCvMMR0ly8A
          - link "Privacy Policy" [ref=e299] [cursor=pointer]:
            - /url: https://www.facebook.com/privacy/policy/?entry_point=facebook_page_footer
          - link "Privacy Centre" [ref=e302] [cursor=pointer]:
            - /url: https://www.facebook.com/privacy/center/?entry_point=facebook_page_footer
          - link "About" [ref=e305] [cursor=pointer]:
            - /url: https://www.facebook.com/about/
          - link "Create ad" [ref=e308] [cursor=pointer]:
            - /url: https://www.facebook.com/ad_campaign/landing.php?placement=pflo&campaign_id=402047449186&nav_source=unknown&extra_1=auto
          - link "Create Page" [ref=e311] [cursor=pointer]:
            - /url: https://www.facebook.com/pages/create/?ref_type=site_footer
          - link "Developers" [ref=e314] [cursor=pointer]:
            - /url: https://developers.facebook.com/?ref=pf
          - link "Careers" [ref=e317] [cursor=pointer]:
            - /url: https://www.facebook.com/careers/?ref=pf
          - link "Cookies" [ref=e320] [cursor=pointer]:
            - /url: https://www.facebook.com/policies/cookies/
          - link "AdChoices" [ref=e323] [cursor=pointer]:
            - /url: https://www.facebook.com/help/568137493302217
          - link "Terms" [ref=e326] [cursor=pointer]:
            - /url: https://www.facebook.com/policies?ref=pf
          - link "Help" [ref=e329] [cursor=pointer]:
            - /url: https://www.facebook.com/help/?ref=pf
          - link "Contact uploading and non-users" [ref=e332] [cursor=pointer]:
            - /url: https://www.facebook.com/help/637205020878504
        - generic [ref=e335]: Meta © 2026
  - generic:
    - img
```

# Test source

```ts
  1   | import {test,expect,chromium,Locator} from '@playwright/test'
  2   | 
  3   |  test("Checkboxes",async()=>{
  4   |   const browser= await chromium.launch({headless:false})
  5   |   const context= await browser.newContext()
  6   |   const page= await context.newPage()
  7   |   await page.goto("https://www.facebook.com/")
  8   |   await page.locator("span:has-text('Create new account')")
  9   |   await page.getByText("Create new account").click()
  10  |   await page.waitForTimeout(3000)
> 11  |   await page.locator("label:has-text('First name')").fill("ramesh",{force:true})
      |                                                      ^ Error: locator.fill: Error: strict mode violation: locator('label:has-text(\'First name\')') resolved to 2 elements:
  12  |   await page.locator("label:has-text('Surname')").fill("meena",{force:true})
  13  |   await page.waitForTimeout(3000)
  14  |  /*  await page.evaluate(()=>{
  15  |     window.scrollTo(0,500)
  16  |   }) */
  17  | 
  18  | })
  19  | 
  20  | /* test("Radio buttons",async()=>{
  21  |   const browser= await chromium.launch({headless:false})
  22  |   const context= await browser.newContext()
  23  |   const page= await context.newPage()
  24  |   await page.goto("https://testautomationpractice.blogspot.com/")
  25  |   await page.evaluate(()=>{
  26  |     window.scrollTo(0,500)
  27  |   })
  28  |   await page.locator("#male").check()
  29  |   await page.waitForTimeout(3000)
  30  |   await page.locator("#female").check()
  31  |   await page.waitForTimeout(3000)
  32  | 
  33  | }) */
  34  | 
  35  | /* test("Testing 123", async()=>{
  36  |     const browser= await chromium.launch({headless:false})
  37  |     const context= await browser.newContext()
  38  |     const page= await context.newPage()
  39  |     // await page.goto("https://www.facebook.com")
  40  |     await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
  41  |     await page.waitForTimeout(3000)
  42  |     const title= await page.title()
  43  |     await expect(page).toHaveTitle(title)
  44  |     // await page.getByAltText("Naukri Logo").screenshot()
  45  |     // let head;
  46  |     // const headings:Locator= page.locator("strong.hdn")
  47  |     // for (const heading in headings)
  48  |     // {
  49  |       
  50  |     //   let head= await headings.nth(0).innerText()
  51  | 
  52  |     // }
  53  |     // console.log(head)
  54  | 
  55  |     // await page.locator("img[alt='Naukri Logo']").click()
  56  |     // 
  57  | 
  58  |     // await page.getByText("Services").click()
  59  | 
  60  |     // await page.locator("a:has-text('Register for Free')").click()
  61  |     await page.getByRole('link',{name:'Register for Free'}).click()
  62  |     
  63  |     await page.getByLabel('Full name').fill("ramesh")
  64  | 
  65  |     await page.keyboard.press('Tab')
  66  | 
  67  |     await page.getByLabel("Email ID").fill('ramesh.g1131@gmail.com')
  68  |     
  69  |      await page.keyboard.press('Tab')
  70  | 
  71  |     await page.getByLabel("Password").fill('1234')
  72  | 
  73  |     await page.keyboard.press('Tab')
  74  | 
  75  |     // await page.getByLabel("Mobile number").fill('9538546795')
  76  |     await page.getByPlaceholder("Enter your mobile number").fill('9538546795')
  77  | 
  78  |     
  79  |     await page.evaluate(()=>{
  80  |       window.scrollTo(0,document.body.scrollHeight)
  81  |     })
  82  | 
  83  |     // await page.locator("h2:has-text('/I'm experienced'/)").click()
  84  |     await page.locator('h2', { hasText: /I'm experienced/ }).click();
  85  | 
  86  |    
  87  |     await page.locator("//i[@class='ico resman-icon resman-icon-check-box']").click()
  88  | 
  89  |     // await page.locator("button:has-text('Register now')").click()
  90  | 
  91  |     await page.waitForTimeout(5000)
  92  | 
  93  | }) */
  94  | 
  95  | //import { test, expect, chromium } from '@playwright/test';
  96  | 
  97  | /* test('Testing 1234', async () => {
  98  |   const browser = await chromium.launch({ headless: false });
  99  |   const context = await browser.newContext({ viewport: { width: 1250, height: 1200 } });
  100 |   const page = await context.newPage();
  101 | 
  102 |   await page.goto('https://www.facebook.com');
  103 |   await expect(page).toHaveTitle(/Facebook/);
  104 | 
  105 |   await browser.close();
  106 | }) */
```