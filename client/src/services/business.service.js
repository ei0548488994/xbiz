import axios from 'axios';

 var url = 'http://localhost:3003/api';
class BusinnesService {

    createBusinessPerUser() {
        
        return axios.post(url + '/createBusinessPerUser').then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
             console.log(o); });
             debugger
    }
    addClicksToBusiness(businessId){
        debugger
        return axios.get(url +`/addClicksToBusiness/${businessId}`).then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
             console.log(o); });
             debugger
    }
  
}

export default new BusinnesService()