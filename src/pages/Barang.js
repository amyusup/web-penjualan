import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getBarang, getBarangByKode, deleteBarang } from "../redux/actions/barang";
import { useHistory } from "react-router-dom";
export default function Barang() {
  const dispatch = useDispatch();
  const { barang, message } = useSelector((state) => state.barang);
  const history = useHistory();
  useEffect(() => {
    dispatch(getBarang());
  }, [message]);

  const _onEdit = async (kode) =>{
    await dispatch(getBarangByKode(kode));
    history.push(`edit-barang/${kode}`)
  }
  const _onDelete = (kode) =>{
    dispatch(deleteBarang(kode))
  }
  return (
    <div className="bg-light h-100 w-100 d-inline-block">
      <Navbar />
      <Container>
        <div className="shadow-none p-3 mb-5 bg-white rounded mt-5 ">
          <h4 className="text-secondary">Data Barang</h4>
          <Button
            variant="outline-secondary"
            onClick={() => history.push("add-barang")}
          >
            Tambah Data Barang
          </Button>
          <Row>
            {barang.map((item, index) => {
              return (
                <Col xs={6} key={index}>
                  <div className="shadow-sm p-3 mb-5 bg-white rounded mt-3">
                    <Row>
                      <Col xs={4}>
                        <div className="bg-light p-2 text-center pt-4 pb-4">
                          {item.kode}
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="font-weight-bold">{item.nama}</div>
                        <div>{item.kategori}</div>
                        <div>{item.harga}</div>
                      </Col>
                      <Col>
                        <div onClick={()=>_onEdit(item.kode)}>
                          <img
                            alt="edit"
                            src={`${window.location.origin}/assets/edit.png`}
                            width="25"
                            height="25"
                          />
                        </div>
                        <div onClick={()=>_onDelete(item.kode)}>
                          <img
                            alt="delete"
                            src={`${window.location.origin}/assets/delete.png`}
                            width="25"
                            height="25"
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}
