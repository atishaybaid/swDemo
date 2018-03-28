import React, { Component } from "react";
import Chip from "material-ui/Chip";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";

class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialog: false
    };
    this.width = this.setWidth();
    this.handleClose = this.handleClose.bind(this);
  }
  setWidth(){
   let population = parseInt(this.props.info.population);
    if(population==NaN){
      return 100;
    }else if(population<=50000){
      return 150;
    } else if(50000<population<=500000){
      return 200;
    } else if(500000<population<=5000000){
      return 250;
    }else if(5000000<population<=50000000){
      return 300;
    }else if(50000000<population<=5000000000){
      return 350;
    } else if(population>5000000000){
      return 400;
     }


  }
  openDialog() {
    this.setState({ dialog: true });
  }
  handleClose() {
    this.setState({ dialog: false });
  }
  render() {
    return (
      <div>
        <Chip
          onClick={() => {
            this.openDialog();
          }}
          style={{width:this.width,margin:5}}
        >
          {this.props.info.name}
        </Chip>
        <Dialog
          title={this.props.info.name}
          actions={<FlatButton label="ok" primary={true} onClick={this.handleClose} />}
          modal={false}
          open={this.state.dialog}
          localData={this.props.info}
          onRequestClose={this.handleClose}
        >
          <div className="planate-info">
            <div>Rotation Period:{this.props.info.rotation_period}</div>
            <div>Orbital Period:{this.props.info.orbital_period}</div>
            <div>Diameter:{this.props.info.diameter}</div>
            <div>Climate:{this.props.info.climate}</div>
            <div>Gravity:{this.props.info.gravity}</div>
            <div>Surface Water:{this.props.info.surface_water}</div>
            <div>Population:{this.props.info.population}</div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Planet;
