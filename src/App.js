import React from "react";
import {
  useHistory,
  Switch,
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import { Pelanggan, AddPelanggan,EditPelanggan, Barang,AddBarang,EditBarang, Penjualan } from "./pages";

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Pelanggan />
          </Route>
          <Route exact path="/add-pelanggan">
            <AddPelanggan />
          </Route>
          <Route exact path="/edit-pelanggan/:id">
            <EditPelanggan />
          </Route>
          <Route exact path="/barang">
            <Barang />
          </Route>
          <Route exact path="/add-barang">
            <AddBarang />
          </Route>
          <Route exact path="/edit-barang/:kode">
            <EditBarang />
          </Route>
          <Route exact path="/penjualan">
            <Penjualan />
          </Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

function NotFound() {
  const history = useHistory();

  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column vh-100">
        <h4 className="text-primary font-weight-bold">Web-Penjualan</h4>
        <h1 className="font-weight-bold d-block text-black-50">
          404 Not Found
        </h1>

        <div className="d-flex align-items-center">
          Your page request may temporary moved or not available
          <button
            className="btn shadow-none p-0 text-primary ml-1 font-weight-bold pointer-event"
            onClick={() => history.replace("/")}
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
