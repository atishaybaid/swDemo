import React, { Component } from "react";
import Planet from "./Planet.jsx";
class PlanetList extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }
  renderPlanets() {
    var renderItems = this.props.data.map(item => <Planet info={item} />);
    return renderItems;
  }
  render() {
    return <div className="planet-list">{this.renderPlanets()}</div>;
  }
}
export default PlanetList;
