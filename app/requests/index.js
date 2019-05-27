import { create } from 'apisauce';
	
const request = create({
  baseURL: 'http://localhost:9500/',
});

function login(username, password) {
  console.log(`Request: ${username} ${password}`);
  return request
    .post('/token')
    .then(response => {
      console.log('Request response', response);
      return {
        access_token: response.data.access_token,
        refresh_token: response.data.refresh_token,
      };
    })
    .catch(err => {
      console.log(err);
    });
}

const requestGeocode = create({});
function getGeocode(lat,lng) {
  return requestGeocode
    .get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+lat+','+lng+'&key=AIzaSyC_e8HQxDxD33LbCpASjQpKK_qUuJJ9QjU')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}

const requestWeather = create({});
function getWeather(lat,lng) {
  return requestWeather
    .get('http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lng+'&APPID=3a8d4fe88c13e7465479f381bcde9f8a')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}

function getToken(dataLog) {
  return request
    .post('/getToken',dataLog)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}

function getPartnerFocus(data) {
  return request
    .post('/getVendorList',data)
    .then(response => {
      return response.data;
    })
    .catch(err => {
      console.log(err);
    });
}


export default {
  login,
  getGeocode,
  getWeather,
  getToken,
  getPartnerFocus
};