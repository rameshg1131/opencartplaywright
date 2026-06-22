# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Naukri1.spec.ts >> Login to App
- Location: tests\Naukri1.spec.ts:9:5

# Error details

```
Error: locator.click: Element is not visible
Call log:
  - waiting for locator('button.btn-dark-ot').nth(2)
    - locator resolved to <button class="btn-dark-ot">Delete</button>
  - attempting click action
    - scrolling into view if needed

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
                - link "NVites 1 New":
                  - /url: /mnjuser/inbox
                  - generic:
                    - generic:
                      - generic: NVites
                  - generic "1 New"
              - listitem:
                - link "Application status 16 Updates":
                  - /url: /myapply/historypage
                  - generic:
                    - generic:
                      - generic: Application status
                  - generic "16 Updates"
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
      - generic [ref=e45]: "10"
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
                - generic [ref=e81]: Ramesh Poola
                - emphasis [ref=e82] [cursor=pointer]: editOneTheme
              - generic [ref=e85]: Profile last updated - Today
            - generic [ref=e86]:
              - generic [ref=e87]:
                - generic [ref=e89]:
                  - emphasis [ref=e90]: locationOt
                  - generic "Bengaluru, INDIA" [ref=e91]
                - generic [ref=e93]:
                  - emphasis [ref=e94]: experienceOneTheme
                  - generic "8 Year(s) 9 Month(s)" [ref=e96]:
                    - generic [ref=e97]: 8 Years
                    - generic [ref=e98]: 9 Months
                - generic [ref=e100]:
                  - generic [ref=e101]:
                    - emphasis [ref=e102]: walletOneTheme
                    - generic "₹ Seventeen lakh fifty thousand" [ref=e103]:
                      - generic [ref=e104]: ₹
                      - text: 17,50,000
                  - generic [ref=e105] [cursor=pointer]: Add breakup
              - generic [ref=e106]:
                - generic [ref=e108]:
                  - generic [ref=e109]:
                    - emphasis [ref=e110]: phoneOneTheme
                    - generic "9538546795" [ref=e111]
                  - emphasis [ref=e113]: verifiedOneTheme
                - generic [ref=e115]:
                  - generic [ref=e116]:
                    - emphasis [ref=e117]: mailOneTheme
                    - generic "poolaramesh539@gmail.com" [ref=e118]
                  - emphasis [ref=e121]: verifiedOneTheme
                - generic [ref=e123]:
                  - emphasis [ref=e124]: calenderOneTheme
                  - generic "Available to join in 15 Days or less" [ref=e125]
        - generic [ref=e127] [cursor=pointer]:
          - generic [ref=e129]:
            - emphasis [ref=e131]: CvOneTheme
            - generic [ref=e132]: Add resume
            - generic [ref=e133]: ↑ 10%
          - link "Add 1 missing details" [ref=e136]:
            - /url: javascript:void(0)
      - generic [ref=e137]:
        - list [ref=e141]:
          - listitem [ref=e142]: Quick links
          - listitem [ref=e143]:
            - text: Resume
            - link "Upload" [ref=e144] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e145]: Resume headline
          - listitem [ref=e146]: Key skills
          - listitem [ref=e147]: Employment
          - listitem [ref=e148]:
            - text: Education
            - link "Add" [ref=e149] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e150]: IT skills
          - listitem [ref=e151]:
            - text: Projects
            - link "Add" [ref=e152] [cursor=pointer]:
              - /url: javascript:;
          - listitem [ref=e153]: Profile summary
          - listitem [ref=e154]: Accomplishments
          - listitem [ref=e155]: Career profile
          - listitem [ref=e156]: Personal details
        - generic [ref=e157]:
          - generic [ref=e164] [cursor=pointer]:
            - generic [ref=e165]:
              - img "NaukriPro" [ref=e167]
              - generic [ref=e168]:
                - generic [ref=e169]: Power up with
                - heading "AI enhanced profile" [level=1] [ref=e172]
            - generic [ref=e173]:
              - button "Become a Pro":
                - generic: Become a Pro
              - generic [ref=e175]: 25% off
          - generic [ref=e176]:
            - generic [ref=e180]:
              - generic [ref=e181]: GreenTick
              - paragraph [ref=e182]: Success
              - paragraph [ref=e183]: Attached Resume has been successfully deleted.
            - generic [ref=e184]:
              - generic [ref=e185]:
                - generic [ref=e187]: ResumeAdd 10%
                - generic [ref=e189]: 70% of recruiters discover candidates through their resume
              - generic [ref=e192]:
                - generic [ref=e198]:
                  - img [ref=e201]
                  - generic [ref=e202]:
                    - generic [ref=e203]:
                      - generic [ref=e205]: We’ve built a resume based on your profile
                      - generic [ref=e206]: You can further improve its content with the help of AI
                    - generic [ref=e208] [cursor=pointer]: View resume
                - generic [ref=e210]:
                  - generic [ref=e211]:
                    - generic [ref=e213]:
                      - button "Choose File" [ref=e214] [cursor=pointer]
                      - generic [ref=e216] [cursor=pointer]: Already have a resume? Upload resume
                    - list
                  - generic [ref=e217]: "Supported Formats: doc, docx, rtf, pdf, upto 2 MB"
          - generic [ref=e220]:
            - generic [ref=e221]:
              - text: Resume headline
              - generic [ref=e222] [cursor=pointer]: editOneTheme
            - generic [ref=e225]: “Senior QA Engineer with 8+ Years in Web/Mobile Testing, API Automation & Agile Delivery” - Immediate Joiner
          - generic [ref=e228]:
            - generic [ref=e229]:
              - text: Key skills
              - generic [ref=e230] [cursor=pointer]: editOneTheme
            - generic [ref=e232]:
              - generic "Manual Testing" [ref=e233]
              - generic "Mobile Application Testing" [ref=e234]
              - generic "Web Application Testing" [ref=e235]
              - generic "API Testing" [ref=e236]
              - generic "Performance Testing" [ref=e237]
              - generic "Memory Leakage Testing" [ref=e238]
              - generic "Mobile Testing" [ref=e239]
              - generic "Device Testing" [ref=e240]
              - generic "Bluetooth" [ref=e241]
              - generic "NFC" [ref=e242]
              - generic "Android Testing" [ref=e243]
              - generic "Ios Testing" [ref=e244]
              - generic "Charles Proxy" [ref=e245]
              - generic "Azure DevOps" [ref=e246]
              - generic "JIRA" [ref=e247]
              - generic "Servicenow" [ref=e248]
          - generic [ref=e252]:
            - generic [ref=e253]:
              - text: Employment
              - generic [ref=e254]: Add employment
            - generic [ref=e255]:
              - generic [ref=e256]:
                - generic [ref=e257]:
                  - generic "IT QA Test Analyst" [ref=e258]
                  - generic [ref=e259] [cursor=pointer]: editOneTheme
                - generic "Ecolab Global Services" [ref=e261]
                - generic [ref=e262]:
                  - generic [ref=e263]: Full-time
                  - generic [ref=e265]: Feb 2022 to Mar 2026 (4 years 2 months)
                - generic [ref=e268]:
                  - text: Expertise in manual software testing, following the Shift?Left Testing strategy Responsible for analyzing business requirements, identifying test scenarios, authoring, and executing test cases within sprint timelines while adhering to QA policies, processes, and documentation standar...
                  - link "Read More" [ref=e269] [cursor=pointer]:
                    - /url: javascript:;
              - generic [ref=e270]:
                - generic [ref=e271]:
                  - generic "Functional Test Engineer" [ref=e272]
                  - generic [ref=e273] [cursor=pointer]: editOneTheme
                - generic "Photon Interactive Pvt Ltd" [ref=e275]
                - generic [ref=e276]:
                  - generic [ref=e277]: Full-time
                  - generic [ref=e279]: Nov 2020 to Dec 2021 (1 year 2 months)
                - generic [ref=e282]:
                  - text: Involved in the complete testing lifecycle, including analysis, scenario design, test planning, test case creation, and execution Played an integral role in the successful deployment of projects by actively participating in production deployment cycles Performed testing across multi...
                  - link "Read More" [ref=e283] [cursor=pointer]:
                    - /url: javascript:;
              - generic [ref=e284]:
                - generic [ref=e285]:
                  - generic "Quality Engineer" [ref=e286]
                  - generic [ref=e287] [cursor=pointer]: editOneTheme
                - generic "CAMSDATA" [ref=e289]
                - generic [ref=e290]:
                  - generic [ref=e291]: Full-time
                  - generic [ref=e293]: Jan 2020 to Apr 2020 (4 months)
                - generic [ref=e296]:
                  - text: Executed test cases as part of an e?commerce project Participated in stakeholder engagement, planning, and execution within an Agile environment Delivered projects while ensuring SLA compliance and effective team coordination Identified risks and optimized test and release cycles a...
                  - link "Read More" [ref=e297] [cursor=pointer]:
                    - /url: javascript:;
              - generic [ref=e298]:
                - generic [ref=e299]:
                  - generic "QA Analyst" [ref=e300]
                  - generic [ref=e301] [cursor=pointer]: editOneTheme
                - generic "ZuciTech Software Solutions" [ref=e303]
                - generic [ref=e304]:
                  - generic [ref=e305]: Full-time
                  - generic [ref=e307]: Oct 2019 to Jan 2020 (4 months)
                - generic [ref=e309]: Handled web and mobile application projects on an OTT platform Interfaced with product owners and the onshore Agile team to ensure timely sprint delivery Collaborated with team members to execute tests and perform defect triaging
              - generic [ref=e310]:
                - generic [ref=e311]:
                  - generic "Test Engineer" [ref=e312]
                  - generic [ref=e313] [cursor=pointer]: editOneTheme
                - generic "Sunfra Software Services" [ref=e315]
                - generic [ref=e316]:
                  - generic [ref=e317]: Full-time
                  - generic [ref=e319]: May 2016 to Aug 2019 (3 years 4 months)
                - generic [ref=e322]:
                  - text: Handled web and mobile application projects in the e?commerce domain Involved in test execution and defect reporting Performed testing across multiple languages in both mobile and web applications Participated in bug battles to identify defects across projects through exploratory t...
                  - link "Read More" [ref=e323] [cursor=pointer]:
                    - /url: javascript:;
          - generic [ref=e327]:
            - generic [ref=e328]:
              - text: Education
              - generic [ref=e329]: Add education
            - generic [ref=e330]:
              - generic [ref=e331]:
                - generic [ref=e332]:
                  - generic [ref=e333]:
                    - generic "B.Tech / B.E." [ref=e334]
                    - generic "Computer Science and Engineering (CSE)" [ref=e335]
                    - generic [ref=e336] [cursor=pointer]: editOneTheme
                  - generic [ref=e337]: siddharth institute of engineering and technology, Chittoor
                  - generic [ref=e338]:
                    - text: 2009-2014
                    - generic [ref=e339]: Full Time
                - generic [ref=e341]:
                  - generic:
                    - generic [ref=e342]:
                      - generic [ref=e343]: Class XII
                      - generic [ref=e344] [cursor=pointer]: editOneTheme
                    - generic [ref=e345]: Other
                    - generic [ref=e346]: "2010"
                - generic [ref=e347]:
                  - generic:
                    - generic [ref=e348]:
                      - generic [ref=e349]: Class X
                      - generic [ref=e350] [cursor=pointer]: editOneTheme
                    - generic [ref=e351]: Other
                    - generic [ref=e352]: "2008"
              - generic [ref=e353] [cursor=pointer]: Add doctorate/PhD
              - generic [ref=e354] [cursor=pointer]: Add masters/post-graduation
          - generic [ref=e358]:
            - generic [ref=e359]:
              - text: IT skills
              - generic [ref=e360]: Add details
            - list [ref=e363]:
              - listitem [ref=e364]:
                - generic [ref=e365]: Skills
                - generic [ref=e366]: Version
                - generic [ref=e367]: Last used
                - generic [ref=e368]: Experience
              - listitem [ref=e370]:
                - generic [ref=e371]: JIRA
                - generic [ref=e372]: "-"
                - generic [ref=e373]: "-"
                - generic [ref=e374]: 4 Years 0 Month
                - generic [ref=e375] [cursor=pointer]: editOneTheme
              - listitem [ref=e376]:
                - generic [ref=e377]: Azure DevOps
                - generic [ref=e378]: "-"
                - generic [ref=e379]: "-"
                - generic [ref=e380]: 4 Years 3 Months
                - generic [ref=e381] [cursor=pointer]: editOneTheme
              - listitem [ref=e382]:
                - generic [ref=e383]: Memory Leakage Testing
                - generic [ref=e384]: "-"
                - generic [ref=e385]: "-"
                - generic [ref=e386]: 1 Year 0 Month
                - generic [ref=e387] [cursor=pointer]: editOneTheme
              - listitem [ref=e388]:
                - generic [ref=e389]: Load / Performance Testing
                - generic [ref=e390]: "-"
                - generic [ref=e391]: "-"
                - generic [ref=e392]: 2 Years 0 Month
                - generic [ref=e393] [cursor=pointer]: editOneTheme
              - listitem [ref=e394]:
                - generic [ref=e395]: API Testing
                - generic [ref=e396]: "-"
                - generic [ref=e397]: "-"
                - generic [ref=e398]: 3 Years 6 Months
                - generic [ref=e399] [cursor=pointer]: editOneTheme
              - listitem [ref=e400]:
                - generic [ref=e401]: Mobile Application Testing
                - generic [ref=e402]: "-"
                - generic [ref=e403]: "-"
                - generic [ref=e404]: 8 Years 9 Months
                - generic [ref=e405] [cursor=pointer]: editOneTheme
              - listitem [ref=e406]:
                - generic [ref=e407]: Web Application Testing
                - generic [ref=e408]: "-"
                - generic [ref=e409]: "-"
                - generic [ref=e410]: 8 Years 9 Months
                - generic [ref=e411] [cursor=pointer]: editOneTheme
              - listitem [ref=e412]:
                - generic [ref=e413]: Manual Testing
                - generic [ref=e414]: "-"
                - generic [ref=e415]: "-"
                - generic [ref=e416]: 8 Years 9 Months
                - generic [ref=e417] [cursor=pointer]: editOneTheme
          - generic [ref=e428]:
            - generic [ref=e429]: New
            - generic [ref=e430]:
              - heading "Diversity & inclusion" [level=1] [ref=e432]
              - img [ref=e435] [cursor=pointer]
            - heading "Share details to attract recruiters who value people from different backgrounds" [level=3] [ref=e437]
            - heading "Disability status" [level=4] [ref=e439]
            - heading "Do not have disability" [level=3] [ref=e441]
            - generic [ref=e443] [cursor=pointer]: Add military experience
            - generic [ref=e445] [cursor=pointer]: Add career break
    - text: ;
  - contentinfo [ref=e448]:
    - generic [ref=e451]:
      - generic [ref=e452]:
        - link "Naukri Logo" [ref=e453] [cursor=pointer]:
          - /url: https://www.naukri.com
          - img "Naukri Logo" [ref=e454]
        - generic [ref=e455]:
          - generic "Connect with us" [ref=e456]
          - link "naukri social icons" [ref=e457] [cursor=pointer]:
            - /url: https://www.facebook.com/Naukri
            - img "naukri social icons" [ref=e458]
          - link "naukri social icons" [ref=e459] [cursor=pointer]:
            - /url: https://instagram.com/naukridotcom/
            - img "naukri social icons" [ref=e460]
          - link "naukri social icons" [ref=e461] [cursor=pointer]:
            - /url: https://twitter.com/naukri
            - img "naukri social icons" [ref=e462]
          - link "naukri social icons" [ref=e463] [cursor=pointer]:
            - /url: http://www.linkedin.com/company/naukri.com
            - img "naukri social icons" [ref=e464]
      - list [ref=e466]:
        - listitem [ref=e467]:
          - link "About us" [ref=e468] [cursor=pointer]:
            - /url: https://infoedge.in
        - listitem [ref=e469]:
          - link "Careers" [ref=e470] [cursor=pointer]:
            - /url: https://careers.infoedge.com/
        - listitem [ref=e471]:
          - link "Employer home" [ref=e472] [cursor=pointer]:
            - /url: https://www.naukri.com/recruit/login
        - listitem [ref=e473]:
          - link "Sitemap" [ref=e474] [cursor=pointer]:
            - /url: https://www.naukri.com/sitemap/sitemap.php
        - listitem [ref=e475]:
          - link "Credits" [ref=e476] [cursor=pointer]:
            - /url: https://www.naukri.com/credits
      - list [ref=e478]:
        - listitem [ref=e479]:
          - link "Help center" [ref=e480] [cursor=pointer]:
            - /url: https://www.naukri.com/faq/job-seeker?utm_source=footer
        - listitem [ref=e481]:
          - link "Summons/Notices" [ref=e482] [cursor=pointer]:
            - /url: https://w5.naukri.com/summons-notices-form/
        - listitem [ref=e483]:
          - link "Grievances" [ref=e484] [cursor=pointer]:
            - /url: https://w5.naukri.com/grievances-form/
        - listitem [ref=e485]:
          - link "Report issue" [ref=e486] [cursor=pointer]:
            - /url: https://w5.naukri.com/fdbck/main/feedback.php?app_id=15
      - list [ref=e488]:
        - listitem [ref=e489]:
          - link "Privacy policy" [ref=e490] [cursor=pointer]:
            - /url: https://www.naukri.com/privacypolicy
        - listitem [ref=e491]:
          - link "Terms & conditions" [ref=e492] [cursor=pointer]:
            - /url: https://www.naukri.com/termsconditions
        - listitem [ref=e493]:
          - link "Fraud alert" [ref=e494] [cursor=pointer]:
            - /url: https://www.naukri.com/imposter/report-fake-job-recruiter
        - listitem [ref=e495]:
          - link "Trust & safety" [ref=e496] [cursor=pointer]:
            - /url: https://www.naukri.com/jobsearch/trust-safety
      - generic [ref=e497]:
        - generic [ref=e498]: Apply on the go
        - generic [ref=e499]: Get real-time job updates on our App
        - generic [ref=e500]:
          - link "naukri app download" [ref=e501] [cursor=pointer]:
            - /url: https://play.google.com/store/apps/details?id=naukriApp.appModules.login&hl=en&utm_source=naukri&utm_medium=footer
            - img "naukri app download" [ref=e502]
          - link "naukri app download" [ref=e503] [cursor=pointer]:
            - /url: https://itunes.apple.com/in/app/naukri.com-job-search/id482877505?mt=8
            - img "naukri app download" [ref=e504]
    - generic [ref=e506]:
      - generic [ref=e507]:
        - link "naukri social logos" [ref=e509] [cursor=pointer]:
          - /url: http://infoedge.in
          - img "naukri social logos" [ref=e510]
        - generic [ref=e511]:
          - generic [ref=e512]: All trademarks are the property of their respective owners
          - generic [ref=e513]: All rights reserved © 2026 Info Edge (India) Ltd.
      - generic [ref=e514]: Our businesses
      - list [ref=e517]:
        - listitem [ref=e518]:
          - link "nnacres" [ref=e520] [cursor=pointer]:
            - /url: https://www.99acres.com/
            - img "nnacres" [ref=e521]
        - listitem [ref=e522]:
          - link "jeevansathi" [ref=e524] [cursor=pointer]:
            - /url: https://www.jeevansathi.com/
            - img "jeevansathi" [ref=e525]
        - listitem [ref=e526]:
          - link "ng" [ref=e528] [cursor=pointer]:
            - /url: https://www.naukrigulf.com/
            - img "ng" [ref=e529]
        - listitem [ref=e530]:
          - link "shiksha" [ref=e532] [cursor=pointer]:
            - /url: https://www.shiksha.com/
            - img "shiksha" [ref=e533]
        - listitem [ref=e534]:
          - link "iimjobs" [ref=e536] [cursor=pointer]:
            - /url: https://www.iimjobs.com
            - img "iimjobs" [ref=e537]
        - listitem [ref=e538]:
          - link "hirist" [ref=e540] [cursor=pointer]:
            - /url: https://www.hirist.tech/
            - img "hirist" [ref=e541]
        - listitem [ref=e542]:
          - link "jobhai" [ref=e544] [cursor=pointer]:
            - /url: https://www.jobhai.com
            - img "jobhai" [ref=e545]
        - listitem [ref=e546]:
          - link "doselect" [ref=e548] [cursor=pointer]:
            - /url: https://doselect.com/
            - img "doselect" [ref=e549]
        - listitem [ref=e550]:
          - link "minis" [ref=e552] [cursor=pointer]:
            - /url: https://www.naukri.com/minis
            - img "minis" [ref=e553]
        - listitem [ref=e554]:
          - link "codingninjas" [ref=e556] [cursor=pointer]:
            - /url: https://www.codingninjas.com/?utm_source=naukri&utm_medium=desktop-footer
            - img "codingninjas" [ref=e557]
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
  15 |     await username.fill("poolaramesh539@gmail.com")
  16 |     const password:Locator =  page.getByPlaceholder("Enter Password")
  17 |     await password.fill("Tesika@221224")
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
> 50 |         await delete_popup.nth(2).click({force:true})
     |                                   ^ Error: locator.click: Element is not visible
  51 |     }
  52 |     
  53 | 
  54 |     // const upload_resume:Locator = page.locator("span.dummyUploadNewCTA")
  55 |     // await upload_resume.click({force:true})
  56 | 
  57 |     const upload_cv:Locator = page.locator("input#attachCV")
  58 |     //await upload_cv.click({force:true})
  59 |     await upload_cv.setInputFiles("testdata/RAMESH_POOLA_Senior_Test_Engineer.pdf")
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