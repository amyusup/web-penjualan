import {GET_BARANG, GET_BARANG_BY_KODE, ADD_BARANG, EDIT_BARANG, DELETE_BARANG} from '../type/barang';

const initialState = {
  barang: [],
  barangByKode :[],
  message:''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BARANG:
      return {
        ...state,
        barang: action.payload,
      };
      case GET_BARANG_BY_KODE:
      return {
        ...state,
        barangByKode: action.payload,
      };
    case ADD_BARANG:
      return {
        ...state,
        message: action.payload.message,
      };
      case EDIT_BARANG:
        return {
          ...state,
          message: action.payload.message,
        };
      case DELETE_BARANG:
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
