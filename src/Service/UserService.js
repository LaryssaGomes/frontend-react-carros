
import api from './HttpService';

export default class UserService{

    constructor(){}

    getUsers() {
        api.get('/api/users/')
            .then((response) => response.data)
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
    }
    
    createUser(users){
        api.post('/api/users/', users)
    }

    loginUser(users){
        api.post('/api/users/login', users)
    }
}