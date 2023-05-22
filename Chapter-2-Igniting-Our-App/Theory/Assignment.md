### What is NPM?

- NPM stands for Node Package Manager. It helps to install third-party libraries and dependencies to our app.

### What is Parcel/Webpack? Why do we need it?

- Parcel/Webpack are Module Bundler. It is used to bundle our code and reduce the size of our app on the production.

  We use it for:

  1. Minification
  2. Image Optimization
  3. Transpiling
  4. Caching
  5. Hot Module Replacement
  6. Code Splitting

### What is parcel-cache'

- parcel-cache is a cache folder automatically created by parcel to store the bundled / build data for caching purpose

### What is “npx”?

- npx is **a command-line tool** that comes bundled with NPM(Node Package Manager) since version 5.2.0.
- It is used to execute the packages directly from the command-line without the need to install them globaly or specify the full path

### What is the difference between dependencies vs devDependencies

- There are two types of dependencies in JavaScript project based on NPM.
- Dependency and DevDependency
- Dependencies are the packages that your application or project directly depends on in order to run properly in the **production environment**
- DevDependencies are packages that are only needed during **development** and **build process** of your project.

### What is Tree Shaking?

- Tree Shaking is a technique used in JS Bundlers like Webpack, Parcel to remove unwanted code from the module

### What is Hot Module Replacement?

- HMR is a feature to module bundler like webpack that allows you to automatically updates the page when we save the changes in the code

### List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words.

- 5 super powers of Parcel

1. Transpiling
2. Image Optimization
3. HMR
4. Dev Server
5. Minification

- HMR(Hot Module Replaclement) helps to reload the page automatically whenever there is a change which is saved
- Transpiling: Parcel uses Babel under the hood to convert the code which Browser's understand
- HTTPS: Parcel give HTTPS to run a HTTPS based project on the local environment

### What is '.gitignore? What should we add and not add into it?

- .gitignore is a file that git should ignore adding the files which are mentioned in it.
- we general put what we can re-create in this file like node_modules, dist folder, .parcel-
- we shouldn't add files which are important to run the appllication like .package.json, .package-lock.json

### What is the difference between 'package.json' and 'package-lock.json'

- package.json is a file that contains metadata of our project and necessary dependencies of our app
- whereas package-lock.json is a file automatically generated with package.json file when installing any packages. It keeps the exact version of the dependencies and transitive dependency.

### Why should I not modify 'package### lock.json'?

- It is generally not a good idea to modify the package-lock.json
- It can create lots of inconsistency in the project
- If we want to modify better modify the package.json file

### What is 'node_modules? Is it a good idea to push that on git?

- node_modules directory is a folder which stores all the installed packages and their dependencies for a specific project
- node_modules directory gets bigger and bigger as our project grows. So, we put in the .gitignore file to stop uploading to the verion control system
- If we cloned the project, we can get the node_modules easily by running npm install or yarn add cmd so the package manager pulls the data from the package.json file and install the necessary packages to our project.

### What is the 'dist' folder?

- dist folder stands for distribution or distributable. It contains the minified version / compiled code of our app.
- It is a production ready code which is ready to deploy

### What is 'browserlists'

- The browserslist is a package to target the specify browser as we need
- we can config the browserslist by creating .browserslistrc file or we can edit in the package.json file by adding a key

### Read about dif bundlers: vite, webpack, parcel

- Learning

### Read about: ^ - Caret and ~ - Tilda

- ~ => will update to **future patch version**
- ^ => will update to **future minor** and **patch verion**

### Read about Script types in HTML (MDN Docs)

- Done, but need to re-read again
