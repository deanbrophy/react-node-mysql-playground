import React from "react";
import { Dialog, FlatButton, RaisedButton } from "material-ui";

export default class TwConfirmDialog extends React.Component {
  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.props.onClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.onClose}
      />
    ];

    return (
      <div>
        <Dialog
          title="Delete Campaign?"
          actions={actions}
          modal={false}
          open={this.props.open}
          onRequestClose={this.props.onClose}
        >
          Not really successful, huh?
        </Dialog>
      </div>
    );
  }
}
