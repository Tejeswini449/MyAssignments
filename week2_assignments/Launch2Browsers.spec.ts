import { chromium, firefox, test } from "@playwright/test";

test("Launch Edge", async() =>
    {
        const browser =await chromium.launch({channel:'msedge'})
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://www.redbus.in")
        const edgePageTitle = await page.title()
        console.log(edgePageTitle);
        const edgePageURL = await page.url()
        console.log(edgePageURL)
        await page.waitForTimeout(5000)
    })

test("Launch Firefox", async() =>
    {
        const browser =await firefox.launch({channel:'firefox'})
        const context = await browser.newContext()
        const page = await context.newPage()
        await page.goto("https://www.flipkart.com")
        const firefoxPageTitle = await page.title()
        console.log(firefoxPageTitle)
        console.log(page.url())
        await page.waitForTimeout(5000)
    })

   