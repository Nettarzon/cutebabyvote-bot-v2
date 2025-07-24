const puppeteer = require('puppeteer');

async function vote() {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  console.log('Opened page');
  await browser.close();
}

vote();