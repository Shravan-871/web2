const puppeteer = require("puppeteer");
takeScreenshot()
  .then(() => {
    console.log("Screenshot taken");
  })
  .catch((err) => {
    console.log("Error occured!");
    console.dir(err);
  });


async function takeScreenshot() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://google.com");
  const buffer = await page.screenshot({
    path: "./screenshot.png",
  });
  await page.close();
  await browser.close();
}
