## script for config section

- In this part of the crash course I'm going to show you how to configure a modern react development environment.
- If you just want to start building you can use the command `npx create-react-app` followed by your project name and move on to the next chapter of the video.
- I wanted to include this section for people who really want to understand how everything is connected.
- I'll try to make if quick because configuring your environment might be the most boring part of modern web development.
- I've included a Steps.md file in the github repository if you need to reference specific commands.
- Everything should work together with the most modern package versions but if you run into errors or issues you can use the version numbers for packages specified in the Steps.md file.

- The only prerequizite for this video is to install node and npm.

- you can test to see if you have these install by typing `node -v` and `npm -v` in the terminal.

- our first step will be to initialize our directory as an npm directory you can do this by typing `npm init -y`.
- the `-y` just tells npm to skip the inititialization questions.
- now we have a `package.json` file in our root directory.
- you can think of `package.json` as a manifest for your project.
- if you want to share your project configuration with anyone all they need is your `package.json` file and to run `npm install` and npm will install everything specified in the package.json.

- next we are going to create a src directory in our project root.
- this will be where we keep the source code for our project.

- It's a good idea to form the habit of using version control even if you arn't planning to upload to github.
- initialize your root directory as a `git` repository by typing `git init` while in the root of your project.
- create a file called `.gitignore` and add the following strings of text to it.

```
# node_modules
node_modules/
.DS_Store
.cache/
dist/
.env
coverage/
.vscode/
.parcel-cache
```

- everything in your `.gitignore` will not be tracked by `git`.

- You almost always want to have `node_modules` in your `.gitignore` it's where npm installs packages but as stated earlier if anyone has your package.json they can install the packages from that, so omitting `node_modules` will reduce your project size considerably when trying to share it.

- .DS_Store is a file hidden in macOS directories. it's not necessary to share and would just clutter up our project root.

- .cache/, dist, and .parcel-cache are all files that will be created by our task runner `parcel` and don't need to be included.

- finally .env will ensure any environment variables we create won't acedentally get shared and .vscode/ will remove any editor specific settings we have enabled locally on our machine.

- now that we have git set up we can install some npm packages that will help with code formatting and linting.

- First we will install prettier with the command `npm install -D prettier`.
- If using VSCode we can install the pritter extention and add some extra settings to make prettier format on save and run only in directories that we want it to.

- search `prettier` in the vsCode extention store it should be the first option.
- go to your vs code settings and search 'prettier config' check the box that will require a config file for prettier to run. This will ensure prettier wont run in projects where we dont want it to.
- while still in settings search 'format on save' check the box that tells vs code to use a file formatter when saving a file.

- since we told prettier not to run unless there is a config file lets create one really quick.

- create a file named `.prettierrc` in your project root.
- place an empty javascript object in it. `{}`.
- that's it, since we are just going to be using the default prettier settings there is nothing to put in this file but we still need it because we just told prettier that it needs a config file to run in a directory.

- next let's install and configure esLint run the following command `npm install
