import axio from 'axios';

export let getMydocuments = (userName, token) => {
    return axio
        .get(`http://localhost:4000/user/myDocuments?userName=${userName}`, {
            headers: {
                token: token
            }
        })
        .then((data) => {
            return data.data.data;
        })
        .catch(err => { throw err });
}