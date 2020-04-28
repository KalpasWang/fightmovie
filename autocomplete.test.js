const puppeteer = require('puppeteer');
const url = 'http://127.0.0.1:5500/index.html';
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    // headless: false,
    // slowMo: 80,
    // args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.goto(url);
  // await page.setViewport({ width, height });
});

afterAll(async () => {
  await browser.close();
});

describe('test left drpdown', () => {
  beforeEach(async () => {
    await page.reload();
  });

  it('type "av" should show no one item with text "Too many results"', async () => {
    // await expect(page).toMatchElement('title', {text: 'fightmovie'});
    await page.tap('#input-left');
    await page.type('#input-left', 'av');
    await page.waitFor('#result-left div');
    await expect(page).toMatchElement('#result-left div p', {text: 'Too many results.'});

  });
  it.todo('input "avangers" should show 10 results');
});
