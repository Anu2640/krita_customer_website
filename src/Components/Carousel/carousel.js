import React from 'react';
import {MdArrowBackIos,MdArrowForwardIos} from 'react-icons/md'
import './carousel.css'


class Carousel extends React.Component {
  state = {
    currentIndex: 0,
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.goToNextSlide();
    }, this.props.interval);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  goToNextSlide = () => {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.props.images.length,
    }));
  };

  goToPreviousSlide = () => {
    this.setState((prevState) => ({
      currentIndex:
        prevState.currentIndex === 0
          ? this.props.images.length - 1
          : prevState.currentIndex - 1,
    }));
  };

  render() {
    const {images} = this.props
    const { currentIndex } = this.state;

    return (
      <div className="carousel_">
        <button className="carousel__prev" onClick={this.goToPreviousSlide}>
        <MdArrowBackIos />
        </button>
        <div className="carousel__image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button className="carousel__next" onClick={this.goToNextSlide}>
        <MdArrowForwardIos />
        </button>
      </div>
    );
  }
}

export default Carousel;