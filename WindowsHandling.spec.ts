import test from "@playwright/test";

test("Windows Handling", async({context,page})=> {

    await page.goto("https://login.salesforce.com/")
    await page.locator("#username").fill("majay3574@gmail.com")
    await page.locator("#password").fill("Ajaymichael@123")
    await page.locator("#Login").click()

    const childPage1Promise = context.waitForEvent('page')

    await page.locator("//button[text()='Learn More']").click()

    const childPage1 = await childPage1Promise

    await childPage1.locator("//button[text()='Confirm']").click()

    const titleOfChild1 = await childPage1.title()
    console.log("Title of Child Page 1 : "+titleOfChild1)

    const urlOfChild1 = childPage1.url()
    console.log("URL of Child Page 1 : "+urlOfChild1)

    await childPage1.close()

    const parentTitle = await page.title()
    console.log("Title of the Parent: "+parentTitle);
    

})