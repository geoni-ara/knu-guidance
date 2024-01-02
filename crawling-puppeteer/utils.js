import puppeteer from "puppeteer";

const StartGetSubjectFile = async (list) => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const target of list) {
    await page.goto(target.url, { waitUntil: "domcontentloaded" });
    const newUrl = await GetSubjectFileURL(target.name, page);
    try {
      await DownloadSubjectFile(page, newUrl);
    } catch (e) {
      console.log(`[ERROR] fail ${target.name} load`);
      continue;
    }
    await page.waitForTimeout(5000);
  }
  await browser.close();
};

const GetSubjectFileURL = async (name, page) => {
  await page.waitForSelector("#sbr_print > div > select");
  await page.select("#sbr_print > div > select", "2024");
  try {
    await page.waitForSelector("#sbr_print > div:nth-child(2) > select", {
      timeout: 1000,
    });
    await page.select("#sbr_print > div:nth-child(2) > select", "1");
  } catch (e) {
    console.log(`[!] ${name} : 추가필터 없음`);
  } finally {
    await page.click("#print_button");
  }
  const newUrl = await page.evaluate(() => {
    const sbrPrintElement = document.querySelector("#sbr_print");
    return sbrPrintElement.getAttribute("action");
  });
  console.log(`name   : ${name}`);
  console.log(`target : ${newUrl}`);
  return newUrl;
};

const DownloadSubjectFile = async (page, url) => {
  await page.goto(url, { waitUntil: "domcontentloaded" });
  await page.waitForSelector("#m2soft-crownix-page");
  await page.waitForTimeout(1000);
  await page.click("#crownix-toolbar-save > button");
  await page.click("#crownix-toolbar-xls > button");
};

export { StartGetSubjectFile };
