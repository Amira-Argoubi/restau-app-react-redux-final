import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addUserToApi } from "../action/usersActionCreator";

export class Signup extends Component {
  state = { show: false, name: "", mail: "", password: "" };
  handleShow = () => this.setState({ show: !this.state.show });
  /*************************************handlechange************************************ */

  handleChangeName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleChangeMail = (e) => {
    this.setState({ mail: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  /************************************************************************************ **********/

  render() {
    return (
      <div className="signup">
        <Button variant="warning" onClick={this.handleShow}>
          Sign up
        </Button>
        <>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton className="header">
              <Modal.Title>Sign up</Modal.Title>
            </Modal.Header>

            <center>
              {" "}
              <Modal.Body className="body">
                <input
                  type="text"
                  className="input"
                  placeholder="Your name"
                  onChange={this.handleChangeName}
                />
                <br></br>
                <input
                  type="text"
                  className="input"
                  placeholder="Your mail"
                  onChange={this.handleChangeMail}
                />
                <br></br>
                <input
                  type="password"
                  className="input"
                  placeholder="Your password"
                  onChange={this.handleChangePassword}
                />
              </Modal.Body>
            </center>
            <Modal.Footer className="header">
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button
                variant="warning"
                onClick={() =>
                  this.props.addUser({
                    name: this.state.name,
                    mail: this.state.mail,
                    password: this.state.password,
                  })
                }
              >
                Sign up
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addUser: (added) => dispatch(addUserToApi(added)),
});

export default connect(null, mapDispatchToProps)(Signup);
