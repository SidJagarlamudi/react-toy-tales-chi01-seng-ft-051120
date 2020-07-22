import React, { Component } from 'react';

class ToyCard extends Component {

  render() {
    const{name, likes, image, id} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
<img src={image} alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button onClick={() => this.props.handleLike(id)} className="like-btn">Like {'<3'}</button>
        <button onClick={() => this.props.handleDonate(id)} className="del-btn">Donate to GoodWill</button>
      </div>
    );
  }

}

export default ToyCard;
