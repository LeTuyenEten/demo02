export const partnerAction = payload => ({
    type: 'partner',
    payload,
  });
  
  export const partnerSuccess = payload => ({
    type: 'partner_SUCCESS',
    payload,
  });
  
  export const partnerFailure = payload => ({
    type: 'partner_FAILURE',
    payload,
  });
  
  export default {
    partnerAction,
    partnerSuccess,
    partnerFailure,
  };