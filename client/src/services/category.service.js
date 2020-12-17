
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
        debugger
       return axios({
            method: 'post',
            url: url + '/getBuisnessByText',
            data:{text:text}
        }).then(function (response) {
            debugger
            console.log("response")
            console.log(response);
            debugger
            return response.data
        }).catch(err => {
            debugger
             console.log(err)});
    }
    getPopularCategories() {
        debugger
        return axios.get(url + "/getPopularCategories").then(response => {
            console.log(response)
            return response.data
        }).catch(e => { console.log(e); });
    }



}

export default new CategoryService()