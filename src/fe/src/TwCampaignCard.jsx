import React, { Component } from "react";
import randomWord, {
  generateRandomDate,
  generateRandomNumber
} from "./mockHelpers";
import {
  Paper,
  Card,
  CardHeader,
  CardMedia,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  Subheader
} from "material-ui";

const campaignGridStyle = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const subheaderStyle = {
  paddingLeft: 0
};

const personalizationStyle = {
  justifySelf: "start"
};

const personasStyle = {
  justifySelf: "start"
};

const cardStyle = {
  width: "100%",
  zIndex: 0
};

const cardTextStyle = {
  topPadding: "0"
};

const Counts = ({ personalizationCount, personaCount }) => (
  <div style={campaignGridStyle}>
    <div style={personalizationStyle}>
      <Subheader style={subheaderStyle}>CONTAINS</Subheader>
      <strong> {`${personalizationCount} Personalizations`}</strong>
    </div>
    <div style={personasStyle}>
      <Subheader style={subheaderStyle}>TARGETING</Subheader>
      <strong>{personaCount}</strong> Personas
    </div>
  </div>
);

class TwCampaignCard extends Component {
  render() {
    return (
      <Card style={cardStyle} >
        <CardTitle
          title={this.props.title}
          subtitle={this.props.subTitle}
          style={cardTextStyle}
        />
        <CardText>
          <Counts
            personalizationCount={this.props.personalizationCount}
            personaCount={this.props.personaCount}
          />
        </CardText>
        <CardActions>
          <FlatButton label="Edit" primary={true} onClick={this.props.onEdit} />
          <FlatButton
            label="Delete"
            secondary={true}
            onClick={this.props.onDelete}
          />
        </CardActions>
      </Card>
    );
  }
}

export default TwCampaignCard;
