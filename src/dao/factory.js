import config from '../config/config.js';
const PERSISTENCE = config.app.PERSISTENCE;
export default class PersistenceFactory {
    static getPersistence = async() => {
        switch (PERSISTENCE) {
            case "MEMORY":
                let {default:UserDaoMemory} = await import ('./user.dao.js')
                return new UserDaoMemory();
            case "FILESYSTEM":
                let {default:UserDaoFile} = await import ('./usersFile.dao')
                return new UserDaoFile();
            case "MONGUITO":
                const connection = mongoose.connect('mongodb+srv://xocignaciodb:mongoatlasdb@cluster0.qe9tcs1.mongodb.net/?retryWrites=true&w=majority ')
                 return true;      
            }

    }
}