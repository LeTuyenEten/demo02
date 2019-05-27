export const GeocodeAction = payload => ({
    type: 'Geocode',
    payload,
  });
export const geocodeSuccess = payload => ({
  type: 'geocode_success',
  payload,
});

export const geocodeFailure = payload => ({
  type: 'geocode_err',
  payload,
});

export const WeatherAction = payload => ({
  type: 'weather',
  payload,
});
export const WeatherSuccess = payload => ({
  type: 'Weather_success',
  payload,
});

export const WeatherFailure = payload => ({
  type: 'Weather_err',
  payload,
});

export const TokenAction = payload => ({
  type: 'Token',
  payload,
});
export const TokenSuccess = payload => ({
  type: 'Token_success',
  payload,
});

export const TokenFailure = payload => ({
  type: 'Token_err',
  payload,
});

export default {
    GeocodeAction,
    geocodeSuccess,
    geocodeFailure,
    WeatherAction,
    WeatherSuccess,
    WeatherFailure,
    TokenAction,
    TokenSuccess,
    TokenFailure
};