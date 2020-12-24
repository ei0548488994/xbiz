import axios from 'axios';

var url = 'http://localhost:3003/api';
class BusinnesService {
    createBusinessPerUser() {

        return axios.post(url + '/createBusinessPerUser').then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        //debugger
    }
    getBusiness(id) {
        return axios.get(url + `/BusinessDetails/${id}`).then(response => {
            //debugger
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        //debugger
    }
    sendMail(contact) {
        //debugger;
        var contact = contact;
        return axios({
            method: 'post',
            url: 'http://localhost:3003/sendMail/send',
            data: { contact: contact }
        }).then(function (response) {
            //debugger
            console.log("response")
            console.log(response);
            //debugger
            return response.data
        }).catch(err => {
            //debugger
            console.log(err)
        });
    }
    addClicksToBusiness(businessId) {
        //debugger
        return axios.get(url + `/addClicksToBusiness/${businessId}`).then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        //debugger
    }

    addShareToBusiness(businessId, idUser) {
        debugger
        return axios({

            method: 'post',
            url: 'http://localhost:3003/api/addShareToBusiness',
            data: {
                businessId: businessId,
                idUser: idUser
            }
        }).then(function (response) {
            debugger
            console.log("response" + response);
            debugger
            return response.data
        }).catch(err => {
            console.log(err)
        });
    }
    getAllFavoraits(idUser) {
        debugger
        return axios({
            method: 'post',
            url: `http://localhost:3003/api/${idUser}/getAllFavoraits`,
            // data: {
            //     idUser: idUser
            // }
        }).then(function (response) {
            debugger
            console.log("response" + response);
            debugger
            return response.data
        }).catch(err => {
            console.log(err)
        });
    }

    deleteFavoraitsByIdBussiness(businessId,idUser) {
        debugger
        return axios ({
            method: 'post',
            url: url + `/${idUser}/deleteFavoraitsByIdBussiness/${businessId}`,
        })
        .then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        debugger
    }
    
}

export default new BusinnesService()