# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Naukri.spec.ts >> Login to App @sanity
- Location: tests\Naukri.spec.ts:9:5

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.updateOn.typ-14Regular')
Expected substring: "Uploaded on Jun 09, 2026"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.updateOn.typ-14Regular')

```

```yaml
- link "Naukri Logo":
  - /url: https://www.naukri.com
  - img "Naukri Logo"
- navigation:
  - list:
    - listitem:
      - link "Jobs 2":
        - /url: /mnjuser/recommendedjobs
      - list:
        - listitem:
          - link "Recommended jobs":
            - /url: /mnjuser/recommendedjobs
        - listitem:
          - link "NVites 17 New":
            - /url: /mnjuser/inbox
        - listitem:
          - link "Application status 72 Updates":
            - /url: /myapply/historypage
        - listitem:
          - link "Saved jobs":
            - /url: /mnjuser/savedjobs
    - listitem:
      - link "Companies":
        - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
      - list:
        - listitem: Explore categories
        - listitem:
          - link "Unicorn":
            - /url: https://www.naukri.com/unicorn-companies-in-india-cat102?title=Unicorns%20actively%20hiring&src=gnbCompanies_homepage_srch
        - listitem:
          - link "MNC":
            - /url: https://www.naukri.com/mnc-companies-in-india-cat101?title=MNCs%20actively%20hiring&src=gnbCompanies_homepage_srch
        - listitem:
          - link "Startup":
            - /url: https://www.naukri.com/startup-companies-in-india-cat103?title=Startups%20actively%20hiring&src=gnbCompanies_homepage_srch
        - listitem:
          - link "Product based":
            - /url: https://www.naukri.com/product-companies-in-india-cat106?title=Product%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
        - listitem:
          - link "Internet":
            - /url: https://www.naukri.com/internet-companies-in-india-cat105?title=Internet%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
      - list:
        - listitem: Explore collections
        - listitem:
          - link "Top companies":
            - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
        - listitem:
          - link "IT companies":
            - /url: https://www.naukri.com/it-companies-in-india-cat116?src=gnbCompanies_homepage_srch&title=IT%20Companies%20Hiring
        - listitem:
          - link "Fintech companies":
            - /url: https://www.naukri.com/fintech-and-payments-companies-in-india-cat108?title=Fintech%20%26%20Payments%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
        - listitem:
          - link "Sponsored companies":
            - /url: https://www.naukri.com/allcompanies?searchType=standardLogo&title=Sponsored+companies&branding=%257B%2522pagename%2522%253A%2522ni-desktop-standard-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
        - listitem:
          - link "Featured companies":
            - /url: https://www.naukri.com/allcompanies?searchType=premiumLogo&title=Featured+companies+actively+hiring&branding=%257B%2522pagename%2522%253A%2522ni-desktop-premium-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
      - list:
        - listitem:
          - text: Research companies by
          - img
          - text: Ambitionbox
        - listitem:
          - link "Interview questions":
            - /url: https://www.ambitionbox.com/interviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
        - listitem:
          - link "Company salaries":
            - /url: https://www.ambitionbox.com/salaries?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
        - listitem:
          - link "Company reviews":
            - /url: https://www.ambitionbox.com/reviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
        - listitem:
          - link "Salary Calculator":
            - /url: https://www.ambitionbox.com/salaries/take-home-salary-calculator?utm_campaign=gnb&utm_source=naukri&utm_medium=desktop
    - listitem:
      - link "Services 1":
        - /url: https://resume.naukri.com/?fftid=100001
      - list:
        - listitem: Resume writing
        - listitem:
          - link "Text resume":
            - /url: https://resume.naukri.com/resume-writing-services?fftid=101001
        - listitem:
          - link "Visual resume":
            - /url: https://resume.naukri.com/visual-resume-writing-services?fftid=101002
        - listitem:
          - link "Resume critique":
            - /url: https://resume.naukri.com/resume-critique?fftid=101006
        - listitem: Find Jobs
        - listitem:
          - link "Jobs4u":
            - /url: https://resume.naukri.com/job-alerts-on-mobile-mail?fftid=101011#jobmail
        - listitem:
          - link "Priority applicant":
            - /url: https://resume.naukri.com/priority-job-application?fftid=101019
        - listitem:
          - link "Contact us":
            - /url: https://resume.naukri.com/contact-us?fftid=101015
      - list:
        - listitem: Get recruiter's attention
        - listitem:
          - link "Resume display":
            - /url: https://resume.naukri.com/resume-display?fftid=101009
        - listitem: Interview Preparation
        - listitem:
          - link "AI Mock Interview":
            - /url: https://www.naukri.com/ai-interview-questions?fftid=NaukriGNBAIInterview
        - listitem: Monthly subscriptions
        - listitem:
          - link "Basic & premium plans":
            - /url: https://resume.naukri.com/subscription-product?fftid=101025
      - list:
        - listitem: Free resume resources
        - listitem:
          - link "Resume maker":
            - /url: https://www.naukri.com/resume-maker?utmTerm=ResumePro_Gnb&utmContent=gnbServices
        - listitem:
          - link "Resume quality score":
            - /url: https://resume.naukri.com/resume-quality-score?fftid=101003
        - listitem:
          - link "Resume samples":
            - /url: https://resume.naukri.com/resume-samples?fftid=101004
        - listitem:
          - link "Job letter samples":
            - /url: https://resume.naukri.com/job-letter-format
        - listitem: Promotional Offer
        - listitem:
          - link "FASTJOB20 20% off on services to help get more callbacks":
            - /url: https://resume.naukri.com/resume-display?fftid=notf_nauk_promo_rd
- textbox "Enter keyword / designation / companies"
- textbox "Select experience"
- text: 
- textbox "Enter location"
- text: Search jobs here
- button ""
- link "naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill":
  - /url: /naukri360
  - img "naukri360-pill"
  - img "naukri360-pill"
  - img "naukri360-pill"
  - img "naukri360-pill"
  - img "naukri360-pill"
  - img "naukri360-pill"
- list:
  - listitem:
    - link "Neo-AI Job Agent ":
      - /url: https://www.naukri.com/job-apply-agent?utmTerm=JobAgent_gnb&utmContent=gnbV1
  - listitem:
    - link "Naukri Pro ":
      - /url: https://www.naukri.com/naukri360-pro?utm_term=N360Pro_gnb&utm_content=gnbV1
  - listitem:
    - link "Resume Pro ":
      - /url: https://www.naukri.com/resume-maker?utm_term=ResumePro_gnb&utm_content=gnbV1
  - listitem:
    - link "Resume Writing Service ":
      - /url: https://www.naukri.com/resume-writing-service?utmTerm=resume_gnb&utmContent=gnbV1
  - listitem:
    - link "Interview Pro ":
      - /url: https://www.naukri.com/mock-interview-questions?skipRole=true&utmTerm=InterviewPro_gnb&utmContent=gnbV1
- img "jobagent-pill"
- text:  33
- img "naukri user profile img"
- text: "2"
- img
- img
- text: 90% Ramesh P
- emphasis: editOneTheme
- text: Profile last updated - Yesterday
- emphasis: locationOt
- text: Bengaluru, INDIA
- emphasis: experienceOneTheme
- text: 8 Years 8 Months
- emphasis: walletOneTheme
- text: ₹ 17,50,000
- emphasis: phoneOneTheme
- text: "6301806575"
- emphasis: verifiedOneTheme
- emphasis: mailOneTheme
- text: ramesh.g1131@gmail.com
- emphasis: verifiedOneTheme
- emphasis: calenderOneTheme
- text: Available to join in 15 Days or less
- emphasis: CvOneTheme
- text: Add resume ↑ 10%
- link "Add 1 missing details":
  - /url: javascript:void(0)
- list:
  - listitem: Quick links
  - listitem:
    - text: Resume
    - link "Upload":
      - /url: javascript:;
  - listitem: Resume headline
  - listitem: Key skills
  - listitem: Employment
  - listitem:
    - text: Education
    - link "Add":
      - /url: javascript:;
  - listitem: IT skills
  - listitem: Projects
  - listitem: Profile summary
  - listitem: Accomplishments
  - listitem: Career profile
  - listitem: Personal details
- img "NaukriPro"
- text: Power up with
- heading "keyword insights" [level=1]
- button "Become a Pro"
- text: 25% off ResumeAdd 10% 70% of recruiters discover candidates through their resume
- img
- text: We’ve built a resume based on your profile You can further improve its content with the help of AI View resume
- button "Choose File"
- text: Already have a resume? Upload resume
- list:
  - listitem: Ramesh_Poola_Resume_Senior_QA_Engineer.docx
- text: "Supported Formats: doc, docx, rtf, pdf, upto 2 MB Resume headline editOneTheme Senior Quality Engineer - 8.8 Years Experience | Playwright Automation | Web Automation| Immediate Joiner | Manual Testing | Web Application | Mobile Application | Azure | JIRA | API Testing | Agile | ServiceNow | Performance testing | Memory testing Key skills editOneTheme Manual Testing Black Box Testing Software Testing Mobile Testing Agile Methodology API Testing Smoke Testing Functional Testing Agile Testing Regression Testing Web Application Testing Sanity Testing Integration Testing Mobile Application Testing Employment Add employment QA Engineer editOneTheme Ecolab Digital Center Full-time Feb 2022 to Mar 2026 (4 years 2 months) ? Spearheaded manual testing initiatives following Shift Left Testing Strategy, detecting defects early and reducing production issues. ? Analysed business requirements, designed test scenarios, authored, and executed test cases within sprint timelines, adhering to QA policies and doc..."
- link "Read More":
  - /url: javascript:;
- text: Functional Test Engineer editOneTheme Photon Full-time Nov 2020 to Dec 2021 (1 year 2 months) ? Managed end-to-end testing lifecycle, including requirement analysis, scenario design, test planning, and execution. ? Ensured E2E test coverage by aligning user stories with test cases in coordination with product managers. ? Supported production deployment cycles by validating fun...
- link "Read More":
  - /url: javascript:;
- text: Projects Bath and Body Works Senior Test Engineer editOneTheme CAMSDATA Technologies India Full-time Jan 2020 to Apr 2020 (4 months) Ability to work well with a diverse group of people, as well as work independently and collaboratively in a team based work environment. Good exposure in Black Box Testing Requirement Analysis, deriving Test Scenarios and Test Cases Writing, Review and Execution. Well versed in Defect...
- link "Read More":
  - /url: javascript:;
- text: Projects Trader Joes – Quick Item lookup Test Engineer editOneTheme ZuciTech Software Solutions Full-time Oct 2019 to Jan 2020 (4 months) Ability to work well with a diverse group of people, as well as work independently and collaboratively in a team based work environment. Good exposure in Black Box Testing Requirement Analysis, deriving Test Scenarios and Test Cases Writing, Review and Execution. Well versed in Defect...
- link "Read More":
  - /url: javascript:;
- text: Projects ABC/FX NOW/NATGEO Software Test Engineer editOneTheme Sunfra Technologies Full-time May 2016 to Aug 2019 (3 years 4 months) Expertise in Software Testing in Manual, Web Applications Testing, Mobile Web Versions and Mobile Applications Testing. Exposure to all stages of SDLC and STLC. Exposure to Agile development, RTM and Scrum framework. Acquired good knowledge in Testing Practices / Processes. Was given ...
- link "Read More":
  - /url: javascript:;
- text: Projects OLX ( UAE, CEE & India) Education Add education B.Tech / B.E. Computer Science and Engineering (CSE) editOneTheme JNTU College of Engineering, Anantapur 2010-2014Full Time Class XII editOneTheme Andhra Pradesh 2010 Class X editOneTheme Andhra Pradesh 2008 Add doctorate/PhD Add masters/post-graduation New
- heading "Diversity & inclusion" [level=1]
- img
- heading "Share details to attract recruiters who value people from different backgrounds" [level=3]
- heading "Disability status" [level=4]
- heading "Do not have disability" [level=3]
- text: Add military experience Add career break ;
- contentinfo:
  - link "Naukri Logo":
    - /url: https://www.naukri.com
    - img "Naukri Logo"
  - text: Connect with us
  - link "naukri social icons":
    - /url: https://www.facebook.com/Naukri
    - img "naukri social icons"
  - link "naukri social icons":
    - /url: https://instagram.com/naukridotcom/
    - img "naukri social icons"
  - link "naukri social icons":
    - /url: https://twitter.com/naukri
    - img "naukri social icons"
  - link "naukri social icons":
    - /url: http://www.linkedin.com/company/naukri.com
    - img "naukri social icons"
  - list:
    - listitem:
      - link "About us":
        - /url: https://infoedge.in
    - listitem:
      - link "Careers":
        - /url: https://careers.infoedge.com/
    - listitem:
      - link "Employer home":
        - /url: https://www.naukri.com/recruit/login
    - listitem:
      - link "Sitemap":
        - /url: https://www.naukri.com/sitemap/sitemap.php
    - listitem:
      - link "Credits":
        - /url: https://www.naukri.com/credits
  - list:
    - listitem:
      - link "Help center":
        - /url: https://www.naukri.com/faq/job-seeker?utm_source=footer
    - listitem:
      - link "Summons/Notices":
        - /url: https://w5.naukri.com/summons-notices-form/
    - listitem:
      - link "Grievances":
        - /url: https://w5.naukri.com/grievances-form/
    - listitem:
      - link "Report issue":
        - /url: https://w5.naukri.com/fdbck/main/feedback.php?app_id=15
  - list:
    - listitem:
      - link "Privacy policy":
        - /url: https://www.naukri.com/privacypolicy
    - listitem:
      - link "Terms & conditions":
        - /url: https://www.naukri.com/termsconditions
    - listitem:
      - link "Fraud alert":
        - /url: https://www.naukri.com/imposter/report-fake-job-recruiter
    - listitem:
      - link "Trust & safety":
        - /url: https://www.naukri.com/jobsearch/trust-safety
  - text: Apply on the go Get real-time job updates on our App
  - link "naukri app download":
    - /url: https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer
    - img "naukri app download"
  - link "naukri app download":
    - /url: https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8
    - img "naukri app download"
  - link "naukri social logos":
    - /url: http://infoedge.in
    - img "naukri social logos"
  - text: All trademarks are the property of their respective owners All rights reserved © 2025 Info Edge (India) Ltd. Our businesses
  - list:
    - listitem:
      - link "nnacres":
        - /url: https://www.99acres.com/
        - img "nnacres"
    - listitem:
      - link "jeevansathi":
        - /url: https://www.jeevansathi.com/
        - img "jeevansathi"
    - listitem:
      - link "ng":
        - /url: https://www.naukrigulf.com/
        - img "ng"
    - listitem:
      - link "shiksha":
        - /url: https://www.shiksha.com/
        - img "shiksha"
    - listitem:
      - link "iimjobs":
        - /url: https://www.iimjobs.com
        - img "iimjobs"
    - listitem:
      - link "hirist":
        - /url: https://www.hirist.tech/
        - img "hirist"
    - listitem:
      - link "jobhai":
        - /url: https://www.jobhai.com
        - img "jobhai"
    - listitem:
      - link "doselect":
        - /url: https://doselect.com/
        - img "doselect"
    - listitem:
      - link "minis":
        - /url: https://www.naukri.com/minis
        - img "minis"
    - listitem:
      - link "codingninjas":
        - /url: https://www.codingninjas.com/?utm_source=naukri&utm_medium=desktop-footer
        - img "codingninjas"
```

# Test source

```ts
  1  | import { tr } from '@faker-js/faker';
  2  | import{test,expect,Locator,chromium} from '@playwright/test'
  3  | // import { error } from 'node:console';
  4  | 
  5  | // test.beforeAll("Launch App @sanity",async()=>{
  6  |     
  7  | // })
  8  | // Launch and Login to App
  9  | test("Login to App @sanity",async()=>{
  10 |     const browser=await chromium.launch({headless:false})
  11 |     const context= await browser.newContext({viewport:{height:1200,width:1200}})
  12 |     const page= await context.newPage();
  13 |     await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
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
  44 |     await page.waitForTimeout(3000)
  45 | 
  46 |     const delete_popup:Locator = page.locator("button.btn-dark-ot");
  47 |     await page.waitForTimeout(2000)
  48 |     for (let del in delete_popup)
  49 |     {
  50 |         await delete_popup.nth(2).click({force:true})
  51 |     }
  52 |     
  53 | 
  54 |     // const upload_resume:Locator = page.locator("span.dummyUploadNewCTA")
  55 |     // await upload_resume.click({force:true})
  56 | 
  57 |     const upload_cv:Locator = page.locator("input#attachCV")
  58 |     await upload_cv.click({force:true})
  59 |     await upload_cv.setInputFiles("testdata/Ramesh_Poola_Resume_Senior_QA_Engineer.docx")
  60 | 
  61 |     await page.waitForTimeout(2000);
  62 | 
> 63 |     await expect(page.locator(".updateOn.typ-14Regular")).toContainText("Uploaded on Jun 09, 2026")
     |                                                           ^ Error: expect(locator).toContainText(expected) failed
  64 | 
  65 |     // const icon:Locator = page.getByAltText("naukri user profile img")
  66 | 
  67 |     await page.waitForTimeout(2000); 
  68 |     await icon.click();
  69 | 
  70 |     await page.getByText("Logout").click()
  71 | 
  72 |     await page.waitForTimeout(2000);
  73 | 
  74 |     await browser.close()
  75 | })
  76 | 
```