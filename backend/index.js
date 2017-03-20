const UserRepository = require('./repository').User;

UserRepository.findUserByName('Nombre', (err, results) => {
  console.log(results);
});
