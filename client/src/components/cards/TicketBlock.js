import React, { Component } from "react";
import { Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import HorizontalCard from "./HorizontalCard";

import HorizontalEmpty from "./HorizontalEmpty";

class TicketBlock extends Component {
  render() {
    const { items } = this.props;
    let decks = [];
    for (let i = 0; i < items.length; i += 2) {
      decks.push([items[i], items[i + 1]]);
    }

    if (decks[0] === undefined) {
      return (
        <Container className="my-4 no-gutters">
          <TransitionGroup className="row">
            <CSSTransition timeout={1500} classNames="fading">
              <div className="col-6">
                <HorizontalEmpty />
              </div>
            </CSSTransition>
            <CSSTransition timeout={1500} classNames="fading">
              <div className="col-6">
                <HorizontalEmpty />
              </div>
            </CSSTransition>
          </TransitionGroup>
        </Container>
      );
    }

    return (
      <React.Fragment>
        {decks.map((deck, i) => (
          <Container key={i} className="my-4 no-gutters">
            <TransitionGroup className="row">
              <CSSTransition timeout={1500} classNames="fading">
                <div className="col-6">
                  <HorizontalCard
                    info={deck[0]}
                    onClick={() => console.log("!")}
                  />
                </div>
              </CSSTransition>
              <CSSTransition timeout={1500} classNames="fading">
                <div className="col-6">
                  <HorizontalCard
                    info={deck[1]}
                    onClick={() => console.log("!")}
                  />
                </div>
              </CSSTransition>
            </TransitionGroup>
          </Container>
        ))}
      </React.Fragment>
    );
  }
}

export default TicketBlock;
