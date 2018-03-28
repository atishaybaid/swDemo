import React, { Component } from "react";
import Search from "./Search";
import PlanetList from "../Planet/PlanetList.jsx";
import Logout from "../Logout/Logout.jsx";
import PropTypes from "prop-types";
import getApiData from "../api.js";

class SearchHOC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
    this.timer;
  }
  getSearchResult(val) {
    var url = `/planets/?format=json&search=${val}`;
    getApiData(url).then(res => {
      this.populateResult(res);
    });
  }

  onTextChange(event) {
    this.xDebounce(event.target.value);
  }
  xDebounce(val) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
      this.getSearchResult(val);
    }, 0);
  }

  populateResult(res) {
    this.setState({ result: res });
  }
  componentWillMount() {
    if (!localStorage.getItem("validUser")) {
      this.context.router.history.push("/");
    }
  }

  render() {
    return (
      <div className="search-container">
        <Logout />
        <Search
          onTextChange={event => {
            this.onTextChange(event);
          }}
        />

        {this.state.result.length ? <PlanetList data={this.state.result} /> : null}
      </div>
    );
  }
}

SearchHOC.contextTypes = {
  router: PropTypes.object
};

export default SearchHOC;
