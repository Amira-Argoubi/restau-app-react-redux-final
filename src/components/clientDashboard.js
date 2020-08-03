import React, { Component } from "react";
import { getMenuFromApi } from "../action/adminActionCreator";
import { addCommandToApi } from "../action/commandActionCreator";
import Signout from "./logout";

import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

export class ClientMenu extends Component {
  componentDidMount() {
    this.props.getClientMenu();
  }
  render() {
    return (
      <div className="client-menu">
        <Signout />
        <center>
          <h1> Bienvenue à notre koujina</h1>
          <Link to="/commande">
            <i class="fas fa-cart-arrow-down panier"></i>{" "}
          </Link>
        </center>
        <div className="client-card">
          {this.props.clientMenu.map((el) => (
            <div className="card" key={el.id}>
              <Card>
                <CardImg
                  className="tof"
                  top
                  width="100%"
                  height="300px"
                  src={el.image}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>
                    <h1>{el.title}</h1>
                  </CardTitle>
                  <CardSubtitle>{el.prix}</CardSubtitle>
                  <CardText>{el.description}</CardText>
                  <Button
                    color="danger"
                    onClick={() => this.props.addCommand(el)}
                  >
                    <i class="fas fa-cart-plus"></i>
                  </Button>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    clientMenu: state.menu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getClientMenu: () => dispatch(getMenuFromApi()),
    addCommand: (el) => dispatch(addCommandToApi(el)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientMenu);
