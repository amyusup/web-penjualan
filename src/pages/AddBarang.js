import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addBarang } from '../redux/actions/barang'
import Input from "../components/Input";
export default function AddBarang() {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("");
  const [harga, setHarga] = useState("");
  const dispatch = useDispatch();
  const _onSubmit = () =>{
    dispatch(addBarang({nama, kategori, harga}))
  }
  return (
    <div className="bg-light h-100 w-100 d-inline-block">
      <Navbar />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <div className="shadow-none p-5 mb-5 bg-white rounded mt-5">
          <h4 className="text-secondary">Tambah Data Barang</h4>

          <Input
            label="Nama"
            onChange={(e) => setNama(e.target.value)}
            value={nama}
          />
          <Input
            label="Kategori"
            onChange={(e) => setKategori(e.target.value)}
            value={kategori}
          />
          <Input
            label="Harga"
            onChange={(e) => setHarga(e.target.value)}
            value={harga}
          />
          <Button variant="secondary w-100 mt-5" onClick={()=>_onSubmit()}>
            Simpan Data Harga
          </Button>
        </div>
      
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
