const puppeteer = require('puppeteer');

async function vote() {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
  });

  const page = await browser.newPage();
  console.log("Visiting the page...");
  await page.goto('https://www.cutebabyvote.com/july-2025/?contest=photo-detail&photo_id=448501', { waitUntil: 'networkidle2' });

  try {
    await page.waitForSelector('button.vote-button', { timeout: 10000 });
    await page.click('button.vote-button');
    console.log("✅ Vote submitted at", new Date().toLocaleString());
  } catch (err) {
    console.error("❌ Voting failed:", err.message);
  }

  await browser.close();
}

setInterval(vote, 33 * 60 * 1000);
vote();
