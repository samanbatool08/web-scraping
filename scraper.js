const puppeteer = require('puppeteer');

async function scrapeProduct(url){
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto(url);

    // image 
    const [el] = await page.$x('//*[@id="ivLargeImage"]/img');
    const src = el.getProperty('src');
    const srcTxt = (await src).jsonValue();



    console.log({srcTxt});

    browser.close();
}


scrapeProduct('https://www.amazon.com/gp/product/B08CV94WQR/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1');
