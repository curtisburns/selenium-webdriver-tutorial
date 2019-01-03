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

// // This will test get the visible text of the elements we target

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


// driver.findElement(By.css('input'));

// driver.findElement(By.css('.btn-lg')).getText().then(function(txt) {
//     console.log('button text is ' + txt);
// });

// driver.findElements(By.css('nav li')).then(function(els) {
//     els.map(function(el){
//         el.getText().then(function(txt) {
//             console.log("the text of the navbar element is: " + txt);
//         })
//     })
// });


// //You can run this directly in node. 
// //node test.js

//////////////////////////////////////////////////// // Video 4 - sendKeys() & click() //////////////////////////////////////


// // This will enter an email address and click the submit button

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


// driver.findElement(By.css('input')).sendKeys('test@test.com');
// driver.findElement(By.css('.btn-lg')).click();

// // This next command needs to be delayed as Web driver will not wait for this element 
// // to load (which takes a few milliseconds despite the button being clicked;
// driver.findElement(By.css('.alert-success')).getText().then(txt => console.log('the text for the alert is' + txt));


// driver.sleep(10000).then(() => {
//     driver.quit()
// });

// //You can run this directly in node. 
// //node test.js 



/////////////////////////////////////////// // Video 5 - Explicit and Implicit Waits < deprecated //////////////////////////////////////


// This will wait for the alert to load before looking for it to avoid error

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

// driver.Timeouts().implicit(5000);
// driver.findElement(By.css('input')).sendKeys('test@test.com');
// driver.findElement(By.css('.btn-lg')).click();

// // // // This next command needs to be delayed as Web driver will not wait for this element 
// // // // to load (which takes a few milliseconds despite the button being clicked;
// // // driver.findElement(By.css('.alert-success')).getText().then(txt => console.log('the text for the alert is' + txt));

// // // Sleep function has since been changed into a promise - correction - promise management has been deprecated.
// This is not ideal (bad practice) and should use other wait functions
// // // Never use in production, maybe just to debug
// // driver.sleep(5000).then(() => {
// //     driver.findElement(By.css('.alert-success')).getText().then(txt => console.log('the text for the alert is ' + txt));
// // });

// driver.sleep(10000).then(() => {
//     driver.quit()
// });

// // You can run this directly in node. 
// // node test.js 


//////////////////////// IMPORTANT - Promises have been deprecated in new WebDriverJS - need to use async await; ////////////////

// Read further into wait and until, there are a lot of conditional functions available to us
// Until will loop until a truthy is returned e.g it has found the element.

// const webdriver = require('selenium-webdriver');
// const {Builder, By, Key, until} = webdriver;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// (async function myTest() {
//  const driver = new webdriver.Builder().forBrowser('chrome').build(); 
//  try {
//   await driver.get('http://library-app.firebaseapp.com');
//   await driver.findElement(By.css('input')).sendKeys('user@gmail.com');
//   await driver.findElement(By.css('.btn-lg')).click();
  
//   // Note the alternative way of inputing the params (no By);
//   await driver.wait(until.elementsLocated({css: '.alert-success'}), 10000);

//   await driver.findElement({css: '.alert-success'}).getText()
//    .then( txt => {
//    console.log(`Alert text is - ${txt}`);
//   },
//    err => {
//     console.log(`ERROR - ${err}`);
//    });

//   await driver.sleep(3000); 
  
//  } finally {
//   await driver.quit();
//  }
// })();


////////////////////////////////// Video 8 - Explicit waits - custom conditions ////////////////////////////////////////////

// const webdriver = require('selenium-webdriver');
// const {Builder, By, Key, until} = webdriver;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// (async function myTest() {
//  const driver = new webdriver.Builder().forBrowser('chrome').build(); 
//  try {
//   await driver.get('http://library-app.firebaseapp.com');
//   await driver.findElement(By.css('input')).sendKeys('user@gmail.com');
//   const submitBtn = await driver.findElement(By.css('.btn-lg'));
  
//   // Custom wait condition;
//   await driver.wait(function() {
//     // return submitBtn.isEnabled();
//     return submitBtn.getCssValue('opacity').then(function(propVal){
//         // console.log(propVal) turns out to be a string
//         // return propVal === '1';
//         return propVal == 1;
//     })
//   }, 15000);

//   await submitBtn.click();

//   // Note the alternative way of inputing the params (no By);
//   await driver.wait(until.elementsLocated({css: '.alert-success'}), 10000);

//   await driver.findElement({css: '.alert-success'}).getText()
//    .then( txt => {
//    console.log(`Alert text is - ${txt}`);
//   },
//    err => {
//     console.log(`ERROR - ${err}`);
//    });

//   await driver.sleep(6000); 
  
//  } finally {
//   await driver.quit();
//  }
// })();

/////////////////////////////// Video 9 - Mocha testing ////////////////////////////////////////////////

// const webdriver = require('selenium-webdriver');
// const { Builder, By, Key, until } = webdriver;
// const { describe, it, after, before } = require('selenium-webdriver/testing'); //provides extensions for Mocha/Jasmine;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// let driver;

// describe('library app scenarios', function() {
//     //Default is two seconds because unit testing is generally quite fast.
//     this.timeout(5000);
//     beforeEach(function() {
//         driver = new webdriver.Builder().forBrowser('chrome').build(); 
//         driver.get('http://library-app.firebaseapp.com');
//     })

//     afterEach(function() {
//         driver.quit();
//     })

//     it('changes button opacity upon button being enabled', function() {
//         driver.wait(function() {
//             return submitBtn.getCssValue('opacity').then(function(propVal){
//                 return propVal == 1;
//             })
//         }, 5000);
//     });

//     it('input a valid email and clicking brings up alert success', function() {
//         const submitBtn = driver.findElement(By.css('.btn-lg'));
//         driver.findElement(By.css('input')).sendKeys('user@gmail.com');
//         submitBtn.click();
//         driver.wait(until.elementsLocated({css: '.alert-success'}), 5000).getText()
//            .then( txt => {
//            console.log(`Alert text is - ${txt}`);
//         });
//     });

//     it('shows text for nav bar', function() {
//         driver.findElement(By.css('nav')).getText().then(txt => console.log(txt));
//     });
// })




/////////////// IMPORTANT - Mocha functions have been removed - Now just use the testing suite /////////////////


// const webdriver = require('selenium-webdriver');
// const { Builder, By, Key, until } = webdriver;
// const { suite } = require('selenium-webdriver/testing'); //provides extensions for Mocha/Jasmine;

// //To fix ChromeDriver error 
// const chrome = require('selenium-webdriver/chrome');
// const path = require('chromedriver').path;
// const service = new chrome.ServiceBuilder(path).build();
      
// chrome.setDefaultService(service);

// suite(function(env) {
//     describe('library app scenarios', function() {
//         //Default is two seconds because unit testing is generally quite fast.
//         this.timeout(10000);
//         let driver;

//         before(async function() {
//             driver = await new webdriver.Builder().forBrowser('chrome').build(); 
//             await driver.get('http://library-app.firebaseapp.com');
//             // driver = await env.builder().build();
//         })

//         after(() => driver.quit());

            
//         it('changes button opacity upon button being enabled', async function() {
//             let submitBtn = await driver.findElement(By.css('.btn-lg'));
//             driver.wait(function() {
//                 return submitBtn.getCssValue('opacity').then(function(propVal){
//                     return propVal == 1;
//                 })
//             }, 8000);
//         });

//         it('input a valid email and clicking brings up alert success', async function() {
//             let submitBtn = await driver.findElement(By.css('.btn-lg'));
//             await driver.findElement(By.css('input')).sendKeys('user@gmail.com');
//             await submitBtn.click();
//             await driver.wait(until.elementLocated({css: '.alert-success'}), 10000).getText()
//             .then( txt => {
//             console.log(`Alert text is - ${txt}`);
//             });
//         });

//         it('shows text for nav bar', async function() {
//             await driver.findElement(By.css('nav')).getText().then(txt => console.log(txt));
//         });
//     })
// })



// NOTE: Need to look into setting up the environments
// NOTE: Remember Mocha is used to run unit tests - We will need to extend the timeout
// NOTE: Can us Mochawesome to present results nicely - see package.json - npm install mochawesome

///////////////////////////////////// Video 11 - test assertions  //////////////////////////////////////


const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = webdriver;
const { suite } = require('selenium-webdriver/testing'); //provides extensions for Mocha/Jasmine;
const assert = require('assert'); // Node.js comes with its own assertion library;


//To fix ChromeDriver error 
const chrome = require('selenium-webdriver/chrome');
const path = require('chromedriver').path;
const service = new chrome.ServiceBuilder(path).build();
      
chrome.setDefaultService(service);

suite(function(env) {
    describe('library app scenarios', function() {
        //Default is two seconds because unit testing is generally quite fast.
        this.timeout(10000);
        let driver;

        before(async function() {
            driver = await new webdriver.Builder().forBrowser('chrome').build(); 
            await driver.get('http://library-app.firebaseapp.com');
            // driver = await env.builder().build();
        })

        after(() => driver.quit());

            
        it('changes button opacity upon button being enabled', async function() {
            let submitBtn = await driver.findElement(By.css('.btn-lg'));
            await driver.findElement(By.css('input')).sendKeys('user@gmail.com');
            await driver.wait(function() {
                return submitBtn.getCssValue('opacity').then(function(propVal){ 
                    console.log(propVal == 1);
                    return propVal == 1;
                })
            });

            submitBtn.getCssValue('opacity').then(function(propVal){ 
                return assert(propVal == 1);
            })

        });

        it('input a valid email and clicking brings up alert success', async function() {
            let submitBtn = await driver.findElement(By.css('.btn-lg'));
            await submitBtn.click();
            await driver.wait(until.elementLocated({css: '.alert-success'}), 10000).getText()
            .then( txt => {
            console.log(`Alert text is - ${txt}`);
            });
            await driver.findElements(By.css('.alert-success')).then(result => {
                assert(result.length === 1, result.length + " alert-success were found");
            })
        });

        it('shows text for nav bar', async function() {
            await driver.findElements(By.css('nav')).then(function(result) {
                assert.equal(result.length, 1);
            })
        });
    })
})

