## steps to configure a React development environment

### Install Node and intialize an npm directory.
1. install node/npm.
2. create a folder called src in your project root.
3. run ```npm init -y``` in the root of your project (one level above your src folder).

### Install and configure prettier
4. run ``` npm install -D prettier ``` to install prettier (-D marks it as a dev dependency).
5. create a file in the root of your project called ```.prettierrc```.
6. inside ```.prettierrc``` place an empty object ```{}```. (this will tell prettier we just want to use the default setting)
7. inside your ```package.json``` delete the test script and create a script called 
```json
"format": "prettier --write \"src/**/*.{js,jsx}\""
```
    - if you're using VS code you can skip this step if you want we will configure VS Code to auto format using prettier next.
8. install the prettier code formatter extention for VS Code.
9. go to your vs code settings search "format on save" and make sure the checkbox is checked.
10. while in settings search "prettier config" and check the box that enabales "require a prettier configuration file to format. (this will make sure prettier doesn't run in projects where you arn't using it).


### Install and Configure ESLint
11. run ```npm install -D eslint@7.18.0 eslint-config-prettier@8.1.0```
12. create a file next to ```.prettierrc``` called ```.eslintrc.json```. (this will be the config file for eslint).
13. enter the following in your .eslintrc.json
```json
{
  //the order of the "extends" array matters.
  "extends": [
    "eslint:recommended", //loads all of the eslint:recommended rules including white space rules.
    "prettier" //turns off the eslint white space rules and other rules it knows how to handle specifically.
  ],
  "plugins": [], //no plugins for now so leave a blank array.
  "parserOptions": {
    "ecmaVersion": 2021, //use the most modern version.
    "sourceType": "module", //we will be using ES Modules
    "ecmaFeatures": {
      "jsx": true, //we will be using JSX
    }
  },
  "env": { //describe the environment this code will run in
    "es6": true, //eslint won't throw error if we try to use es6 methods like map() or reduce().
    "browser": true, //eslint won't throw errors if we use fetch() or the window object
    "node": true, //eslint won't throw erroes if we try to access things in a node environement like 'golbal' or 'process'.
  }
}
```

14. add the following script to your package.json 
```json 
"lint": "eslint \"src/**/*.{js,jsx}\" --quiet"
```