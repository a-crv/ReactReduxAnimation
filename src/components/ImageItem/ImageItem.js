import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './ImageItem.css';

class ImageItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0
    }

    this.getCoordinates = this.getCoordinates.bind(this);
    this.animate = this.animate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // this.animate();
    let coordinates = this.getCoordinates();
    this.setState(coordinates);
  }

  componentDidUpdate() {
    let coordinates = this.getCoordinates();
    let { x, y } = coordinates;
    let dX = Math.abs(this.state.x - x);
    let dY = Math.abs(this.state.y - y);

    console.log(dX, dY);
    this.animate(dX, dY);
  }

  getCoordinates() {
    const domNode = ReactDOM.findDOMNode(this);

    return {
      x: domNode.offsetLeft,
      y: domNode.offsetTop
    };
  }

  animate(dX, dY) {
    const domNode = ReactDOM.findDOMNode(this);

    requestAnimationFrame(() => {
      domNode.style.transform = `translate(${dX}px, ${dY}px)`;
      domNode.style.transition = 'transform 0s';

      requestAnimationFrame(() => {
        domNode.style.transform = '';
        domNode.style.transition = 'transform 1400ms';
      })
    });
  }

  render() {
    const { leftHandleClick, rightHandleClick, rating, url } = this.props;

    return (
      <div
        onClick={leftHandleClick}
        onContextMenu={rightHandleClick}
        className="image-item"
      >
        <div className="image-item__rating">{rating}</div>
        <img src={url} className="image-item__img" alt="Картинка" />
      </div>
    );
  }
}

export default ImageItem;