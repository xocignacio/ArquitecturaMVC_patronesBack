import UserService from "../services/user.service.js";

const home = (req,res) => {
    res.render('home');
}
const users = async(req,res) => {
    let users = await UserService.getUsers(); //// trae a los usuarios independientemente de la persistencia 
    res.render('users', {users})           ///// los envio 
} 
export default {
    home,
    users
}


/////////// estructura mvc toda la informacion que se trabaja esta pensada para renderizarse 