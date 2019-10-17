const puppeteer = require('puppeteer');

const searchmovie = function(req, res) {

    console.log("search movie route");
    console.log(req.params.title);

    const IMDB_URL = (movie) => `https://www.imdb.com/search/title/?title=${movie}&title_type=feature`;
    const movie = req.params.title;
    (async () => {
        /* Initiate the Puppeteer browser */
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        /* Go to the IMDB Movie page and wait for it to load */
        await page.goto(IMDB_URL(movie), { waitUntil: 'networkidle0' });


        /* Run javascript inside of the page */
        let data = await page.evaluate(() =>
            Array.from(document.querySelectorAll('div[class="lister-item mode-advanced"]')).map(item => ({
                title: item.querySelector('div[class="lister-item-content"] > h3 > a').innerText,
                imdbId: item.querySelector('div[class="lister-item-content"] > h3 > a').getAttribute('href').slice(7, 15),
                year: item.querySelector('span[class="lister-item-year text-muted unbold"]').innerText.slice(1,-1),
                synopsis: item.querySelector('p[class="text-muted"]').innerText,
            })));
        /* Outputting what we scraped */
        console.log(data);
        res.send(data);
        await browser.close();
    })();

};

export default searchmovie;