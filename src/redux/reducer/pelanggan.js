import {GET_PELANGGAN, ADD_PELANGGAN, GET_PELANGGAN_BY_ID, EDIT_PELANGGAN,DELETE_PELANGGAN} from '../type/pelanggan';

const initialState = {
  pelanggan: [],
  pelangganById: [],
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PELANGGAN:
      return {
        ...state,
        pelanggan: action.payload,
      };
    case GET_PELANGGAN_BY_ID:
      return {
        ...state,
        pelangganById: action.payload,
      };
    case ADD_PELANGGAN:
      return {
        ...state,
        message: action.payload.message,
      };
      case EDIT_PELANGGAN:
        return {
          ...state,
          message: action.payload.message,
        };
      case DELETE_PELANGGAN:
        return {
          ...state,
          message: action.payload.message,
        };
    default:
      return {
        ...state,
      };
  }
};
