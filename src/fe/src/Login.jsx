import React from 'react';
import { TextField, RaisedButton, FlatButton } from 'material-ui';

const buttonBarStyle = {
  marginTop: '50px',
};

const loginButtonStyle = {
  width: '100%',
};

const inputBoxStyle = {
  width: '100%',
};

export default() => (
  <div>
    <h1>Login</h1>
    <div>
      <TextField
        hintText="Username"
        style={inputBoxStyle}
        errorText="Username, please!"
        required
      />
    </div>
    <div>
      <TextField
        hintText="Password"
        style={inputBoxStyle}
        required
        errorText="Password, please!"
      />
    </div>
    <div style={buttonBarStyle}>
      <RaisedButton primary label="Login" style={loginButtonStyle} />
      <FlatButton label="Forgot Username or Password" />
    </div>
  </div>
);
