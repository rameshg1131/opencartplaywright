# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Naukri.spec.ts >> Login to App
- Location: tests\Naukri.spec.ts:9:5

# Error details

```
TimeoutError: locator.click: Timeout 3000ms exceeded.
Call log:
  - waiting for locator('button.btn-dark-ot').nth(2)
    - locator resolved to <button class="btn-dark-ot">Delete</button>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    3 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e5]:
    - link "Naukri Logo" [ref=e6] [cursor=pointer]:
      - /url: https://www.naukri.com
      - img "Naukri Logo" [ref=e7]
    - navigation:
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Jobs 2" [ref=e10] [cursor=pointer]:
            - /url: /mnjuser/recommendedjobs
            - generic [ref=e11]: Jobs
            - generic [ref=e12]: "2"
          - generic:
            - list:
              - listitem:
                - link "Recommended jobs":
                  - /url: /mnjuser/recommendedjobs
                  - generic:
                    - generic:
                      - generic: Recommended jobs
              - listitem:
                - link "NVites 11 New":
                  - /url: /mnjuser/inbox
                  - generic:
                    - generic:
                      - generic: NVites
                  - generic "11 New"
              - listitem:
                - link "Application status 93 Updates":
                  - /url: /myapply/historypage
                  - generic:
                    - generic:
                      - generic: Application status
                  - generic "93 Updates"
              - listitem:
                - link "Saved jobs":
                  - /url: /mnjuser/savedjobs
                  - generic:
                    - generic:
                      - generic: Saved jobs
        - listitem [ref=e13]:
          - link "Companies" [ref=e14] [cursor=pointer]:
            - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
            - generic [ref=e15]: Companies
          - generic:
            - list:
              - listitem:
                - generic: Explore categories
              - listitem:
                - link "Unicorn":
                  - /url: https://www.naukri.com/unicorn-companies-in-india-cat102?title=Unicorns%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Unicorn
              - listitem:
                - link "MNC":
                  - /url: https://www.naukri.com/mnc-companies-in-india-cat101?title=MNCs%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: MNC
              - listitem:
                - link "Startup":
                  - /url: https://www.naukri.com/startup-companies-in-india-cat103?title=Startups%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Startup
              - listitem:
                - link "Product based":
                  - /url: https://www.naukri.com/product-companies-in-india-cat106?title=Product%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Product based
              - listitem:
                - link "Internet":
                  - /url: https://www.naukri.com/internet-companies-in-india-cat105?title=Internet%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Internet
            - list:
              - listitem:
                - generic: Explore collections
              - listitem:
                - link "Top companies":
                  - /url: https://www.naukri.com/companies-hiring-in-india?src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Top companies
              - listitem:
                - link "IT companies":
                  - /url: https://www.naukri.com/it-companies-in-india-cat116?src=gnbCompanies_homepage_srch&title=IT%20Companies%20Hiring
                  - generic:
                    - generic:
                      - generic: IT companies
              - listitem:
                - link "Fintech companies":
                  - /url: https://www.naukri.com/fintech-and-payments-companies-in-india-cat108?title=Fintech%20%26%20Payments%20companies%20actively%20hiring&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Fintech companies
              - listitem:
                - link "Sponsored companies":
                  - /url: https://www.naukri.com/allcompanies?searchType=standardLogo&title=Sponsored+companies&branding=%257B%2522pagename%2522%253A%2522ni-desktop-standard-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Sponsored companies
              - listitem:
                - link "Featured companies":
                  - /url: https://www.naukri.com/allcompanies?searchType=premiumLogo&title=Featured+companies+actively+hiring&branding=%257B%2522pagename%2522%253A%2522ni-desktop-premium-viewAll%2522%257D&pageNo=1&qcount=47&src=gnbCompanies_homepage_srch
                  - generic:
                    - generic:
                      - generic: Featured companies
            - list:
              - listitem:
                - generic:
                  - text: Research companies
                  - generic: by
                  - img
                  - generic: Ambitionbox
              - listitem:
                - link "Interview questions":
                  - /url: https://www.ambitionbox.com/interviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Interview questions
              - listitem:
                - link "Company salaries":
                  - /url: https://www.ambitionbox.com/salaries?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Company salaries
              - listitem:
                - link "Company reviews":
                  - /url: https://www.ambitionbox.com/reviews?utm_source=naukri&utm_medium=desktop&utm_campaign=gnb
                  - generic:
                    - generic:
                      - generic: Company reviews
              - listitem:
                - link "Salary Calculator":
                  - /url: https://www.ambitionbox.com/salaries/take-home-salary-calculator?utm_campaign=gnb&utm_source=naukri&utm_medium=desktop
                  - generic:
                    - generic:
                      - generic: Salary Calculator
        - listitem [ref=e16]:
          - link "Services 1" [ref=e17] [cursor=pointer]:
            - /url: https://resume.naukri.com/?fftid=100001
            - generic [ref=e18]: Services
            - generic [ref=e19]: "1"
          - generic:
            - list:
              - listitem:
                - generic: Resume writing
              - listitem:
                - link "Text resume":
                  - /url: https://resume.naukri.com/resume-writing-services?fftid=101001
                  - generic:
                    - generic:
                      - generic: Text resume
              - listitem:
                - link "Visual resume":
                  - /url: https://resume.naukri.com/visual-resume-writing-services?fftid=101002
                  - generic:
                    - generic:
                      - generic: Visual resume
              - listitem:
                - link "Resume critique":
                  - /url: https://resume.naukri.com/resume-critique?fftid=101006
                  - generic:
                    - generic:
                      - generic: Resume critique
              - listitem:
                - generic: Find Jobs
              - listitem:
                - link "Jobs4u":
                  - /url: https://resume.naukri.com/job-alerts-on-mobile-mail?fftid=101011#jobmail
                  - generic:
                    - generic:
                      - generic: Jobs4u
              - listitem:
                - link "Priority applicant":
                  - /url: https://resume.naukri.com/priority-job-application?fftid=101019
                  - generic:
                    - generic:
                      - generic: Priority applicant
              - listitem:
                - link "Contact us":
                  - /url: https://resume.naukri.com/contact-us?fftid=101015
                  - generic:
                    - generic:
                      - generic: Contact us
            - list:
              - listitem:
                - generic: Get recruiter's attention
              - listitem:
                - link "Resume display":
                  - /url: https://resume.naukri.com/resume-display?fftid=101009
                  - generic:
                    - generic:
                      - generic: Resume display
              - listitem:
                - generic: Interview Preparation
              - listitem:
                - link "AI Mock Interview":
                  - /url: https://www.naukri.com/ai-interview-questions?fftid=NaukriGNBAIInterview
                  - generic:
                    - generic:
                      - generic: AI Mock Interview
              - listitem:
                - generic: Monthly subscriptions
              - listitem:
                - link "Basic & premium plans":
                  - /url: https://resume.naukri.com/subscription-product?fftid=101025
                  - generic:
                    - generic:
                      - generic: Basic & premium plans
            - list:
              - listitem:
                - generic: Free resume resources
              - listitem:
                - link "Resume maker":
                  - /url: https://www.naukri.com/resume-maker?utmTerm=ResumePro_Gnb&utmContent=gnbServices
                  - generic:
                    - generic:
                      - generic: Resume maker
              - listitem:
                - link "Resume quality score":
                  - /url: https://resume.naukri.com/resume-quality-score?fftid=101003
                  - generic:
                    - generic:
                      - generic: Resume quality score
              - listitem:
                - link "Resume samples":
                  - /url: https://resume.naukri.com/resume-samples?fftid=101004
                  - generic:
                    - generic:
                      - generic: Resume samples
              - listitem:
                - link "Job letter samples":
                  - /url: https://resume.naukri.com/job-letter-format
                  - generic:
                    - generic:
                      - generic: Job letter samples
              - listitem:
                - generic: Promotional Offer
              - listitem:
                - link "FASTJOB20 20% off on services to help get more callbacks":
                  - /url: https://resume.naukri.com/resume-display?fftid=notf_nauk_promo_rd
                  - generic:
                    - generic:
                      - generic: FASTJOB20 20% off on services to help get more callbacks
    - generic [ref=e20] [cursor=pointer]:
      - generic:
        - generic:
          - generic:
            - generic:
              - generic:
                - textbox "Enter keyword / designation / companies"
        - generic:
          - generic:
            - generic:
              - textbox "Select experience"
              - generic: 
        - generic:
          - generic:
            - generic:
              - generic:
                - textbox "Enter location"
      - generic [ref=e21]: Search jobs here
      - button "" [ref=e22]:
        - generic [ref=e23]: 
    - generic [ref=e24]:
      - link "naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill naukri360-pill" [ref=e25] [cursor=pointer]:
        - /url: /naukri360
        - generic [ref=e26]:
          - img "naukri360-pill" [ref=e28]
          - img "naukri360-pill" [ref=e30]
          - img "naukri360-pill" [ref=e32]
          - img "naukri360-pill" [ref=e34]
          - img "naukri360-pill" [ref=e36]
          - img "naukri360-pill" [ref=e38]
      - generic:
        - list:
          - listitem:
            - link "Neo-AI Job Agent ":
              - /url: https://www.naukri.com/job-apply-agent?utmTerm=JobAgent_gnb&utmContent=gnbV1
              - generic:
                - generic:
                  - generic: Neo-AI Job Agent
                - generic: 
          - listitem:
            - link "Naukri Pro ":
              - /url: https://www.naukri.com/naukri360-pro?utm_term=N360Pro_gnb&utm_content=gnbV1
              - generic:
                - generic:
                  - generic: Naukri Pro
                - generic: 
          - listitem:
            - link "Resume Pro ":
              - /url: https://www.naukri.com/resume-maker?utm_term=ResumePro_gnb&utm_content=gnbV1
              - generic:
                - generic:
                  - generic: Resume Pro
                - generic: 
          - listitem:
            - link "Resume Writing Service ":
              - /url: https://www.naukri.com/resume-writing-service?utmTerm=resume_gnb&utmContent=gnbV1
              - generic:
                - generic:
                  - generic: Resume Writing Service
                - generic: 
          - listitem:
            - link "Interview Pro ":
              - /url: https://www.naukri.com/mock-interview-questions?skipRole=true&utmTerm=InterviewPro_gnb&utmContent=gnbV1
              - generic:
                - generic:
                  - generic: Interview Pro
                - generic: 
    - img "jobagent-pill" [ref=e41] [cursor=pointer]
    - generic [ref=e43] [cursor=pointer]:
      - generic [ref=e44]: 
      - generic [ref=e45]: "36"
    - generic [ref=e52] [cursor=pointer]:
      - img "naukri user profile img" [ref=e53]
      - generic [ref=e54]: "2"
  - generic [ref=e60]:
    - generic [ref=e63]:
      - generic [ref=e66]:
        - generic [ref=e68]:
          - generic [ref=e69] [cursor=pointer]:
            - img [ref=e71]
            - generic [ref=e74]:
              - img [ref=e75]
              - generic [ref=e76]: 90%
          - generic [ref=e77]:
            - generic [ref=e79]:
              - generic [ref=e80]:
                - generic [ref=e81]: Ramesh P
                - emphasis [ref=e82] [cursor=pointer]: editOneTheme
              - generic [ref=e85]: Profile last updated - Today
            - generic [ref=e86]:
              - generic [ref=e87]:
                - generic [ref=e89]:
                  - emphasis [ref=e90]: locationOt
                  - generic "Bengaluru, INDIA" [ref=e91]
                - generic [ref=e93]:
                  - emphasis [ref=e94]: experienceOneTheme
                  - generic "8 Year(s) 8 Month(s)" [ref=e96]:
                    - generic [ref=e97]: 8 Years
                    - generic [ref=e98]: 8 Months
                - generic [ref=e101]:
                  - emphasis [ref=e102]: walletOneTheme
                  - generic "₹ Seventeen lakh fifty thousand" [ref=e103]:
                    - generic [ref=e104]: ₹
                    - text: 17,50,000
              - generic [ref=e105]:
                - generic [ref=e107]:
                  - generic [ref=e108]:
                    - emphasis [ref=e109]: phoneOneTheme
                    - generic "6301806575" [ref=e110]
                  - emphasis [ref=e112]: verifiedOneTheme
                - generic [ref=e114]:
                  - generic [ref=e115]:
                    - emphasis [ref=e116]: mailOneTheme
                    - generic "ramesh.g1131@gmail.com" [ref=e117]
                  - emphasis [ref=e120]: verifiedOneTheme
                - generic [ref=e122]:
                  - emphasis [ref=e123]: calenderOneTheme
                  - generic "Available to join in 15 Days or less" [ref=e124]
        - generic [ref=e126] [cursor=pointer]:
          - generic [ref=e128]:
            - emphasis [ref=e130]: CvOneTheme
            - generic [ref=e131]: Add resume
            - generic [ref=e132]: ↑ 10%
          - link "Add 1 missing details" [ref=e135]:
            - /url: javascript:void(0)
      - generic [ref=e136]:
        - list [ref=e140]:
          - listitem [ref=e141]: Quick links
          - listitem [ref=e142]:
            - text: Resume
            - link "Upload" [ref=e143] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e144]: Resume headline
          - listitem [ref=e145]: Key skills
          - listitem [ref=e146]: Employment
          - listitem [ref=e147]:
            - text: Education
            - link "Add" [ref=e148] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e149]: IT skills
          - listitem [ref=e150]: Projects
          - listitem [ref=e151]: Profile summary
          - listitem [ref=e152]: Accomplishments
          - listitem [ref=e153]: Career profile
          - listitem [ref=e154]: Personal details
        - generic [ref=e155]:
          - generic [ref=e162] [cursor=pointer]:
            - generic [ref=e163]:
              - img "NaukriPro" [ref=e165]
              - generic [ref=e166]:
                - generic [ref=e167]: Power up with
                - heading "up to 2x recruiter actions" [level=1] [ref=e170]
            - generic [ref=e171]:
              - button "Become a Pro":
                - generic: Become a Pro
              - generic [ref=e173]: 25% off
          - generic [ref=e174]:
            - generic [ref=e178]:
              - generic [ref=e179]: GreenTick
              - paragraph [ref=e180]: Success
              - paragraph [ref=e181]: Attached Resume has been successfully deleted.
            - generic [ref=e182]:
              - generic [ref=e183]:
                - generic [ref=e185]: ResumeAdd 10%
                - generic [ref=e187]: 70% of recruiters discover candidates through their resume
              - generic [ref=e190]:
                - generic [ref=e196]:
                  - img [ref=e199]
                  - generic [ref=e200]:
                    - generic [ref=e201]:
                      - generic [ref=e203]: We’ve built a resume based on your profile
                      - generic [ref=e204]: You can further improve its content with the help of AI
                    - generic [ref=e206] [cursor=pointer]: View resume
                - generic [ref=e208]:
                  - generic [ref=e209]:
                    - generic [ref=e211]:
                      - button "Choose File" [ref=e212] [cursor=pointer]
                      - generic [ref=e214] [cursor=pointer]: Already have a resume? Upload resume
                    - list
                  - generic [ref=e215]: "Supported Formats: doc, docx, rtf, pdf, upto 2 MB"
          - generic [ref=e218]:
            - generic [ref=e219]:
              - text: Resume headline
              - generic [ref=e220] [cursor=pointer]: editOneTheme
            - generic [ref=e223]: Senior Quality Engineer - 8.8 Years Experience | Playwright Automation | Web Automation| Immediate Joiner | Manual Testing | Web Application | Mobile Application | Azure | JIRA | API Testing | Agile | ServiceNow | Performance testing | Memory testing
          - generic [ref=e226]:
            - generic [ref=e227]:
              - text: Key skills
              - generic [ref=e228] [cursor=pointer]: editOneTheme
            - generic [ref=e230]:
              - generic "Manual Testing" [ref=e231]
              - generic "Black Box Testing" [ref=e232]
              - generic "Software Testing" [ref=e233]
              - generic "Mobile Testing" [ref=e234]
              - generic "Agile Methodology" [ref=e235]
              - generic "API Testing" [ref=e236]
              - generic "Smoke Testing" [ref=e237]
              - generic "Functional Testing" [ref=e238]
              - generic "Agile Testing" [ref=e239]
              - generic "Regression Testing" [ref=e240]
              - generic "Web Application Testing" [ref=e241]
              - generic "Sanity Testing" [ref=e242]
              - generic "Integration Testing" [ref=e243]
              - generic "Mobile Application Testing" [ref=e244]
          - generic [ref=e248]:
            - generic [ref=e249]:
              - text: Employment
              - generic [ref=e250]: Add employment
            - generic [ref=e251]:
              - generic [ref=e252]:
                - generic [ref=e253]:
                  - generic "QA Engineer" [ref=e254]
                  - generic [ref=e255] [cursor=pointer]: editOneTheme
                - generic "Ecolab Digital Center" [ref=e257]
                - generic [ref=e258]:
                  - generic [ref=e259]: Full-time
                  - generic [ref=e261]: Feb 2022 to Mar 2026 (4 years 2 months)
                - generic [ref=e264]:
                  - text: "? Spearheaded manual testing initiatives following Shift Left Testing Strategy, detecting defects early and reducing production issues. ? Analysed business requirements, designed test scenarios, authored, and executed test cases within sprint timelines, adhering to QA policies and doc..."
                  - link "Read More" [ref=e265] [cursor=pointer]:
                    - /url: javascript:;
              - generic [ref=e266]:
                - generic [ref=e267]:
                  - generic "Functional Test Engineer" [ref=e268]
                  - generic [ref=e269] [cursor=pointer]: editOneTheme
                - generic "Photon" [ref=e271]
                - generic [ref=e272]:
                  - generic [ref=e273]: Full-time
                  - generic [ref=e275]: Nov 2020 to Dec 2021 (1 year 2 months)
                - generic [ref=e278]:
                  - text: "? Managed end-to-end testing lifecycle, including requirement analysis, scenario design, test planning, and execution. ? Ensured E2E test coverage by aligning user stories with test cases in coordination with product managers. ? Supported production deployment cycles by validating fun..."
                  - link "Read More" [ref=e279] [cursor=pointer]:
                    - /url: javascript:;
                - generic [ref=e280]:
                  - text: Projects
                  - generic "Bath and Body Works" [ref=e282]
              - generic [ref=e283]:
                - generic [ref=e284]:
                  - generic "Senior Test Engineer" [ref=e285]
                  - generic [ref=e286] [cursor=pointer]: editOneTheme
                - generic "CAMSDATA Technologies India" [ref=e288]
                - generic [ref=e289]:
                  - generic [ref=e290]: Full-time
                  - generic [ref=e292]: Jan 2020 to Apr 2020 (4 months)
                - generic [ref=e295]:
                  - text: Ability to work well with a diverse group of people, as well as work independently and collaboratively in a team based work environment. Good exposure in Black Box Testing Requirement Analysis, deriving Test Scenarios and Test Cases Writing, Review and Execution. Well versed in Defect...
                  - link "Read More" [ref=e296] [cursor=pointer]:
                    - /url: javascript:;
                - generic [ref=e297]:
                  - text: Projects
                  - generic "Trader Joes – Quick Item lookup" [ref=e299]
              - generic [ref=e300]:
                - generic [ref=e301]:
                  - generic "Test Engineer" [ref=e302]
                  - generic [ref=e303] [cursor=pointer]: editOneTheme
                - generic "ZuciTech Software Solutions" [ref=e305]
                - generic [ref=e306]:
                  - generic [ref=e307]: Full-time
                  - generic [ref=e309]: Oct 2019 to Jan 2020 (4 months)
                - generic [ref=e312]:
                  - text: Ability to work well with a diverse group of people, as well as work independently and collaboratively in a team based work environment. Good exposure in Black Box Testing Requirement Analysis, deriving Test Scenarios and Test Cases Writing, Review and Execution. Well versed in Defect...
                  - link "Read More" [ref=e313] [cursor=pointer]:
                    - /url: javascript:;
                - generic [ref=e314]:
                  - text: Projects
                  - generic "ABC/FX NOW/NATGEO" [ref=e316]
              - generic [ref=e317]:
                - generic [ref=e318]:
                  - generic "Software Test Engineer" [ref=e319]
                  - generic [ref=e320] [cursor=pointer]: editOneTheme
                - generic "Sunfra Technologies" [ref=e322]
                - generic [ref=e323]:
                  - generic [ref=e324]: Full-time
                  - generic [ref=e326]: May 2016 to Aug 2019 (3 years 4 months)
                - generic [ref=e329]:
                  - text: Expertise in Software Testing in Manual, Web Applications Testing, Mobile Web Versions and Mobile Applications Testing. Exposure to all stages of SDLC and STLC. Exposure to Agile development, RTM and Scrum framework. Acquired good knowledge in Testing Practices / Processes. Was given ...
                  - link "Read More" [ref=e330] [cursor=pointer]:
                    - /url: javascript:;
                - generic [ref=e331]:
                  - text: Projects
                  - generic "OLX ( UAE, CEE & India)" [ref=e333]
          - generic [ref=e337]:
            - generic [ref=e338]:
              - text: Education
              - generic [ref=e339]: Add education
            - generic [ref=e340]:
              - generic [ref=e341]:
                - generic [ref=e342]:
                  - generic [ref=e343]:
                    - generic "B.Tech / B.E." [ref=e344]
                    - generic "Computer Science and Engineering (CSE)" [ref=e345]
                    - generic [ref=e346] [cursor=pointer]: editOneTheme
                  - generic [ref=e347]: JNTU College of Engineering, Anantapur
                  - generic [ref=e348]:
                    - text: 2010-2014
                    - generic [ref=e349]: Full Time
                - generic [ref=e351]:
                  - generic:
                    - generic [ref=e352]:
                      - generic [ref=e353]: Class XII
                      - generic [ref=e354] [cursor=pointer]: editOneTheme
                    - generic [ref=e355]: Andhra Pradesh
                    - generic [ref=e356]: "2010"
                - generic [ref=e357]:
                  - generic:
                    - generic [ref=e358]:
                      - generic [ref=e359]: Class X
                      - generic [ref=e360] [cursor=pointer]: editOneTheme
                    - generic [ref=e361]: Andhra Pradesh
                    - generic [ref=e362]: "2008"
              - generic [ref=e363] [cursor=pointer]: Add doctorate/PhD
              - generic [ref=e364] [cursor=pointer]: Add masters/post-graduation
          - generic [ref=e376]:
            - generic [ref=e377]: New
            - generic [ref=e378]:
              - heading "Diversity & inclusion" [level=1] [ref=e380]
              - img [ref=e383] [cursor=pointer]
            - heading "Share details to attract recruiters who value people from different backgrounds" [level=3] [ref=e385]
            - heading "Disability status" [level=4] [ref=e387]
            - heading "Do not have disability" [level=3] [ref=e389]
            - generic [ref=e391] [cursor=pointer]: Add military experience
            - generic [ref=e393] [cursor=pointer]: Add career break
    - text: ;
  - contentinfo [ref=e396]:
    - generic [ref=e399]:
      - generic [ref=e400]:
        - link "Naukri Logo" [ref=e401] [cursor=pointer]:
          - /url: https://www.naukri.com
          - img "Naukri Logo" [ref=e402]
        - generic [ref=e403]:
          - generic "Connect with us" [ref=e404]
          - link "naukri social icons" [ref=e405] [cursor=pointer]:
            - /url: https://www.facebook.com/Naukri
            - img "naukri social icons" [ref=e406]
          - link "naukri social icons" [ref=e407] [cursor=pointer]:
            - /url: https://instagram.com/naukridotcom/
            - img "naukri social icons" [ref=e408]
          - link "naukri social icons" [ref=e409] [cursor=pointer]:
            - /url: https://twitter.com/naukri
            - img "naukri social icons" [ref=e410]
          - link "naukri social icons" [ref=e411] [cursor=pointer]:
            - /url: http://www.linkedin.com/company/naukri.com
            - img "naukri social icons" [ref=e412]
      - list [ref=e414]:
        - listitem [ref=e415]:
          - link "About us" [ref=e416] [cursor=pointer]:
            - /url: https://infoedge.in
        - listitem [ref=e417]:
          - link "Careers" [ref=e418] [cursor=pointer]:
            - /url: https://careers.infoedge.com/
        - listitem [ref=e419]:
          - link "Employer home" [ref=e420] [cursor=pointer]:
            - /url: https://www.naukri.com/recruit/login
        - listitem [ref=e421]:
          - link "Sitemap" [ref=e422] [cursor=pointer]:
            - /url: https://www.naukri.com/sitemap/sitemap.php
        - listitem [ref=e423]:
          - link "Credits" [ref=e424] [cursor=pointer]:
            - /url: https://www.naukri.com/credits
      - list [ref=e426]:
        - listitem [ref=e427]:
          - link "Help center" [ref=e428] [cursor=pointer]:
            - /url: https://www.naukri.com/faq/job-seeker?utm_source=footer
        - listitem [ref=e429]:
          - link "Summons/Notices" [ref=e430] [cursor=pointer]:
            - /url: https://w5.naukri.com/summons-notices-form/
        - listitem [ref=e431]:
          - link "Grievances" [ref=e432] [cursor=pointer]:
            - /url: https://w5.naukri.com/grievances-form/
        - listitem [ref=e433]:
          - link "Report issue" [ref=e434] [cursor=pointer]:
            - /url: https://w5.naukri.com/fdbck/main/feedback.php?app_id=15
      - list [ref=e436]:
        - listitem [ref=e437]:
          - link "Privacy policy" [ref=e438] [cursor=pointer]:
            - /url: https://www.naukri.com/privacypolicy
        - listitem [ref=e439]:
          - link "Terms & conditions" [ref=e440] [cursor=pointer]:
            - /url: https://www.naukri.com/termsconditions
        - listitem [ref=e441]:
          - link "Fraud alert" [ref=e442] [cursor=pointer]:
            - /url: https://www.naukri.com/imposter/report-fake-job-recruiter
        - listitem [ref=e443]:
          - link "Trust & safety" [ref=e444] [cursor=pointer]:
            - /url: https://www.naukri.com/jobsearch/trust-safety
      - generic [ref=e445]:
        - generic [ref=e446]: Apply on the go
        - generic [ref=e447]: Get real-time job updates on our App
        - generic [ref=e448]:
          - link "naukri app download" [ref=e449] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer
            - img "naukri app download" [ref=e450]
          - link "naukri app download" [ref=e451] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8
            - img "naukri app download" [ref=e452]
    - generic [ref=e454]:
      - generic [ref=e455]:
        - link "naukri social logos" [ref=e457] [cursor=pointer]:
          - /url: http://infoedge.in
          - img "naukri social logos" [ref=e458]
        - generic [ref=e459]:
          - generic [ref=e460]: All trademarks are the property of their respective owners
          - generic [ref=e461]: All rights reserved © 2026 Info Edge (India) Ltd.
      - generic [ref=e462]: Our businesses
      - list [ref=e465]:
        - listitem [ref=e466]:
          - link "nnacres" [ref=e468] [cursor=pointer]:
            - /url: https://www.99acres.com/
            - img "nnacres" [ref=e469]
        - listitem [ref=e470]:
          - link "jeevansathi" [ref=e472] [cursor=pointer]:
            - /url: https://www.jeevansathi.com/
            - img "jeevansathi" [ref=e473]
        - listitem [ref=e474]:
          - link "ng" [ref=e476] [cursor=pointer]:
            - /url: https://www.naukrigulf.com/
            - img "ng" [ref=e477]
        - listitem [ref=e478]:
          - link "shiksha" [ref=e480] [cursor=pointer]:
            - /url: https://www.shiksha.com/
            - img "shiksha" [ref=e481]
        - listitem [ref=e482]:
          - link "iimjobs" [ref=e484] [cursor=pointer]:
            - /url: https://www.iimjobs.com
            - img "iimjobs" [ref=e485]
        - listitem [ref=e486]:
          - link "hirist" [ref=e488] [cursor=pointer]:
            - /url: https://www.hirist.tech/
            - img "hirist" [ref=e489]
        - listitem [ref=e490]:
          - link "jobhai" [ref=e492] [cursor=pointer]:
            - /url: https://www.jobhai.com
            - img "jobhai" [ref=e493]
        - listitem [ref=e494]:
          - link "doselect" [ref=e496] [cursor=pointer]:
            - /url: https://doselect.com/
            - img "doselect" [ref=e497]
        - listitem [ref=e498]:
          - link "minis" [ref=e500] [cursor=pointer]:
            - /url: https://www.naukri.com/minis
            - img "minis" [ref=e501]
        - listitem [ref=e502]:
          - link "codingninjas" [ref=e504] [cursor=pointer]:
            - /url: https://www.codingninjas.com/?utm_source=naukri&utm_medium=desktop-footer
            - img "codingninjas" [ref=e505]
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
  9  | test("Login to App",{tag:['@sanity','@smoke']},async()=>{
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
> 50 |         await delete_popup.nth(2).click({timeout:3000})
     |                                   ^ TimeoutError: locator.click: Timeout 3000ms exceeded.
  51 |     }
  52 |     
  53 | 
  54 |     // const upload_resume:Locator = page.locator("span.dummyUploadNewCTA")
  55 |     // await upload_resume.click({force:true})
  56 | 
  57 |     const upload_cv:Locator = page.locator("input#attachCV")
  58 |     //await upload_cv.click({force:true})
  59 |     await upload_cv.setInputFiles("testdata/Poola_Ramesh_Senior_QA_Engineer.pdf")
  60 | 
  61 |     await page.waitForTimeout(2000);
  62 | 
  63 |     await expect(page.locator(".updateOn.typ-14Regular")).toContainText("Uploaded on Jun 20, 2026")
  64 | 
  65 |     // const icon:Locator = page.getByAltText("naukri user profile img")
  66 | 
  67 |     await page.waitForTimeout(3000); 
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