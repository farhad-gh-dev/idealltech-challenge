![project screenshot](https://raw.githubusercontent.com/farhad-gh-dev/idealltech-challenge/master/src/assets/project-screenshot.png)

This project was a coding challenge.

## Start Guide

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Then, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

React JS, Typescript, Material UI

## Project Folder Structure

- In order to scale the application in the easiest and most maintainable way, I keep most of the code inside the features folder, which should contain different feature-based things. The idea is that you should be able to add or remove a feature and all of it's specific dependencies in a folder in features directory. a feature will contain everything form api calls to sub-components(the ones only used for this feature) and local hooks. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things.
- In contrast we also have components directory (no included in this project) which we put our shared components and layouts inside of.
- store directory keep our store hooks and store configuration + shared slices if there is any.
- In test directory we have our test utilities and data-factories.

This was inspired by bulletproof-react repo in github.

    .
    ├─── public
    └─── src
        ├─── assets
        ├─── features
        ├─── store
        └─── test

## Things That I Wanted To Work On More But DID NOT Have Enough Time For

- First things first, this is the first time I've worked with websocket and cryptocurrencies. It was definitely challenging but I learned a lot and enjoyed the journey. That being said, the lack of clarification in the project description was a bit daunting. Also the usage of the mentioned package was not clear at all.That’s why I had to make some decisions regardless of the test specifications, such as managing each data stream on a different socket instead of using a single socket for multiple streams.
- TEST! If I had more time I would add more tests, specifically for each row in the items table. I tried to implement this test but mocking the websocket was new to me, and with the time limitation in mind I decided to leave it out.
