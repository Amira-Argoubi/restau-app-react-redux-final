import React from "react";
import "./App.css";
import AdminDashboard from "./components/admin/adminDashboard";
import ClientDashboard from "./components/clientDashboard";
import Panier from "./components/panier";
import Accueil from "./components/accueil";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/admin">
            <AdminDashboard />
          </Route>
          <Route path="/client">
            <ClientDashboard />
          </Route>
          <Route path="/commande">
            <Panier />
          </Route>
          <Route path="/">
            <Accueil />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
