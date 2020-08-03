import React, { Component } from "react";
import Navbar from "./navbar";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { connect } from "react-redux";
import { getMenuFromApi } from "../action/adminActionCreator";

export class Accueil extends Component {
  /**************************get data***************** */
  componentDidMount() {
    this.props.getMenu();
  }
  /************************************************** */
  render() {
    return (
      <div className="accueil ">
        <Navbar />
        <div className="accueil-card">
          {this.props.menu.map((el) => (
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
    menu: state.menu,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getMenu: () => dispatch(getMenuFromApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Accueil);
