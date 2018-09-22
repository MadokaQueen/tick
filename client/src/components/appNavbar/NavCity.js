import React from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import { connect } from "react-redux";
import { setCity } from "../../actions/cityActions";
import { getItemsByCity } from "../../actions/itemActions";
import PropTypes from "prop-types";

class NavCity extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  cityToText() {
    let { city } = this.props.city;

    switch (city) {
      case "all":
        return "Все города";
      case "moscow":
        return "Москва";
      case "spb":
        return "Санкт-петербург";
      default:
        return "все города";
    }
  }
  render() {
    return (
      <React.Fragment>
        <span className="text-white mr-2">Ваш город:</span>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="danger" caret>
            {this.cityToText()}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem
              onClick={() => {
                this.props.setCity("all");
                window.location.reload(true);
              }}
            >
              Все города
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.props.setCity("moscow");
                window.location.reload(true);
              }}
            >
              Москва
            </DropdownItem>
            <DropdownItem
              onClick={() => {
                this.props.setCity("spb");
                window.location.reload(true);
              }}
            >
              Санкт-Петербург
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </React.Fragment>
    );
  }
}

NavCity.propTypes = {
  setCity: PropTypes.func.isRequired,
  getItemsByCity: PropTypes.func.isRequired,
  city: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  city: state.city
});

export default connect(
  mapStateToProps,
  { setCity, getItemsByCity }
)(NavCity);
