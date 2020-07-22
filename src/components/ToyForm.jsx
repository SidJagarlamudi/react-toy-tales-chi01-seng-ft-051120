import React, { Component } from "react";

class ToyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      image: "",
    };
  }

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newToy = { name: this.state.name, image: this.state.image };
    this.props.formData(newToy);
  };

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter a toy's name..."
            value={this.state.name}
            onChange={this.handleName}
            className="input-text"
          />
          <br />
          <input
            type="text"
            name="image"
            placeholder="Enter a toy's image URL..."
            value={this.state.image}
            onChange={this.handleImage}
            className="input-text"
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Toy"
            className="submit"
          />
        </form>
      </div>
    );
  }
}

export default ToyForm;
