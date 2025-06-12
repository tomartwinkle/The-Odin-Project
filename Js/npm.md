# npm
As code gets bigger and more complex , we might help from importing and using 3rd party code. To find and import such codes we take help from package managers, one such is npm.
<br>
**npm** is a package manager - It's a huge repository that consists of all libraries , plugins etc. and it provides us with a command line tool via which we install these tools (packages). This way we can have all our required tools(packages) downloaded in our system locally and then we can import them into our own files, or even publish our own code into npm.
<br>Ps : it doesnt actually stand for node package manager 
# package.json
Our npm revolves around a file called package.json which is a JSON file that is the **blueprint for our dependencies and node scripts**.It tracks : 
- project name and version
- dependencies
- scripts ( custom commands )
- metadata like license and description
`npm install` does the following :
- reads the package.json
- installs all listed dependencies
- creates a node_modules folder of all those packages
- creates/updates package-lock.json
# Real world usecase and workflow
1. Create package.json
```
npm init -y
```
2. install a package
```
npm install lodash
```
lodash is now automatically added to our dependencies inside package.json.

3. use the package in code 
```
import ... from 'lodash' ;
```
