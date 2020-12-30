For our stack we are using

- ReactJS
- Redux
- Axios
- Reactstrap
- Redux Thunk

## File Structure

```
test-app/
  |--src/
  |  |--assets
  |  |  |--images
  |  |  |--styles
  |  |--container
  |  |  |--dashboard
  |  |  |  |--components
  |  |  |  |  |--addItemView
  |  |  |  |  |  |--index.js
  |  |  |  |  |--header
  |  |  |  |  |  |--index.js
  |  |  |  |  |--tableView
  |  |  |  |  |  |--components
  |  |  |  |  |  |  |--index.js
  |  |  |  |  |  |--index.js
  |  |  |  |--index.js
  |  |--redux
  |  |  |--actions
  |  |  |--constants
  |  |  |--reducers
  |  |  |  |--data.js
```

## Install application dependencies

```
$ cd test-app/
```

```
$ npm install
```

$ npm start

## Linting

Linting keeps our code to a certain standard. We are following the standard Airbnb ES6 styling.

Linting is mandatory and must be integrated as part of your work flow. All pull requests will be rejected if they are not linted.

Features:

- Displayed data from api in table format.
- Used redux to store data with redux-thunk as middleware.
- Used axios middleware for api call.
- Pagination has been done with next and previous buttons.
- Add new row
- Edit row
- Delete row
