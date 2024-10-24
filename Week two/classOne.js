/*
Node Package Manager
Understanding NPM

npm (Node Package Manager) is the default package manager for Node.js.
It's a command-line tool that allows developers to easily share and reuse code, 
and manage project dependencies.

Why is it important?
It simplifies the process of installing, updating, and managing third-party libraries and tools.

Brief history
Created by Isaac Z. Schlueter in 2010.
Became the official package manager for Node.js in 2011.
Now maintained by npm, Inc., a subsidiary of GitHub (owned by Microsoft).

# Initialize a new Node.js project
npm init
# Install a package and add to dependencies
npm install package-name
# Install a specific version of a package
npm install package-name@version
# Install a package as a dev dependency
npm install package-name --save-dev
# Uninstall a package
npm uninstall package-name
# Update packages
npm update
# List installed packages
npm list
# Run a script defined in package.json
npm run script-name


Understanding Package.json
Diving deeper into packages in NPM
The package.json file is the heart of any Node.js project. It contains metadata about the project and lists its dependencies.
{
  "name": “techcrush-project",
  "version": "1.0.0",
  "description": "A project to explain npm",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.17.1"
  },
  "devDependencies": {
    "jest": "^27.0.6"
  }
}

name: The name of your project
version: The current version of your project
description: A short description of your project
main: The entry point of your application
scripts: Custom scripts that can be run with `npm run`
dependencies: Packages required for the application to run
devDependencies: Packages only needed for development and testing

Understanding Package.json - SemVer
Semantic Versioning is a versioning scheme that uses a three-part version number: MAJOR.MINOR.PATCH
MAJOR: Incompatible API changes
MINOR: Add functionality (backwards-compatible)
PATCH: Bug fixes (backwards-compatible)

In `package.json`, you can specify version ranges:
`"express": "4.17.1"` - Exact version
`"express": "^4.17.1"` - Compatible with 4.17.1 or later, but < 5.0.0
`"express": "~4.17.1"` - Compatible with 4.17.1 or later, but < 4.18.0
`"express": "*"` - Latest version (not recommended for production)

*/
