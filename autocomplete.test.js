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

  it('type "avan" should return no results', async () => {
    // await expect(page).toMatchElement('title', {text: 'fightmovie'});
    await page.tap('#input-left');
    await page.type('#input-left', 'avan');
    await expect(page).toMatchElement('ul + li', {text: 'No Results'});

  });
  it.todo('input "avangers" should return 10 results');
});

// describe('Google', () => {
//   beforeEach(async () => {
//     await page.goto('https://google.com');
//   });

//   it('should be titled "Google"', async () => {
//     await expect(page).toMatch('Google');
//   });
// });