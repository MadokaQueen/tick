import React, { Component } from "react";
import { Carousel, CarouselItem, CarouselControl } from "reactstrap";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faRubleSign } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.props.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.props.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.props.items.map(info => {
      let imageSrc = "images/big/" + info.additional[0];
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={info._id}
          className="bg-dark"
        >
          {this.props.items.length > 0 && (
            <React.Fragment>
              <img
                src={imageSrc}
                alt=""
                style={{ height: 500, width: "100%" }}
              />
              <div className="slide-caption">
                <h3 className="font-weight-bold text-shadow pb-4">
                  {info.name}
                </h3>
                <p className="font-weight-bold text-shadow">
                  <FontAwesomeIcon
                    fixedWidth
                    icon={faCity}
                    size="lg"
                    className="pr-2"
                  />
                  {info.city}
                </p>
                <p className="font-weight-bold small text-shadow">
                  <FontAwesomeIcon
                    fixedWidth
                    icon={faMapMarkerAlt}
                    size="lg"
                    className="pr-2"
                  />
                  {info.place}
                </p>
                <p className="m-1 mb-2 text-shadow">
                  <FontAwesomeIcon
                    fixedWidth
                    className="pr-2"
                    icon={faCalendar}
                    size="lg"
                  />
                  {info.date}
                </p>
                <p className="m-1 text-shadow">
                  <FontAwesomeIcon
                    fixedWidth
                    className="pr-2"
                    icon={faRubleSign}
                    size="lg"
                  />
                  {(info.prices.length > 1
                    ? info.prices[0] +
                      " - " +
                      info.prices[info.prices.length - 1]
                    : info.prices[0]) + " р."}
                </p>

                <Link
                  to={"/event/" + info.adress}
                  className="btn btn-danger card-hor-link btn-lg mt-4"
                >
                  Купить билеты
                </Link>
              </div>
            </React.Fragment>
          )}
        </CarouselItem>
      );
    });

    return (
      <div style={{ height: 520 }}>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}

          {this.props.items.length > 1 && (
            <React.Fragment>
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={this.previous}
              />
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={this.next}
              />
            </React.Fragment>
          )}
        </Carousel>
      </div>
    );
  }
}

export default Slider;
