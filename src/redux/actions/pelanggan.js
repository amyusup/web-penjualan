import {
  GET_PELANGGAN,
  ADD_PELANGGAN,
  GET_PELANGGAN_BY_ID,
  EDIT_PELANGGAN,
  DELETE_PELANGGAN,
} from "../type/pelanggan";
import axios from "../../helpers/axios";

export const getPelanggan = () => async (dispatch) => {
  try {
    const res = await axios.get(`/pelanggan`);
    dispatch({ type: GET_PELANGGAN, payload: res.data.data });
  } catch (e) {
    console.log(e);
  }
};

export const getPelangganById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/pelanggan/${id}`);
    dispatch({ type: GET_PELANGGAN_BY_ID, payload: res.data.data });
  } catch (e) {
    console.log(e);
    // dispatch({type: GET_PENJUALAN, payload: e});
  }
};

export const addPelanggan = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`/pelanggan`, data);
    dispatch({ type: ADD_PELANGGAN, payload: res.data.data });
    alert('Data pelanggan berhasil ditambahkan')
  } catch (e) {
    console.log(e);
  }
};

export const editPelanggan = (data) => async (dispatch) => {
  try {
    const res = await axios.patch(`/pelanggan`, data);
    dispatch({ type: EDIT_PELANGGAN, payload: res.data.data });
    alert('Data pelanggan berhasil diubah')
  } catch (e) {
    console.log(e);
  }
};
export const deletePelanggan = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`/pelanggan/${id}`);
    dispatch({ type: DELETE_PELANGGAN, payload: res.data.data });
  } catch (e) {
    console.log(e);
  }
};
