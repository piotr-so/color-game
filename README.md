
#  Color game
## Overview
Simple brick type game created with React and Styled-components.

Live demo available [here](https://piotr-so.github.io/color-game/).

## Running the app

#### 1. Clone repository and install all dependencies.
  

    npm install or yarn add

#### 2. Create optimised and minified build.

    npm run build

#### 3. Run http server locally.
For this part you will need package like *[serve](https://www.npmjs.com/package/serve/v/10.1.1)*  or *[http-server](https://www.npmjs.com/package/http-server)* installed.

Serve variant:

    serve -s build

Http-server variant:
```
http-server ./build [options]

#need different than default port? example: http-server ./build -p 6000
```
#### 4. Open http://localhost:5000 (default port for *serve*)  or http://localhost:8080 (default port for *http-server*)

## [Optional]
### If you want to run unoptimised build for development with hot reload.

    npm run start

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To run on a different port, add set PORT="value" to package.json script. For instance: 

    "scripts": {
        "start": "set PORT=8000 && react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    }
  

##  References
Favicon: https://freesvg.org/
Arrow and question mark icons: https://www.flaticon.com/



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  
