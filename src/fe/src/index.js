import React from "react";
import { render } from "react-dom";
import {
  Login,
  TwDrawer,
  TwCampaignCard,
  TwConfirmDialog,
  TwCampaignEditor
} from "./components";
import {
  MenuItem,
  Drawer,
  AppBar,
  FontIcon,
  Paper,
  Menu,
  Divider,
  FloatingActionButton
} from "material-ui";
import { white } from "material-ui/styles/colors";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "react-tap-event-plugin";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import { generateMockCampaigns } from "./mockHelpers";
import ContentAdd from "material-ui/svg-icons/content/add";

require("./index.css");

const styles = {
  fontFamily: "Roboto, sans-serif",
  height: "100%"
};

const gridStyles = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridGap: "40px 40px",
  gridTemplateRows: "3fr 1fr",
  alignItems: "center",
  justifyItems: "center",
  height: "100%",
  margin: "32px"
};

const splashStyles = {};

const loginSectionStyles = {
  maxWidth: "400px"
};

const callToActionStyle = {};

const calltoActionSectionStyle = {
  gridColumnStart: 2,
  alignSelf: "end"
};

const fontIconStyle = {
  fontSize: "32px"
};

const iconRightStyle = {
  margin: "16px 0"
};

const iconLeftStyle = {
  margin: "16px 16px 16px 0"
};

const fabStyle = {
  position: "fixed",
  right: "16px",
  bottom: "32px",
  zIndex: "1"
}

const TwAppBar = ({ handleDrawerToggle }) => (
  <AppBar
    title="TargetWorks"
    iconElementLeft={
      <FontIcon className="material-icons" style={fontIconStyle} color={white}>
        menu
      </FontIcon>
    }
    iconStyleLeft={iconLeftStyle}
    iconStyleRight={iconRightStyle}
    iconElementRight={
      <FontIcon className="material-icons" style={fontIconStyle} color={white}>
        exit_to_app
      </FontIcon>
    }
    onLeftIconButtonTouchTap={handleDrawerToggle}
  />
);

export class App extends React.Component {
  constructor() {
    super();
    this.state = {
      openDrawer: false,
      openDeleteDialog: false,
      openEditDialog: false,
      campaigns: []
    };
  }

  componentWillMount() {
    const campaignData = generateMockCampaigns(15);
    this.setState({ campaigns: campaignData });
  }

  handleDrawerToggle = () => {
    this.setState({
      openDrawer: !this.state.openDrawer
    });
  };

  handleRequestChange = (open, reason) => {
    this.setState({ openDrawer: open });
  };

  handleDelete = () => {
    this.setState({ openDeleteDialog: true });
  };

  handleDeleteClose = () => {
    this.setState({ openDeleteDialog: false });
  };

  handleEdit = () => {
    this.setState({ openEditDialog: true });
  };

  handleEditClose = () => {
    this.setState({ openEditDialog: false });
  };

  renderCards = () =>
    this.state.campaigns.map((campaign, index) => (
      <TwCampaignCard
        key={index}
        onEdit={this.handleEdit}
        onDelete={this.handleDelete}
        {...campaign}
      />
    ));

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles}>
          <TwAppBar handleDrawerToggle={this.handleDrawerToggle} />
          <TwDrawer
            open={this.state.openDrawer}
            handleRequestChange={this.handleRequestChange}
          />
          <FloatingActionButton style={fabStyle} zDepth={1} onClick={this.handleEdit} >
            <ContentAdd />
          </FloatingActionButton>
          <div style={gridStyles}>{this.renderCards()}</div>
          <TwConfirmDialog
            open={this.state.openDeleteDialog}
            onClose={this.handleDeleteClose}
          />
          <TwCampaignEditor
            open={this.state.openEditDialog}
            onClose={this.handleEditClose}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));
