import { tr } from '@faker-js/faker';
import{test,expect,Locator,chromium} from '@playwright/test'
// import { error } from 'node:console';

// test.beforeAll("Launch App @sanity",async()=>{
    
// })
// Launch and Login to App
test("Login to App",{tag:['@sanity','@smoke']},async()=>{
    const browser=await chromium.launch({headless:false})
    const context= await browser.newContext({viewport:{height:1200,width:1200}})
    const page= await context.newPage();
    await page.goto("https://www.naukri.com/nlogin/login?URL=//www.naukri.com/mnjuser/profile")
    const username:Locator = page.getByPlaceholder("Enter Email ID / Username")
    await username.fill("poolaramesh539@gmail.com")
    const password:Locator =  page.getByPlaceholder("Enter Password")
    await password.fill("Tesika@221224")
    const showhide:Locator = page.locator(".showhide.blue-text")
    await showhide.click({force:true});
    const loginbutton= page.locator("button:has-text('Login')")
    for (const login in loginbutton)
    {
        try
        {
            await loginbutton.nth(0).click({force:true})
            break;
        }
        catch(error){
            console.log("No such element found",error)
        }
    }
    await page.waitForTimeout(3000)
    
    /* Clicking on the profile icon */

    const icon:Locator = page.getByAltText("naukri user profile img")
    await icon.click();
    
    const view_update:Locator=page.locator("a:has-text('View & Update Profile')")
    await view_update.click()

    // const delete_resume:Locator= page.locator("span.icon-wrap i[title='Click here to delete your resume']")
    // await delete_resume.click({force:true})
    // await page.waitForTimeout(3000)

    // const delete_popup:Locator = page.locator("button.btn-dark-ot");
    // await page.waitForTimeout(2000)
    // for (let del in delete_popup)
    // {
    //     await delete_popup.nth(2).click()
    // }

    //await page.getByRole('button',{name:'Update resume'})
    
    
    await page.waitForTimeout(2000)
    // const upload_resume:Locator = page.locator("span.dummyUploadNewCTA")
    // await upload_resume.click({force:true})

    const upload_cv:Locator = page.locator("input#attachCV")
    //await upload_cv.click({force:true})
    await upload_cv.setInputFiles("testdata/RAMESH_POOLA_Senior_Test_Engineer.pdf")

    await page.waitForTimeout(2000);

    await expect(page.locator(".updateOn.typ-14Regular")).toContainText("Uploaded on Jun 20, 2026")

    // const icon:Locator = page.getByAltText("naukri user profile img")

    await page.waitForTimeout(3000); 
    await icon.click();

    await page.getByText("Logout").click()

    await page.waitForTimeout(2000);

    await browser.close()
})
