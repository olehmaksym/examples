const button = document.querySelector('button');

button.addEventListener('click', creteTable);

function creteTable() {
  const users = createUsers(20);

  const table = document.createElement('table');

  const thead = Object.keys(users[0])
    .map(key => `<th>${key}</th>`)
    .join('');

  const getTrow = (user) => Object.values(user)
    .map(key => `<td>${key}</td>`)
    .join('');

  const tbody = users.map(user => `<tr>${getTrow(user)}</tr>`).join('');
  
  table.innerHTML = `<thead><tr>${thead}</tr></thead><tbody class="lol">${tbody}</tbody>`;

  document.querySelector('section').appendChild(table);
}

function User(name, age, isAdmin) {
  this.name = name;
  this.email = name.toLowerCase() + age + '@gmail.com';
  this.age = age;
  this.isAdmin = isAdmin;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomRole() {
  return Math.random() > 0.5
}

function getRandomName() {
  const names = [
    'Maks',
    'Peter',
    'Artem',
    'Nik',
    'Anna',
    'Vadim',
    'Alisa',
    'Penelopa',
    'Victor',
    'Mery'
  ];

  return names[getRandomInt(0, names.length)];
}

function createUsers(quantity = 5) {
  const users = [];
  for (let i = 0; i < quantity; i++) {
    users.push(new User(getRandomName(), getRandomInt(20,50), getRandomRole()))
  }

  return users;
}