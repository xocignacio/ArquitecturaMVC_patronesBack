import  usersDaoArray from "../dao/user.dao.js";

class UserService {           ////////// capa intermedia de abstraccion
constructor() {
    this.userDao = new usersDaoArray();
}
 getUsers = async () => {
    return await this.userDao.getAll();
 }
 addUser = async (user) => {
    return await this.userDao.save(user);
 }
 
}

const userService = new UserService();

export default userService;