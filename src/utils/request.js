import axios from 'axios'

export default function(endpoint, data) {
    console.log(endpoint, data);
    url = "https://antiquarian-inactio.000webhostapp.com/";
    return new Promise((resolve, reject) => {
        axios.post(url+endpoint, data)
        .then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    });
}