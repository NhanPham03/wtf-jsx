# wtf-jsx

Project is based on this [article](https://jasonformat.com/wtf-is-jsx/).

## Description

A barebones example of a React-like JSX renderer.
It features a few functions, and little to no dependencies.

There is no server to run this project, just run the commands and open `index.html` file in the browser.

## Project Structure

Inside of this project, you'll see the following folders and files:

```text
/
├── dist/                         # Created after running `npm run build`
│   └── main.js                   # Babel-transpiled output
│
├── src/
│   └── main.jsx                  # Contains h(), render(), and example code
│
├── index.html                    # HTML webpage
├── styles.css                    # Stylesheet
└── package.json
```

## Commands

Please run these commands from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install` or `npm i`  | Installs dependencies                            |
| `npm run build`           | Compiles `src`  to `./dist/`                     | 
