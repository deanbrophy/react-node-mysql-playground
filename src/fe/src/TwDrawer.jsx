import React from "react";
import { Drawer, Menu, MenuItem, Divider } from "material-ui";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";

const TwDrawer = ({ open, handleRequestChange }) => (
  <Drawer
    desktop={true}
    open={open}
    docked={false}
    onRequestChange={handleRequestChange}
  >
    <Menu desktop={true}>
      <MenuItem primaryText="Campaigns" />
      <MenuItem primaryText="Personalizations" />
      <Divider />
      <MenuItem
        primaryText="Reporting"
        rightIcon={<ArrowDropRight />}
        menuItems={
          <Menu desktop={true}>
            <MenuItem primaryText="Cool Reports" />
            <MenuItem primaryText="The Rest of 'Em" />
          </Menu>
        }
      />
    </Menu>
  </Drawer>
);

export default TwDrawer;
