# webpack
Wtih ESM we can split our code across files and import/export only what we need. Browsers fetch each module invidually. So if we install 50 packages , the browser has to make 50 HTTP request this slows down performance.
<br><br>**Solution - Bundlers**<br><br>
They shorten and combine all the files into one or a few files, making our app load faster and become more production-ready.<br>
Webpack is one such bundler. However nowadays many frameworks and tools do basic configurations and bundling for us but its still important to learn the basics. 
Other such bundlers include vite , Parcel , rollup etc.
# Bundling 
In the ES6 modules lesson, we learned what an entry point is, what a dependency graph is, and how to add an entry point file to HTML as a module script. With bundling, the same concepts of entry points and dependency graphs apply: we provide the bundler with an entry point. It then builds a dependency graph from that file, combines all relevant files together, and then outputs a single file with all the necessary code included.

While it does this, we could also get it to do a whole bunch of other things, such as minifying our code, image optimizations, or even “tree shaking”. Most of these extra optimizations are out of the scope of this course; we will instead be focusing on basic bundling of JavaScript, and handling HTML, CSS, and images
# Webpack 
Webpack is a module bundler for JavaScript. That means:
- You write code in multiple small files (called modules) inside a src/ folder.
- Webpack combines (bundles) them into one or more large files that browsers can understand and use efficiently.
- Webpack can also handle HTML, CSS, images, and other assets (with proper loaders/plugins).
# Step-by-Step Webpack Setup
1. Create and move into a folder named webpack-practice.
```
mkdir webpack-practice && cd webpack-practice
```
2. Initialise a node project (This creates a package.json file)
```
npm init -y
```
3. Open package.json and ensure "type" : "module" or "common JS" is not there otherwise there are conflicts
4. Install webpack packages as a Dev Dependency (-D)
```
npm install -D webpack webpack-cli
```
Because Webpack is only needed during development, not in the final production code that the browser runs. <br>
After this:
- node_modules/ directory will appear: It stores actual Webpack code and its dependencies.
- package-lock.json will be created: It locks exact versions for package consistency.
5. Create a src folder and add JS modules
```
mkdir src && touch /src/index.js /src/greeting.js
```
and Inside these js files add the following code to create a simple module system where index.js will be our entry point : 
```
//greeting.js
export const greeting = "Hello, Twinkle !";
```
```
//index.js
import {greeting} from "./greeting.js"
console.log(greeting);
```
6. Create `webpack.config.js` in our webpack-practice directory
```
// webpack.config.js
const path = require("path");

module.exports = {
  mode: "development", // Use "production" when deploying
  entry: "./src/index.js", // Webpack starts bundling from here
  output: {
    filename: "main.js", // Final bundle name
    path: path.resolve(__dirname, "dist"), // Output folder (absolute path required)
    clean: true, // Cleans "dist" before building again
  },
};
```
7. Run webpack to bundle
```
npx webpack
```
Output:
- dist/ folder created (if not already)

- dist/main.js is generated — your entire bundled JavaScript
<br><br>
If you run:
```
node dist/main.js
```
Output : Hello, Odinite!<br><br>
That means Webpack successfully bundled the modules into one file.
# HTML handing
1. Install html-webpack-plugin
```
npm i -D html-webpack-plugin
```
Webpack can’t process HTML out of the box.
<br>
This plugin:
- Takes your custom HTML file.
- Automatically injects a <script> tag for the bundled JS.
- Outputs the final HTML in dist/.
2. Create a html template file in src folder and create a normal boilerplate
`touch src/template.html `
**DONT ADD SCRIPT TAG - the plugin does that for us**
3. Update webpack.config.js file to use plugin
```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // Tell plugin where the HTML is
    }),
  ],
};

```
4. Run webpack again - npx webpack
Output :
- Now, dist/ will contain: main.js (bundled JS)
- index.html (from your template, but with a <script> tag added)

If we now open dist/index.html in a browser and check the DevTools console — you’ll see: (open using live server)
```
Hello, Odinite!
```
We've built a complete Webpack development setup.
# Loading CSS
1. We need 2 new packages for CSS , Install them as dev dependency
```
npm i -D style-loader css-loader
```
- css-loader: Reads CSS files you import in JS and turns them into JS strings.
- style-loader: Injects those styles into the DOM via <style> tags.
  
2. Update webpack.config.js
add this : 
```
module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
```
- test: /\.css$/i tells Webpack: “Look for any .css file.”
- use: ["style-loader", "css-loader"] tells Webpack which tools (loaders) to use on those files.
**Important: Webpack applies these loaders in reverse order → CSS is read first (css-loader), then injected (style-loader).**
3. Create the css file
```
touch src/styles.css
```
add some css inside this file to test
4. Import css into JS file 
Inside src/index.js : 
```
import "./styles.css";
```
5. run again to bundle - npx webpack . Then check the live server 
# Loading Images 
There are 3 ways to do so depending on what we need we can configure accordingly : 
1. Case 1: Images inside CSS (e.g., background-image: url(...))
Already works with css-loader — no extra config needed.

2. Case 2: Images in HTML (<img src="odin.png">)
- Step 1: Install html-loader
```
npm install -D html-loader
```
- Step 2: Add loader in webpack.config.js
```
{
  test: /\.html$/i,
  loader: "html-loader",
}
```
This tells Webpack to process HTML files and resolve image paths inside them.
<br>
It updates <img src="./odin.png"> to point to the right image in your final build.

3. Case 3: Images in JavaScript (using import)
- Step 1: Add this rule:
```
{
  test: /\.(png|svg|jpg|jpeg|gif)$/i,
  type: "asset/resource",
}
```
-  Step 2: In your JavaScript:
```
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;
document.body.appendChild(image);
```
Why not just use image.src = "./odin.png"?<br>
Because after bundling, odin.png may be renamed (like 7a1b4f2e9.png), and only import will update the path correctly for you.
<br><br>
**Webpack Renames Assets** <br><br>
When Webpack bundles your images, it renames them using a hash (e.g., abc123.png) to prevent browser caching issues.
Don’t worry — if you use import, Webpack gives you the correct new path.
# Webpack Dev Server
Running npx webpack every time you change code is painful. So we make use of the webpack dev server : 
1. Install the dev server
```
npm i -D webpack-dev-server
```
2. Update webpack.config.js
```
//after output
devtool: "eval-source-map", // Shows proper file/line numbers in browser devtools

devServer: {
  watchFiles: ["./src/template.html"], // Ensures HTML changes trigger reloads
},

```
3. Start the server
This starts the server on a local port automatically
<br>
Now When you make changes:
- Webpack rebuilds automatically
- Browser auto-refreshes
- Errors point to the correct file/line in src/, not the main.js bundle
  
Final config should look like this :

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};

```
