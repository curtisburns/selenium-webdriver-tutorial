// https://library-app.firebaseapp.com/ < We are testing this - it is an app that you make for the Ember 2 tutorial


/////////////////////////////////////////////////////////// //Video 1 ////////////////////////////////////////////////////

// const webdriver = require('selenium-webdriver'),
//       By = webdriver.By,
//       until = webdriver.until;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// const driver = new webdriver.Builder().forBrowser('chrome').build();

// driver.get('http://facebook.com');

// // Quits on load;
// // driver.quit();

// //You can run this directly in node. 
// //node test.js


//////////////////////////////////////////////////// // Video 2 - findElements() /////////////////////////////////////////////

// This will test if the input, the button and the alert works as planned in the libraries app

// const webdriver = require('selenium-webdriver'),
//       By = webdriver.By,
//       until = webdriver.until;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// const driver = new webdriver.Builder().forBrowser('chrome').build();

// driver.get('https://library-app.firebaseapp.com/');

// driver.findElement(By.css('input')).then(function(el) {
//     console.log("success " + el);
// });
// driver.findElement(By.css('.btn-lg')).then(function(el) {
//     console.log("Found the button " + el);
// });

// // This doesn't exist yet as it only appears when the user enters their email.
// // driver.findElement(By.css('.alert-success'));

// driver.findElements(By.css('nav li')).then(function(array) {
//     console.log("Found the elements you want " + array);
// });


// //You can run this directly in node. 
// //node test.js



//////////////////////////////////////////////////// // Video 3 - getText() /////////////////////////////////////////////

// This will test if the input, the button and the alert works as planned in the libraries app

const webdriver = require('selenium-webdriver'),
      By = webdriver.By,
      until = webdriver.until;

//To fix ChromeDriver error 
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
      
chrome.setDefaultService(service);

const driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://library-app.firebaseapp.com/');


driver.findElement(By.css('input'));

driver.findElement(By.css('.btn-lg')).getText().then(function(txt) {
    console.log('button text is ' + txt);
});

driver.findElements(By.css('nav li')).then(function(els) {
    els.map(function(el){
        el.getText().then(function(txt) {
            console.log("the text of the navbar element is: " + txt);
        })
    })
});


//You can run this directly in node. 
//node test.js