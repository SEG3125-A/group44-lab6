# Lab 6 -- SEG3125

### 1. Group number: 44
### 2. Group members: Lisa Korolyov, Zechen Zhou
### 3. Link to the GitHub repository: https://github.com/SEG3125-A/group44-lab6
### 4. Each member's contribution:

>Lisa Korolyov
* Created the data json files that match the survey questions
* Improved the survey's user interface using Bootstrap

>Zechen Zhou
* Implemented the server side to update the data files based on the survey's response
* Made a "submit" button to send survey result to the server

### 5. Snapshots of the website: 
  ![](/Docs/Images/snapshot1.png)
  ![](/Docs/Images/snapshot2.png)

### 6. How to run the app:

#### 1. At the root of this directory, install the dependencies specified in the package.json file:

```bash
npm install
```

#### 2. To run the app for development:
(no settings for production in this lab unfortunately):

```bash
npm start
```

#### 3. Open the webpage using the browser:
* client-side webpage: http://127.0.0.1:3000/survey

* server-side webpage: http://127.0.0.1:3000/analysis

### 7. Notes for development:

* Create package.json file

```bash
npm init
```

* Add the following into "scripts": {}

```bash
"start": "node js/app.js",
```

* Add dependencies (install packages)
```bash
npm install ejs --save
npm install body-parser --save
npm install express --save 
```

* If place app.js in the project root directory:

Use the command **node app** to run the app

```bash
File package.json:

{
  "name": "group44-lab6",
  "version": "1.0.0",
  "description": "A survey on a website",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "ISC",
}
```

* If place app.js in a sub-directory: (don't forget to modify the path for **"main"** and add a property **"start"** in **"scripts"**)

Use the command **npm start** to run the app

```bash
File package.json:

{
  "name": "group44-lab6",
  "version": "1.0.0",
  "description": "A survey on a website",
  "main": "js/app.js",
  "scripts": {
    "start": "node js/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "ISC",
}
```
