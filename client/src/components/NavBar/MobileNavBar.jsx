// @ts-nocheck
import * as React from "react";
import { NavLink } from "react-router-dom";

import Box from "@mui/material/Box";
import { Drawer, List, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import logo from "../../assets/logos/TextLogo.svg";

import { AiFillHome, AiFillContacts, AiOutlineTeam, AiOutlineSearch } from "react-icons/ai";
import { BsFillAwardFill, BsMenuButtonWideFill } from "react-icons/bs";

export default function MobileNavBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "left" ? "auto" : 250,
        height: "100%",
        backgroundColor: "#010101",
        outlinne: "none",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiFillHome className="iconStyle" />
            </ListItemIcon>
            <ListItemText primary="Movies" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiOutlineTeam className="iconStyle" />
            </ListItemIcon>
            <ListItemText primary="TVshows" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AiFillContacts className="iconStyle" />
            </ListItemIcon>
            <ListItemText primary="Trending" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BsFillAwardFill className="iconStyle" />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <div style={{ width: "100%" }}>
        <input placeholder="search" />
      </div>
    </Box>
  );

  return (
    <div className="mobile-menu">
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <BsMenuButtonWideFill onClick={toggleDrawer(anchor, true)} className="menu-icon">
            {anchor}
          </BsMenuButtonWideFill>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
          <NavLink>
            <img src={logo} alt="logo" />
          </NavLink>
          <AiOutlineSearch className="menu-icon" />
        </React.Fragment>
      ))}
    </div>
  );
}
