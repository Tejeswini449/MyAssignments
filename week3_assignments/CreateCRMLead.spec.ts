import test, { expect } from "@playwright/test";

test("Create a Lead in CRM Application", async({page})=>
{
    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator("#username").fill("Demosalesmanager")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    await page.getByText("CRM/SFA").click()
    await page.locator("//a[text()='Leads']").click()
    await page.locator("//a[text()='Create Lead']").click()
    await page.locator('#createLeadForm_companyName').fill("Acc")
    await page.locator("#createLeadForm_firstName").fill("Teju")
    await page.locator("#createLeadForm_lastName").fill("Shyam")
    await page.locator("input[name='personalTitle']").fill("Ms.")
    await page.locator("input[name='annualRevenue']").fill("10000")
    await page.locator("#createLeadForm_departmentName").fill("IT")
    await page.locator("//td/input[@name='primaryPhoneNumber']").fill("1098765432")
    await page.locator(".smallSubmit").click()
    //Verify the company name, first name, last name and the status using auto retrying 
    // and non-retrying assertions

    await expect(page.locator("#viewLead_companyName_sp")).toContainText("Acc")
    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Teju")
    const lastName = await page.locator("#viewLead_lastName_sp").innerText()
    expect(lastName).toBe("Shyam")
    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned")


})