import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export default function navbar() {
    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#">Web-Penjualan</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Pelanggan</Nav.Link>
            <Nav.Link href="/barang">Barang</Nav.Link>
            <Nav.Link href="/penjualan">Penjualan</Nav.Link>
          </Nav>
        </Navbar>
        </>
    )
}
