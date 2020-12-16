
import axios from 'axios';

 var url = 'http://localhost:3003/api';
class CategoryService {
    getAllCategories() {
        return axios.get(url + '/getAllMainCategories').then(response => {
            console.log(response)
            return response.data
        }).catch(o => {
             console.log(o); });
    }
    getResultOfSearchByCategory(text) {
        return axios.get(url + `/getBuisnessByCategory/id=${text}`).then(response => {
            console.log(response)
            return response.data
        }).catch(o => { console.log(o); });
    }
    getResultSearchByText(text){
       return axios({
            method: 'post',
            url: url + '/getBuisnessByText',
            data:{text:text}
        }).then(function (response) {
            console.log("response")
            console.log(response);
            return response.data
        }).catch(err => {
             console.log(err)});
    }


}

export default new CategoryService()