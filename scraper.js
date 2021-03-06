const puppeteer = require('puppeteer');


//copy xpath or fll xpath in page inspect after highlighting target 

async function scrapeProduct(url){
    const browser = await puppeteer.launch(); 
    const page = await browser.newPage();
    await page.goto(url);

    // image 
    const [el] = await page.$x('//*[@id="ivLargeImage"]/img');
    const src = el.getProperty('src');
    const srcTxt = src.jsonValue();


    // title 
    const [el2] = await page.$x('//*[@id="productTitle"]');
    const txt = el.getProperty('textContent');
    const rawTxt = await txt.jsonValue();


    // price
    const [el3] = await page.$x('//*[@id="priceblock_ourprice"]');
    const txt2 = el3.getProperty('textContent');
    const price = await txt2.jsonValue();

    console.log({srcTxt});
    console.log({rawTxt});
    console.log({price});


    browser.close();
}


scrapeProduct('https://www.amazon.com/gp/product/B08CV94WQR/ref=ppx_yo_dt_b_asin_title_o00_s00?ie=UTF8&psc=1');
