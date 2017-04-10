# Gift Exchange

Progressive Web App used for gift exchange at parties.
Demo: https://giftexchange.shamann.fr/

## Available Scripts

In the project directory, after running `npm install`, you can run:

### `npm run start`

Runs the app in the development mode.
Open [http://localhost:8080/](http://localhost:8080) to view it in the browser.
The page will reload if you make edits thanks to [Webpack Dev Server](https://webpack.js.org/guides/development/#webpack-dev-server).

### `npm run e2e-test`

Launches the End-to-End tests via [Nightwatch.js](http://nightwatchjs.org/) and [Selenium](http://www.seleniumhq.org/).
Before running the tests you must create a `bin` folder at the project root and add `geckodriver.exe` and `selenium-server-standalone-3.3.1.jar` inside it ([More details about Nightwatch configuration](http://nightwatchjs.org/gettingstarted)).

### `npm run unit-test`

Launches the unit tests via [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/).

### `npm run build`

Builds the app for production to the `public` folder.
It correctly bundles `main.js` and `admin.js` in production mode and optimizes the build for the best performance via [Webpack -p](https://webpack.js.org/guides/production-build/#the-automatic-way).

## Database

I've used the realtime database provided by [Firebase](https://firebase.google.com/). It allows users to receive live updates without reloading their page thanks to web sockets.  I invite you to watch this [YouTube video](https://www.youtube.com/watch?v=zbGm0Oh3VMw) if you are unfamiliar with Firebase.
You can create your own project on Firebase website and update the config in `app/firebase.js` or simply keep mind.

## Routing

The main view is where people can register their names. There is also an admin view `/admin` where you can start the lucky draw or reset the database. See `webpack.config.js` for more details.

## Babel

ES2015 Presets are loaded via [babel-loader](https://github.com/babel/babel-loader). The `.babelrc` file is only used for unit tests!

## Manual tests

I have made sure that the app runs correctly on last desktop and mobile browsers via [Browserstack](https://www.browserstack.com/).

## Service Worker

I have used a simple Service Worker provided [by Google](https://github.com/googlechrome/samples/tree/gh-pages/service-worker/custom-offline-page). If the user is offline then `offline.html` will be shown. I also storage the participant list in the localstorage so users can still see the result offline if they were connected when the result was sent. If you use Chrome on an Android device then it will prompt the user if he wants to add the app to his homescreen (you should try it!). From the homescreen, the app provides a standalone / native-like experience. More about Progressive Web Apps: https://developers.google.com/web/progressive-web-apps/

##  Other solution

I could had made a RESTful API via Node.js. I would had stored the data in an array on the server side. The data would persist as long as the server would run so no more database would be required. But for a long term / scalable solution, I've prefered using Firebase.
