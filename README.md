# Pawel Stanecki

## Production ready build

Production ready build is available on [http://kendyl93.github.io/donation](here).

## Used libraries:

- `styled-components` - I decided to use it since it is an easy and convinient way to create, manage and share components style.
- `react-final-form` - This might be an overkill to use that library for such a small form, however thanks to its hooks I can easily share form state across all Form children without passing it as props. It just helped me saving some time to implement it from scrach.
- `react-testing-library` - used to write unit tests. There is no 100% code coverage. I have created unit tests only for some most important logic and a few components. I created also some snapshot testing. Unit tests are for the developer but I wanted to create some basic snapshots to show that I am using it in the daily basis.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:update`

Launches the test runner in NON watch mode. It updates snapshot tests files.

### `npm run build` or `npm run predeploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run deploy`

Deploys newly created build to github pages.
