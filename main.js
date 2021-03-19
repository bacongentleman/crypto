const exp  = require("express");
const app = exp();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');
//const https = require('https');
//const fetch = require('fetch');
const { default: axios } = require("axios");

app.use(exp.urlencoded({extended: true}));
app.use(exp.json());
app.use(exp.static(path.join(__dirname, '/statics')))

const cap_key = "29b629cc-d014-451a-8743-570606da3840";

const cal_key ="cs2e57CTxG6z2hGNT8oo04EOpfv5ShzyacKWZlVP";
const cap_uri = "pro-api.coinmarketcap.com";
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'/views'));

const apiKey = '7db420e7-ba6d-4fe4-8b3d-792e7978f9ef'
const header = { headers: { 'X-CMC_PRO_API_KEY': apiKey, Accept: 'application/json'}}

app.get('/', (req, res, next)=>{
    axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', header)
        .then(function(d){
            const apiData = d.data.data;
            res.render('index', {data: apiData})
    })
    
})


//app.get('/', (req, res)=>{
    // const options = {
    //     hostname: cap_uri,
    //     path: '/v1/cryptocurrency/listings/latest',
    //     method: "GET",
    //     qs:  {
    //         'start': '1',
    //         'limit': '5000',
    //         'convert': 'USD'
    //     },
    //     headers: {
    //         'X-CMC_PRO_API_KEY': cap_key,
    //         'Accepts': 'applications/json'
    //     }
    // }
    // const reqs = https.request(options, res => {
    //     console.log(`statusCode: ${res.statusCode}`)
      
    //     res.on('data', d => {
    //       process.stdout.write(d)
    //     })
    //   })
      
    //   reqs.on('error', error => {
    //     console.error(error)
    //   })




    // const requestOptions = {
    // method: 'GET',
    // uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    // qs: {
    //     'start': '1',
    //     'limit': '5000',
    //     'convert': 'USD'
    // },
    // headers: {
    //     'X-CMC_PRO_API_KEY': cap_key
    // },
    // json: true,
    // gzip: true
    // };

    // rp(requestOptions).then(response => {
    // console.log('API call response:', response);
    // }).catch((err) => {
    // console.log('API call error:', err.message);
    // });


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})