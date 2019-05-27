  
export const geocodeReducer = (state = {address:''}, { type, payload }) => {
    
    
    switch (type) {
      case 'Geocode':
        return {
          ...state,
        };
      case 'geocode_success':
        let address = ''
        if(typeof payload != 'undefined' && typeof payload.results != 'undefined'){
          address = payload.results[0].address_components
        }
        return {
          ...state,
          address: address,
        };
      case 'geocode_err':
        return {
          ...state,
          address: '',
        };
      default:
        return state;
    }
  };

  export const weatherReducer = (state = {weather:''}, { type, payload }) => {
    
    
    switch (type) {
      case 'weather':
        return {
          ...state,
        };
      case 'weather_success':
        weather = payload.weather[0];
        weather.temp = payload.main.temp;
        return {
          ...state,
          weather: weather,
        };
      case 'weather_err':
        return {
          ...state,
          weather: '',
        };
      default:
        return state;
    }
  };

  export const tokenReducer = (state = {token:''}, { type, payload }) => {
    
    
    switch (type) {
      case 'Token':
        return {
          ...state,
        };
      case 'Token_success':
        return {
          ...state,
          token: payload,
        };
      case 'Token_err':
        return {
          ...state,
          token: '',
        };
      default:
        return state;
    }
  };