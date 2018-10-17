import React, { Component } from "react";

import { Container } from "reactstrap";

import TicketBlock from "../cards/TicketBlock";
import Headline from "../Headline";
import Slider from "../slider/Slider";

import { connect } from "react-redux";
import { getItemsByCity } from "../../actions/itemActions";
import { getFeatured } from "../../actions/featuredActions";
import PropTypes from "prop-types";

class MainPage extends Component {
  componentDidMount() {
    this.props.getFeatured(this.props.city.city);
    this.props.getItemsByCity(this.props.city.city, 0, 200);

    window.document.title = "tickets-everyday";
  }

  render() {
    let { featuredItem } = this.props.featuredItem;
    let { items } = this.props.item;
    return (
      <Container>
        <Slider items={featuredItem} />
        <Headline text="Популярные события" />
        <TicketBlock items={items} loading={this.props.loading} />
      </Container>
    );
  }
}

MainPage.propTypes = {
  getItemsByCity: PropTypes.func.isRequired,
  getFeatured: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  featuredItem: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  city: state.city,
  featuredItem: state.featuredItem,
  loading: state.item.loading
});

export default connect(
  mapStateToProps,
  { getItemsByCity, getFeatured }
)(MainPage);
