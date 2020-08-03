import React, { Component } from "react";
import Signout from "../logout";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import EditMenu from "./editMenu";
import { connect } from "react-redux";
import {
  getMenuFromApi,
  delMenuFromApi,
} from "../../action/adminActionCreator";

import AddMenu from "./addMenu";

export class AdminDashboard extends Component {
  /**************************get data***************** */
  componentDidMount() {
    this.props.getMenu();
  }
  /************************************************** */
  render() {
    return (
      <div className="admin-menu ">
        <Signout />
        <center>
          {" "}
          <AddMenu />
        </center>
        <div className="admin-card">
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
                  <Button onClick={() => this.props.delMenu(el.id)}>
                    {" "}
                    <i class="fas fa-trash-alt"></i>
                  </Button>
                </CardBody>
              </Card>
              <EditMenu el={el} />
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
    delMenu: (id) => dispatch(delMenuFromApi(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
