import React, { Component } from "react";

import { Link } from "react-router-dom";

import { Container } from "reactstrap";

import EventInfo from "../eventInfo/EventInfo";

import { connect } from "react-redux";
import { getItemByAdress } from "../../actions/itemActions";
import PropTypes from "prop-types";

import Headline from "../Headline";

import EventInfoCardEmpty from "../eventInfo/EventInfoCardEmpty";

class EventPage extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
    this.props.getItemByAdress(this.props.info.match.params.id);
  }
  render() {
    let item = false;
    if (this.props.item.items) {
      item = this.props.item.items[0];
    }
    return (
      <div className="EventPage">
        {item && <EventInfo info={item} />}
        {!item && (
          <Container>
            <EventInfoCardEmpty />
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              style={{
                marginBottom: "50vh",
                marginLeft: "8rem",
                display: "block"
              }}
            >
              <h4>Назад к главной</h4>
            </Link>
          </Container>
        )}
      </div>
    );
  }
}
EventPage.propTypes = {
  getItemByAdress: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(
  mapStateToProps,
  { getItemByAdress }
)(EventPage);
