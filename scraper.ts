const playwright = require("playwright")
const random_useragent = require("random-useragent")

const BASE_URL = "https://github.com/topics/playwright"

; (async () => {
    // Create random user agent
    const agent = random_useragent.getRandom()

    // Setup browser
    const browser = await playwright.chromium.launch({ headless: true})
    const context = await browser.newContext({ userAgent: agent})
    const page = await context.newPage({ bypassCSP: true })
    await page.setDefaultTimeout(30000)
    await page.setViewportSize({ width: 800, height: 600})
    await page.goto(BASE_URL)

    // Get data from website

    // Store data into file
    
    // Close browser
    await browser.close()

}) ().catch(error => {
    console.log(error)
    process.exit(1)
})