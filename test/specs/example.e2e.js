//Inspired by https://github.com/Georgegriff/query-selector-shadow-dom/blob/master/examples/webdriverio/deeply-nested.js

const { locatorStrategy } = require('query-selector-shadow-dom/plugins/webdriverio');

describe('The shadow DOM based Chrome downloads page', () => {

    it('should show "Open downloads folder" dropdown item', () => {
        browser.addLocatorStrategy('shadow', locatorStrategy);

        browser.url('chrome://downloads')
        browser.custom$('shadow', '#moreActions').click();
        expect(browser.custom$('shadow', '.dropdown-item:not([hidden])')).toHaveTextContaining(
            'downloads');
    });
});

