import axio from 'axios';

export let callSingUpApi = (body) => {
    return axio
        .post('http://localhost:4000/user/signUp', body)
        .then((data) => {
            return data;
        })
        .catch(err => { return err });
}