# Library Name

## Dependencies

1. [Node](https://nodejs.org/en/) (latest)
2. [NPM](https://www.npmjs.com/) (latest)

## Getting started

1. Clone the project
2. Run `npm install`
3. Run `npm run dev`
4. Go to http://localhost:5173 in your browser

## Project Structure

### assets

Holds assets that are processed as part of the build, like `.less` files.

### dist

Holds the files used to create an npm package. To iterate to a new npm package version, increment the version number in `package.json` then run `$ npm run build`.

### public

Holds static files that are not processed as part of the build, like `.svg` files. The contents of this folder are copied to `dist` with each build.

### src

This is where the source code of each component is located. This is the directory targeted during the build process to generate the distribution files.

## Contribution Guide

Here are the general steps to adding a component to the library:

1. Add a js file with your component's definition to the `src` folder.

2. Export your component by adding the following line to the `src/main.js` file:

   ```javascript
   export {default as YourComponent} from './YourComponent.js';
   ```

3. Increment the version patch number:

   ```bash
   npm version 1.0.1    # assuming the previous version was 1.0.0
   ```

4. Run this command to create the files for the dist folder:

   ```bash
   npm run build
   ```

5. Install package for local development:

   a. Create a tarball file:

   ```bash
   npm pack
   ```

   b. Get the path to your tarball file and run the following command in the project you want to install your package:

   ```bash
   npm install path-to-your-tarball
   ```

   c. Now your component can be imported into the project using:

   ```javascript
   import {YourComponent} from 'library-name';
   ```

6. Generate a package via GitHub actions:

   a. Push all code to your branch.

   b. Put in a PR for your branch.

   c. When your PR is approved and merged, GitHub will automatically generate a new npm package.

   d. To install your new package in a project, click packages on the right side of the library repo and copy/paste the command there into the project you want to install it.

   e. Now your component can be imported into the project using:

   ```javascript
   import {YourComponent} from 'library-name';
   ```

## Components

### Example Componrnt

The Example component can be added to a page as a custom element:

```html
<example-component example-attribute="foo"></example-component>
```

Trigger some JavaScript on the component:

```javascript
document.querySelector('example-component').dispatchEvent(
  new CustomEvent('example-event', {
    detail: {
      exampleDetail: 'foo'
    }
  })
);
```
