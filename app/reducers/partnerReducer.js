  
export const partnerReducer = (state = {dataList:[]}, { type, payload }) => {
    
    
    switch (type) {
      case 'partner':
        return {
          ...state,
        };
      case 'partner_success':
        return {
          ...state,
          dataList: payload,
        };
      case 'partner_err':
        return {
          ...state,
          dataList: [],
        };
      default:
        return state;
    }
  };