import React from "react";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./styles";
const Navbar = (props) => {
  const { open, setOpen } = props;
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={clsx(
        classes.appBar,
        {
          [classes.appBarShift]: open
        },
        "bgColor text-light text-weight-bold"
      )}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => setOpen(!open)}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          display="inline"
          style={{ flexGrow: 1 }}
        >
          Super Admin Dashboard
        </Typography>
        <Avatar width="50px" />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
