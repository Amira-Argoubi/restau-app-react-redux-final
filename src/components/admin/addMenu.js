import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { addMenuToApi } from "../../action/adminActionCreator";

export class AddMenu extends Component {
  state = {
    toggle: false,
  };
  handleShow = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div>
        <Button color="danger" onClick={this.handleShow}>
          <i class="fas fa-plus-square"></i>
        </Button>
        <Modal isOpen={this.state.toggle} toggle={this.handleShow}>
          <ModalHeader toggle={this.props.addMenu}>Modal title</ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="title..."
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <input
              type="text"
              placeholder="image..."
              onChange={(e) => this.setState({ image: e.target.value })}
            />
            <input
              type="text"
              placeholder="prix..."
              onChange={(e) => this.setState({ prix: e.target.value })}
            />
            <input
              type="text"
              placeholder="description..."
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>
                this.props.addMenu({
                  title: this.state.title,
                  image: this.state.image,
                  prix: this.state.prix,
                  description: this.state.title,
                })
              }
            >
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.handleShow}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addMenu: (el) => dispatch(addMenuToApi(el)),
  };
};

export default connect(null, mapDispatchToProps)(AddMenu);
