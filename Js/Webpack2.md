# npm Scripts 
we can write npm scripts in package.json by adding "scripts" property containing an object of scripts in the form of "name" and "command".
```
//example
{
  // ... other package.json stuff
  "scripts": {
    "build": "webpack",
    "dev": "webpack serve",
    "deploy": "git subtree push --prefix dist origin gh-pages"
  },
  // ... other package.json stuff
}
```
3 npm scripts to be used : 
1. npm run build - (same as npx webpack) building,bundling,compiling.
2. npm run dev - (same as npx webpack serve) development server
3. npm run deploy - (same as git subtree push --prefix dist origin gh-pages) deploys webiste
# Webpack Modes
| Mode            | Purpose                                      | What it Does                                                                        |
| --------------- | -------------------------------------------- | ----------------------------------------------------------------------------------- |
| **development** | For when you're actively coding your project | Keeps your code readable, adds helpful error messages and source maps for debugging |
| **production**  | For when your site is ready to go live       | Optimizes your code: minifies it, removes unused code, and makes it faster          |
These are the 2 modes : development and production
<br>To switch we have to change the mode : "development" to mode:"production" in webpack.config.js each time which is tedious.<br>
What happens when we switch to production mode : 
- Optimises and minimises our js code to something unreadable
- faster browser loading
- removes unused parts
## Switching modes without editing config manually
We can instead make 2 different files to be used accordingly, one for development and other for production and then specify that in our package.json
- webpack.dev.js - development
- webpack.prod.js - production
```
//package.json
"scripts":{
  "dev" : "webpack serve --config webpack.dev.js",
  "build" : "webpack --config webpack.prod.js",
}
```
Then run : `npm run dev` - development , `npm run build` - production<br><br>
**Bonus : use `webpack-merge`** - If you don’t want to duplicate code between webpack.dev.js and webpack.prod.js, you can use a tool called webpack-merge to share common config and only define what’s different in each file.
<br>
Structure:
```
webpack.common.js  // shared settings
webpack.dev.js     // dev-specific settings
webpack.prod.js    // prod-specific settings
```
```
//webpack.dev.js

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  // dev-only config here
});
```
same for webpack.prod.js
# Template Repositories
One thing you might have noticed already is that setting up Webpack involves multiple files and directories, and a fair bit of configuration. Each time you set up a new project with Webpack, you may have to look at what you configured before to copy and paste the configuration you want to reuse. You may have also noticed that whenever you create a new repository on Github, there is an option near the top for a Repository template.

This is where template repositories can really come in handy. Any of your existing repositories can be converted to a template in its settings (right under where you can rename the repository, there is a checkbox for whether the repository is a template or not). If you check this box, congratulations! That’s all you need to do. Now, when you go to create a new repository, the Repository template dropdown will list any templates for you to select. Selecting one will mean your new repository will be a copy of the chosen template, not an empty one!

You may not know for sure what you might want or need in a template, but when you find yourself reusing a lot of setup code for multiple projects, you can make a new repository with all of the setup code you need and mark it as a template, then update it as necessary. Now you can select that template when creating a new project repository to save time, letting you dive into working on the project itself soone
