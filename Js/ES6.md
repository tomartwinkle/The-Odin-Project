#ES6 
ES6 modules - ESM : It is a way to split and organise JS code across multiple files in a safe , organized manner.
### Why ES6 Modules?
Before ESM, JavaScript relied on patterns like:

- The Module Pattern (via IIFE) to create isolated scopes.

- Global variables which could clash when many files are included in <script> tags.

- Problem: All scripts share the global scope.
- ESM Solution: Each file is its own private module scope, and you explicitly export/import what you need.
<br><br>
`export` → to expose something from a module.
`import` → to use something from another module.
# 2 types of Exports : named and default 
Lets assume we have 2 js files one.js and two.js.
## Named 
export them using the `export` keyword and their names in 2 ways in one.js file :
```
export const greeting="Hello, Odinite!";
export const farewell = "Bye bye, Odinite!";
```
or
```
const greeting = "Hello, Odinite!";
const farewell = "Bye bye, Odinite!";
export {greeting,farewell};
```
Import the variable u need to ./two.js file from ./one.js file like so : 
```
import {greeting,farewell} from "./one.js";
console.log(greeting);
```
To do named imports, we must specify the names of the things we want to import inside { } and provide the path to the file we’re importing from 
(when we deal with importing third-party libraries later, you can just use the name of the library instead of a full file path).
## Default 
- In contrast to named exports, a file can only default export a single thing.
- Something exported this way does not have a name attached to it, so when you import it somewhere, you can decide what name to give it.
Lets default export our variable greeting from one.js :
```
export default greeting="Hello, Odinite!";
```
or 
```
const greeting = "Hello, Odinite!";
export default greeting;
```
Lets import this in two.js but this time our browser knows there's only 1 thing exported from the file one.js so we dont need its name , we can name it anything : 
```
import helloOdinite from "./one.js";
console.log(helloOdinite);
```
## Both combined 
we can combine both and use them in this way as well : 
```
//one.js
export const greeting = "Hello, Odinite!";
export default farewell = "Bye-bye, Odinite!";
```
```
//two.js
import {greeting} , farewell from "./one.js";
```
**IMPORTANT: Run with a Server!** <br>
Because ESM relies on relative paths and uses stricter security, you must run the files using a local server.
- Use Live Server extension in VS Code.
- Opening HTML directly with file:// won’t work due to CORS restrictions.
# Entry Points 
when we use ESM , instead of adding every js file using script tag we will only link the entry point js file with the `type="module"` attribute that enables ESM and lets the browser check the dependency and import export accordingly. 
```
<script src="two.js" type="module"></script>

```
**Why is our entry point two.js ????** 
- two.js imports variables from one.js ==> this means two.js depends on one.js
- Importer always depends on its exporter
# Common JS(CJS)
CJS is commonly used in node.js and other backend languages where we use `require` and `module.exports` instead of import and export 
