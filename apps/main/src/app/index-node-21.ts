// const events = require('events');
const user = require('./modules/user');

const userEmitter = new user();
userEmitter.on('userCreated', (id, name) => {
  console.log(`User was created successfully ${id} ${name} from user class`);
});

userEmitter.emit('userCreated', 5, 'user-name');




