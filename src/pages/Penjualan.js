import React from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getPenjualan,
  getPenjualanByNota,
  deletePenjualan,
} from "../redux/actions/penjualan";
export default function Penjualan() {
  const dispatch = useDispatch();
  const { penjualan, message } = useSelector((state) => state.penjualan);

  React.useEffect(() => {
    dispatch(getPenjualan());
  }, [message]);
  return (
    <div className="bg-light h-100 w-100 d-inline-block">
      <Navbar />
      <Container>
        <div className="shadow-none p-3 mb-5 bg-white rounded mt-5 ">
          <h4 className="text-secondary">Data Penjualan</h4>
          <Button variant="outline-secondary">Tambah Data Penjualan</Button>
          <Row>
            {penjualan.map((item, index) => {
              return (
                <Col xs={6}>
                  <div className="shadow-sm p-3 mb-5 bg-white rounded mt-3">
                    <Row>
                      <Col xs={4}>
                        <div className="bg-light p-2 text-center pt-4 pb-4">
                          {item.id_nota}
                        </div>
                      </Col>
                      <Col xs={6}>
                        <div className="font-weight-bold">
                          {item.kode_pelanggan}
                        </div>
                        <div>{item.tgl}</div>
                        <div>{item.subtotal}</div>
                      </Col>
                      <Col>
                        <div>
                          <img
                            alt="edit"
                            src={`${window.location.origin}/assets/edit.png`}
                            width="25"
                            height="25"
                          />
                        </div>
                        <div>
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
