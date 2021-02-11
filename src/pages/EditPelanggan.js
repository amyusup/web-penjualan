import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { editPelanggan } from '../redux/actions/pelanggan'
import Input from "../components/Input";
import { useParams } from "react-router-dom";
export default function EditPelanggan() {
  const { pelangganById } = useSelector((state) => state.pelanggan);
  const [nama, setNama] = useState(pelangganById[0].nama);
  const [domisili, setDomisili] = useState(pelangganById[0].domisili);
  const [jenis_kelamin, setJenisKelamin] = useState(pelangganById[0].jenis_kelamin);
  const dispatch = useDispatch();
  const {id} = useParams()
  const _onSubmit = () =>{
    dispatch(editPelanggan({nama, domisili, jenis_kelamin, id}))
  }
  console.log(id)
  return (
    <div className="bg-light h-100 w-100 d-inline-block">
      <Navbar />
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
          <div className="shadow-none p-5 mb-5 bg-white rounded mt-5">
          <h4 className="text-secondary">Tambah Data Pelanggan</h4>

          <Input
            label="Nama"
            onChange={(e) => setNama(e.target.value)}
            value={nama}
          />
          <Input
            label="Domisili"
            onChange={(e) => setDomisili(e.target.value)}
            value={domisili}
          />
          <select className="w-100 p-2 mt-4" value={jenis_kelamin} onChange={(e)=>setJenisKelamin(e.target.value)}>
            <option value="">Jenis Kelamin</option>
            <option value="PRIA">Pria</option>
            <option value="WANITA">Wanita</option>
          </select>
          <Button variant="secondary w-100 mt-5" onClick={()=>_onSubmit()}>
            Simpan Data Pelanggan
          </Button>
        </div>
      
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
