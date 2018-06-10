import IdbCRUD from 'idbcrud';



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


const data = {
  "id": 4,
  "first_name": "Caleb",
  "last_name": "Ogden",
  "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"
}



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


const test = new IdbCRUD('test', 1, 'user', 'id');


test.addAll(arrayData);



let allUsers = test.getAll().
then(arr => arr.map(object =>
  userlist.insertAdjacentHTML('beforeend', userCardMarkup(object.first_name, object.last_name,
    object.avatar))
));

test.add(data);