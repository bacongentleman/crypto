const { default: axios } = require("axios");
const apiKey = '7db420e7-ba6d-4fe4-8b3d-792e7978f9ef'
const header = { headers: { 'X-CMC_PRO_API_KEY': apiKey, Accept: 'application/json'}}
axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', header)
    .then(function(res){
        console.log(res.data.data[0])
    })