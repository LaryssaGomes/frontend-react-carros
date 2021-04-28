
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
        const config = {
            'Content-Type': 'multipart/form-data',
        }
        api.post('/api/users/', users, config)
    }

    loginUser(users){
        api.post('/api/users/login', users)
    }
}