# Microsoft FIU TypeScript Workshop
TypeScript workshop for FIU students.

We assume that you're already using [Node.js](https://nodejs.org/) with [npm](https://www.npmjs.com/).
You may also want to get a sense of [the basics with React](https://facebook.github.io/react/docs/hello-world.html).

## Install create-react-app

We're going to use the create-react-app because it sets some useful tools and canonical defaults for React projects.
This is just a command-line utility to scaffold out new React projects.

```shell
npm install -g create-react-app
```

## Create our new project

We'll create a new project called `my-app`:

```shell
create-react-app my-app --scripts-version=react-scripts-ts
```

[react-scripts-ts](https://www.npmjs.com/package/react-scripts-ts) is a set of adjustments to take the standard create-react-app project pipeline and bring TypeScript into the mix.

At this point, your project layout should look like the following:

```text
my-app/
├─ .gitignore
├─ images.d.ts
├─ node_modules/
├─ public/
├─ src/
│  └─ ...
├─ package.json
├─ tsconfig.json
├─ tsconfig.prod.json
├─ tsconfig.test.json
└─ tslint.json
```

Of note:

* `tsconfig.json` contains TypeScript-specific options for our project.
  * We also have a `tsconfig.prod.json` and a `tsconfig.test.json` in case we want to make any tweaks to our production builds, or our test builds.
* `tslint.json` stores the settings that our linter, [TSLint](https://github.com/palantir/tslint), will use.
* `package.json` contains our dependencies, as well as some shortcuts for commands we'd like to run for testing, previewing, and deploying our app.
* `public` contains static assets like the HTML page we're planning to deploy to, or images. You can delete any file in this folder apart from `index.html`.
* `src` contains our TypeScript and CSS code. `index.tsx` is the entry-point for our file, and is mandatory.
* `images.d.ts` will tell TypeScript that certain types of image files can be `import`-ed, which create-react-app supports.

## Setting up source control

Our testing tool, Jest, expects some form of source control (such as Git or Mercurial) to be present.
For it to run correctly, we'll need to initialize a git repository.

```sh
git init
git add .
git commit -m "Initial commit."
```

> Note: if you've cloned this repository, you won't have to run the above at all.

## Overriding defaults

The TSLint configuration that react-scripts-ts sets us up with is a bit overzealous.
Let's fix that up.

```diff
 {
-  "extends": ["tslint:recommended", "tslint-react", "tslint-config-prettier"],
+  "extends": [],
+  "defaultSeverity": "warning",
   "linterOptions": {
     "exclude": [
       "config/**/*.js",
       "node_modules/**/*.ts"
     ]
   }
 }
```

[Configuring TSLint](https://palantir.github.io/tslint/usage/configuration/) is out of the scope of this starter, but you should feel free to experiment with something that works for you.

## Running the project

Running the project is as simple as running

```sh
npm run start
```

This runs the `start` script specified in our `package.json`, and will spawn off a server which reloads the page as we save our files.
Typically the server runs at `http://localhost:3000`, but should be automatically opened for you.

This tightens the iteration loop by allowing us to quickly preview changes.

More info [link] https://github.com/Microsoft/TypeScript-React-Starter/edit/master/README.md
