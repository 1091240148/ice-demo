import { createStore } from 'ice';
import user from './models/user';
import login from './models/login';
// console.log("user",user,login)
const store = createStore({ user, login });

export default store;
