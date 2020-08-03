import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { connect } from "react-redux";
import { editMenuInApi } from "../../action/adminActionCreator";

export class EditMenu extends Component {
  state = {
    id: this.props.el.id,
    title: this.props.el.title,
    image: this.props.el.image,
    prix: this.props.el.prix,
    description: this.props.el.description,
    toggle: false,
  };
  handleShow = () => {
    this.setState({ toggle: !this.state.toggle });
  };
  render() {
    return (
      <div className="menu-updated">
        <Button color="danger" onClick={this.handleShow}>
          <i class="fas fa-edit"></i>
        </Button>
        <Modal isOpen={this.state.toggle} toggle={this.handleShow}>
          <ModalHeader toggle={this.props.editMenu}>Edit Menu </ModalHeader>
          <ModalBody>
            <input
              type="text"
              placeholder="title..."
              defaultValue={this.props.el.title}
              onChange={(e) => this.setState({ title: e.target.value })}
            />
            <input
              type="text"
              placeholder="image..."
              defaultValue={this.props.el.image}
              onChange={(e) => this.setState({ image: e.target.value })}
            />
            <input
              type="text"
              placeholder="prix..."
              defaultValue={this.props.el.prix}
              onChange={(e) => this.setState({ prix: e.target.value })}
            />
            <input
              type="text"
              placeholder="description..."
              defaultValue={this.props.el.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() =>
                this.props.editMenu({
                  id: this.props.el.id,
                  title: this.state.title,
                  image: this.state.image,
                  prix: this.state.prix,
                  description: this.state.title,
                })
              }
            >
              Change
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

/*const mapStateToProps = (state) => {
  return {
    menu: state,
  };
};*/

const mapDispatchToProps = (dispatch) => {
  return {
    editMenu: (el, id) => dispatch(editMenuInApi(el, id)),
  };
};

export default connect(null, mapDispatchToProps)(EditMenu);
