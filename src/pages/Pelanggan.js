import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  getPelanggan,
  getPelangganById,
  deletePelanggan,
} from "../redux/actions/pelanggan";
import { useHistory } from "react-router-dom";
export default function Pelanggan() {
  const { pelanggan, message } = useSelector((state) => state.pelanggan);
  const dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    dispatch(getPelanggan());
  }, [message]);

  const _onEdit = async (id) => {
    await dispatch(getPelangganById(id));
    history.push(`edit-pelanggan/${id}`);
  };
  const _onDelete = (id) => {
    dispatch(deletePelanggan(id));
  };
  return (
    <div className="bg-light h-100 w-100 d-inline-block">
      <Navbar />
      <Container>
        <div className="shadow-none p-3 mb-5 bg-white rounded mt-5 ">
          <h4 className="text-secondary">Data Pelanggan</h4>
          <Button
            variant="outline-secondary"
            onClick={() => history.push("add-pelanggan")}
          >
            Tambah Data Pelanggan
          </Button>
          <Row>
            {pelanggan.map((item, index) => {
              return (
                <Col xs={6} key={index}>
                  <div className="shadow-sm p-3 mb-5 bg-white rounded mt-3">
                    <Row>
                      <Col xs={4}>
                        <div className="bg-light p-2 text-center pt-4 pb-4">
                          {item.id_pelanggan}
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="font-weight-bold">{item.nama}</div>
                        <div>{item.jenis_kelamin}</div>
                        <div>{item.domisili}</div>
                      </Col>
                      <Col>
                        <div onClick={() => _onEdit(item.id_pelanggan)}>
                          <img
                            alt="edit"
                            src={`${window.location.origin}/assets/edit.png`}
                            width="25"
                            height="25"
                          />
                        </div>
                        <div onClick={() => _onDelete(item.id_pelanggan)}>
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
