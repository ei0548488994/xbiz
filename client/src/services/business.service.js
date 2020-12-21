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
        debugger
    }
    getBusiness(id) {
        return axios.get(url + `/BusinessDetails/${id}`).then(response => {
            debugger
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        debugger
    }
    sendMail(contact) {
        debugger;
        var contact = contact;
        // axios.get(`http://localhost:3003/sendMail/email=${email}`)
        //     .then(response => {
        //         debugger;
        //         return response;
        //         console.log("succsess" + email);
        //         debugger
        //     }).catch(response => console.log(response));
        return axios({
            method: 'post',
            url: 'http://localhost:3003/sendMail/send',
            data: { contact: contact }
        }).then(function (response) {
            debugger
            console.log("response")
            console.log(response);
            debugger
            return response.data
        }).catch(err => {
            debugger
            console.log(err)
        });
    }
    addClicksToBusiness(businessId) {
        debugger
        return axios.get(url + `/addClicksToBusiness/${businessId}`).then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
            console.log(o);
        });
        debugger
    }

}

export default new BusinnesService()