const mongoose = require('mongoose');
const Celebrity = require('./models/celebrity');


mongoose.connect('mongodb://localhost/movies', {
  userNewUrlParser: true
});

const celebrity = [
  {
    name: "The Hunger Games",
    occupation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    catchPhrase: "Suzanne Collins"
  },
  {
    name: "Harry Potter",
    occupation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      catchPhrase: "J.K. Rowling "
  },
  {
    name: "To Kill a Mockingbird ",
    occupation:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      catchPhrase: "Harper Lee"
  }

];

Celebrity.insertMany(celebrity)
  .then(celebrity => {
    console.log(`Success! Added ${celebrity.length} celebrity to the database.`);
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
  });