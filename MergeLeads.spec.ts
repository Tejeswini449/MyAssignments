import test from "@playwright/test";


test("Merge Leads Windows Handling", async({context,page})=>
{
   await page.goto("http://leaftaps.com/opentaps/control/main")
   //await page.pause()
   await page.locator("#username").fill("Demosalesmanager")
   await page.locator("#password").fill("crmsfa")
   await page.locator("input[type='submit']").click()

   await page.getByRole('link', {name: 'CRM/SFA'}).click()
   await page.locator("//a[@href='/crmsfa/control/leadsMain']").click()
   await page.getByRole('link', { name: 'Merge Leads' }).click()

   //a new tab will be opened once clicked on the From Lead button - Create Promise before that 
   // and do Sequential window handling
   const childPage1Promise = context.waitForEvent("page")
   //click on From lead widget
   await page.locator("//table[@id='widget_ComboBox_partyIdFrom']/following-sibling::a").click()

//resolve the promise so that we can access the child page's elements using the childPage variable
   const childPage1 = await childPage1Promise
   await childPage1.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first().click()

   //create another promise for changing the focus to the To lead
   const childPage2Promise = context.waitForEvent("page")
   await page.locator("//table[@id='widget_ComboBox_partyIdTo']/following-sibling::a").click()

   const childPage2 = await childPage2Promise
   await childPage2.locator("//div[@class='x-grid3-cell-inner x-grid3-col-partyId']/a").first().click()

   page.once("dialog", async alertHandle => 
{
    console.log(alertHandle.type())
    console.log(alertHandle.message())
    await alertHandle.accept()
    
})
   await page.locator(".buttonDangerous").click()
})