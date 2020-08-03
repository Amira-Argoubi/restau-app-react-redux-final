import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getFromApi,
  delCommandFromApi,
  editQuantity,
} from "../action/commandActionCreator";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
export class Panier extends Component {
  state = {
    total: 0,
  };
  componentDidMount() {
    this.props.getCommand();
  }
  render() {
    return (
      <div className="panier">
        <center>
          <h1>Tes plats choisis</h1>
        </center>
        <div className="orders">
          {this.props.command.map((el) => (
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
                  <Button onClick={() => this.props.removeCommand(el.id)}>
                    <i className="fas fa-trash-alt"></i>
                  </Button>
                </CardBody>
              </Card>
              <button
                className="up"
                onClick={() =>
                  this.props.editQuant(el.id, {
                    image: el.image,
                    title: el.title,
                    prix: el.prix,
                    quant: el.quant + 1,
                    totalPrix: Number(
                      parseInt(el.totalPrix) + parseInt(el.prix)
                    ),
                  })
                }
              >
                +
              </button>
              <p>{el.quant}</p>
              <p>total : {this.props.total}</p>

              <button
                className="down"
                onClick={() =>
                  this.props.editQuant(el.id, {
                    image: el.image,
                    title: el.title,
                    prix: el.prix,
                    quant: el.quant - 1,
                    totalPrix: parseInt(el.totalPrix) + parseInt(el.prix),
                  })
                }
              >
                -
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    command: state.command,
    total: state.command.reduce(
      (total, el) => total + parseInt(el.totalPrix),
      0
    ),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getCommand: () => dispatch(getFromApi()),
    removeCommand: (id) => dispatch(delCommandFromApi(id)),
    editQuant: (id, Q) => dispatch(editQuantity(id, Q)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
