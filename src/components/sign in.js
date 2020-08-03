import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { getUserFromApi } from "../action/usersActionCreator";
import { connect } from "react-redux";

export class Signin extends Component {
  state = {
    show: false,

    mail: "",
    password: "",
  };
  handleShow = () => this.setState({ show: !this.state.show });
  /********************************************get *************************** */
  componentDidMount() {
    this.props.getUser();
  }
  /******************************************handleChange signin********************** ***/

  handleChangeMail = (e) => {
    this.setState({ mail: e.target.value });
  };
  handleChangePassword = (e) => {
    this.setState({ password: e.target.value });
  };
  /*************************************Validation*************************************** */
  validation = () => {
    let ifriz = this.props.user.filter(
      (el) => el.mail === this.state.mail && el.password === this.state.password
    );
    console.log(ifriz);
    if (ifriz.length !== 0 && ifriz[0].poste === "admin") {
      window.location.pathname = "/admin";
    } else if (ifriz.length !== 0 && ifriz[0].poste !== "admin") {
      window.location.pathname = "/client";
    } else {
      alert("matjewbouch mahouch mawjoud");
    }
    console.log(ifriz);
  };
  /*************************************************************************************** */
  render() {
    return (
      <div className="signin">
        <Button variant="warning" onClick={this.handleShow}>
          Sign in
        </Button>
        <>
          <Modal
            show={this.state.show}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton className="header">
              <center>
                <Modal.Title>Sign in</Modal.Title>
              </center>
            </Modal.Header>
            <center>
              {" "}
              <Modal.Body className="body">
                <input
                  type="text"
                  placeholder="Your mail"
                  className="input"
                  onChange={this.handleChangeMail}
                />
                <br></br>
                <input
                  type="password"
                  placeholder="Your password"
                  className="input"
                  onChange={this.handleChangePassword}
                />
              </Modal.Body>
            </center>
            <Modal.Footer className="header">
              <Button variant="secondary" onClick={this.handleShow}>
                Close
              </Button>
              <Button variant="warning" onClick={this.validation}>
                Sign in
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => ({
  getUser: (added) => dispatch(getUserFromApi(added)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
