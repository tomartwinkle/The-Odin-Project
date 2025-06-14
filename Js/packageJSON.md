# package.json
JSON (Javascript Object Notation) is the standardized format of structuring data and it makes heavy use of js objects syntax.Its often used when working with external servers of API's as its a universal format for when transmitting data.
## Dependencies
| Type                | Purpose                                      | Installed when? |
| ------------------- | -------------------------------------------- | --------------- |
| **dependencies**    | Packages your app needs to run in production | `npm install`   |
| **devDependencies** | Tools for development (e.g., Webpack, Babel) | `npm install`   |
## Scripts 
Where we define custom commands we can run npm run with : 
```
"scripts": {
  "dev": "webpack serve",
  "build": "webpack",
  "start": "node server.js",
  "test": "jest",
  "lint": "eslint src/"
}

```
We run these with : 
```
npm run dev
npm run build
npm start 
```
## Initialising a package.json
`npm init -y`
## Checking Installed Packages
- npm list shows installed packages
- npm outdated shows which are outdated
- npm uninstall <pkg> removes a package
