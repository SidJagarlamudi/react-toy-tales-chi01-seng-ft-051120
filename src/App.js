import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

import data from "./data";

class App extends React.Component {
  state = {
    display: false,
    data: [],
  };

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  componentDidMount = () => {
    this.setState({
      data: data,
    });
  };

  formData = (toy) => {
    this.setState({
      data: [...data, toy],
    });
  };

  handleLike = (id) => {
    const updatedToys = this.state.data.map((toy) => {
      if (toy.id === id) {
        return {
          ...toy,
          likes: toy.likes + 1,
        };
      } else {
        return toy;
      }
    });
    this.setState({
      data: updatedToys,
    });
  };

  handleDonate = (id) => {
    const updatedToys = this.state.data.filter((toy) => {
      if (toy.id !== id) return toy;
    });
    this.setState({
      data: updatedToys,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm formData={this.formData} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer
          data={this.state.data}
          handleLike={this.handleLike}
          handleDonate={this.handleDonate}
        />
      </>
    );
  }
}

export default App;
