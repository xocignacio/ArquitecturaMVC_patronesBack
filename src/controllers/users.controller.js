import UserService from "../services/user.service.js";


const getUsers = async (req,res) =>{
    let users = await UserService.getUsers();
    res.send({users})
}

const saveUser = async (req,res) => {
    let user = req.body;
    let result = await UserService.addUser(user);
    res.send ({result})
} 

export default {
    saveUser,
    getUsers
}