![MM-Android](https://raw.githubusercontent.com/MindMakersProject/website/master/android_alpha.png)

[Production](http://www.mindmakersproject.org) - Current Version of the website  

[Staging](http://mind-makers.surge.sh/) – Edge version of the website

## Webapp
* NPM (Package Manager and script launcher)
* Webpack (Bundler)
* React (UI)
* Redux (*not needed yet*)
* Bulma (Flexbox based CSS framework)
* Mocha (testing)
* Surge (static deploy)

## Installing and launching
* Clone the project
* Make sure you have [node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) on your machine
* `npm install // install all dependencies`
* `npm start // start a local server with the project`
* In your browser, go to `http://localhost:8080/`
* `npm run build // build static folder into the 'dist/' folder`

## Deploying
* `npm install -f firebase-tools`
* `firebase login`
* `firebase prefs:token`
* `firebase deploy --token "$FIREBASE_TOKEN_HERE"`

## Contribute  
* Clone the project
* Experiment/fix/change
* `npm run tests // see if nothing is broken`
* Push your branch and make a [Pull-Request](http://makeapullrequest.com/)
