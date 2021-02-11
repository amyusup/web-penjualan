import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editBarang } from "../redux/actions/barang";
import Input from "../components/Input";
import { useParams } from "react-router-dom";
export default function EditBarang() {
  const { barangByKode } = useSelector((state) => state.barang);
  const [nama, setNama] = useState(barangByKode[0].nama);
  const [kategori, setKategori] = useState(barangByKode[0].kategori);
  const [harga, setHarga] = useState(barangByKode[0].harga);
  const dispatch = useDispatch();
  const { kode } = useParams();
  const _onSubmit = () => {
    dispatch(editBarang({ nama, kategori, harga, kode }));
  };
  console.log(kode)
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
              <Button
                variant="secondary w-100 mt-5"
                onClick={() => _onSubmit()}
              >
                Simpan Data Barang
              </Button>
            </div>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
