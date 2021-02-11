import { GET_BARANG, GET_BARANG_BY_KODE, ADD_BARANG,EDIT_BARANG, DELETE_BARANG } from '../type/barang'
import axios from '../../helpers/axios';

export const getBarang = () => async (dispatch) => {
    try{
        const res = await axios.get(`/barang`);
        dispatch({type: GET_BARANG, payload: res.data.data});
    }catch(e){
        console.log(e)
        dispatch({type: GET_BARANG, payload: e});
    }
  };

  
export const getBarangByKode = (kode) => async (dispatch) => {
    try {
      const res = await axios.get(`/barang/${kode}`);
      dispatch({ type: GET_BARANG_BY_KODE, payload: res.data.data });
    } catch (e) {
      console.log(e);
      // dispatch({type: GET_PENJUALAN, payload: e});
    }
  };
  
  export const addBarang = (data) => async (dispatch) => {
    try {
      const res = await axios.post(`/barang`, data);
      dispatch({ type: ADD_BARANG, payload: res.data.data });
      alert('Data barang berhasil ditambahkan')
    } catch (e) {
      console.log(e);
    }
  };
  
  export const editBarang = (data) => async (dispatch) => {
    try {
      const res = await axios.patch(`/barang`, data);
      dispatch({ type: EDIT_BARANG, payload: res.data.data });
      alert('Data barang berhasil diubah')
    } catch (e) {
      console.log(e);
    }
  };
  export const deleteBarang = (kode) => async (dispatch) => {
    try {
      const res = await axios.delete(`/barang/${kode}`);
      dispatch({ type: DELETE_BARANG, payload: res.data.data });
    } catch (e) {
      console.log(e);
    }
  };
  