## IdbCRUD - Starter Kit with Webpack 4

This starter kit is a good place to start IdbCrud with webpack 4. 

## Prerequisite

Make sure you installed npm locally.

## Setup

`npm install` will install all dependencies for you. 

## Up and Running

`npm start` will start webpack-dev-server and you can check `src/index.js` to see code. 


## How to use it?

Let's create webpack starter kit example together. 

### Overview: How it works

```
import IdbCRUD from 'idbcrud';
```
We start adding IdbCRUD to `src/index.js` webpack will bundle it to `dist/bundle.js` that's the reason we put  `<script src="./dist/bundle.js"></script>`
to our `index.html`. It'll work even with webpack-dev-server (npm start triggers this code) thanks to `webpack.config.js`

```json
devServer: {
    open: true,
    publicPath: '/dist/'
  },
```

### Creating Database

When we use indexedDB, we need a database and ObjectStore that stores our data.

With IdbCRUD all we need to do is create a `new IdbCRUD` object with some paramaters. 

Paramaters in order: 

1. Database Name 
2. Version
3. ObjectStore name
4. KeyPath (optional)
5. Autoincrement (optional: default false)


```js
const test = new IdbCRUD('test', 1, 'user', 'id');
```

This will create an indexedDB callled `test` with version no: `1`, ObjectStore `user` and keyPath id and Autoincrement false.

Let's add some data to our database


If we have array that includes objects as follows:

```js
const arrayData = [{
    "id": 1,
    "first_name": "Brad",
    "last_name": "Frost",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brad_frost/128.jpg"
  },
  {
    "id": 2,
    "first_name": "Adham ",
    "last_name": "Dannaway",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"
  },
  {
    "id": 3,
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
]

```

It's very easy to add all of them to db.

```js
test.addAll(data)
```

Let's add all data to dom with `getAll`. But don't forget to put userlist, userCardMarkup first

```js

const userlist = document.getElementById('userlist');

const userCardMarkup = (first_name, last_name, avatar) =>
  `<div class="card">
      <img src="${avatar}" alt="Avatar" style="width:100%;height:auto;">
      <div class="name-wrapper">
        <h4 class="name">
          <b>${first_name } ${last_name}</b>
        </h4>
      </div>
    </div>
    `

```

All we need is getAll, then we instert data to Html

```js
test.getAll().
then(arr => arr.map(object =>
  userlist.insertAdjacentHTML('beforeend', userCardMarkup(object.first_name, object.last_name,
    object.avatar))
));
```

### Adding one object

```js
const data = {
  "id": 4,
  "first_name": "Caleb",
  "last_name": "Ogden",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
}
```
```js
test.add(data)
```

### Updating object

```js
const data = {
  "id": 4,
  "first_name": "Updated",
  "last_name": "Ogden",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
}
```

```js
test.add(data)
```

We can update our object with `add` method.

### Deleting object by KeyPath
```js
test.delete(4)
```

### Deleting all objects 

```js
test.deleteAll(4)
```
### Deleting database

```js
test.deleteDB()
```

## Todo

- add create index feature.