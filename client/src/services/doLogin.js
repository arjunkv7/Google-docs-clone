import axio from 'axios';

export let callLoginApi = (body) => {
    return axio
        .post('http://localhost:4000/user/login', body)
        .then((data) => {
            return data;
        })
        .catch(err => { return err });
}