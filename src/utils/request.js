import axios from 'axios'

export default function connect() {
    url = "https://antiquarian-inactio.000webhostapp.com/";
    return new Promise((resolve, reject) => {
        axios.post(url + 'connect.php')
            .then(function (response) {
                console.log(response);
                resolve(response);
            })
            .catch(function (error) {
                console.log(error);
                reject(error);
            });
    });
}