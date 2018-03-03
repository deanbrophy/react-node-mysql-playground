import React, { Component } from "react";
import { Dialog, TextField, RaisedButton, FlatButton } from "material-ui";

const buttonBarStyle = {
  marginTop: "16px"
};

const h1Style = {
  fontSize: "24px",
  lineHeight: "36px",
  margin: 0
};

class TwCampaignEditor extends Component {
  render() {
    return (
      <Dialog open={this.props.open}>
        <div>
          <h1 style={h1Style}>Edit Campaign</h1>
        </div>
        <div>
          <TextField hintText="Campaign Name" fullWidth={true} autoFocus />
        </div>
        <div>
          <TextField hintText="Campaign Url" fullWidth={true} />
        </div>
        <div style={buttonBarStyle}>
          <RaisedButton label="Save Campaign" primary={true} onClick={this.props.onClose} />
          <FlatButton label="Cancel" onClick={this.props.onClose} />
        </div>
      </Dialog>
    );
  }
}

export default TwCampaignEditor;
