import React, { Component } from "react";

import { Link } from "react-router-dom";
import Headline from "../Headline";

import { Container } from "reactstrap";

import { connect } from "react-redux";
import { getSearchResults } from "../../actions/itemActions";
import PropTypes from "prop-types";

import TicketBlock from "../cards/TicketBlock";

class SearchPage extends Component {
  state = {};
  componentDidMount() {
    console.log("search update");
    this.props.getSearchResults(this.props.info.match.params.str);
    window.document.title = "Название билеты | Результаты поиска";
  }
  render() {
    let { items } = this.props.item;
    return (
      <Container>
        <Headline text="Результаты поиска" />
        {items.length > 0 && (
          <TicketBlock items={items} loading={this.props.loading} />
        )}
        {items.length === 0 && (
          <React.Fragment>
            <h4>Кажется, поиск не дал результатов</h4>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              to="/"
              style={{
                marginBottom: "50vh",
                display: "block"
              }}
            >
              <h4>Назад к главной</h4>
            </Link>
          </React.Fragment>
        )}
      </Container>
    );
  }
}

SearchPage.propTypes = {
  getSearchResults: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item,
  loading: state.item.loading
});

export default connect(
  mapStateToProps,
  { getSearchResults }
)(SearchPage);
