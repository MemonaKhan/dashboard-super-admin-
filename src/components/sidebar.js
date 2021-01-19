import React from "react";
import clsx from "clsx";
import {
  Drawer,
  AppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import useStyles from "./styles";
//icons import
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import TimelineIcon from "@material-ui/icons/Timeline";
import SubjectIcon from "@material-ui/icons/Subject";
import CloseIcon from "@material-ui/icons/Close";
import DashboardIcon from "@material-ui/icons/Dashboard";

const SideBar = (props) => {
  const { open } = props;
  const classes = useStyles();
  const { history } = props;
  const [item, setItem] = React.useState({});
  const handleOpen = (name) => {
    setItem({ [name]: !item[name] });
  };
  const Menu = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      onClick: null
    },
    {
      name: "Freelancer",
      icon: <DashboardIcon />,
      onClick: null
    },
    {
      name: "Clients",
      icon: <DashboardIcon />,
      onClick: null
    },
    {
      name: "Organizations",
      icon: <DashboardIcon />,
      onClick: null
    },
    {
      name: "Insights",
      icon: <DashboardIcon />,
      onClick: null
    }
  ];
  return (
    <>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <Divider />
        <div className={` sidebar`}>
          <div className="logo ">
            <IconButton className=" text-light" onClick={props.close}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <List className="text-light">
            {Menu.map((navItem) => {
              const { name, icon, subMenu, onClick } = navItem;
              return (
                <div key={name}>
                  {subMenu ? (
                    <>
                      <ListItem
                        key={name}
                        button
                        onClick={() => handleOpen(name)}
                      >
                        <ListItemIcon className="text-light">
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={name} />
                        {item[name] ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                      </ListItem>
                      <Collapse
                        in={item[name]}
                        unmountOnExit
                        component="li"
                        unmountOnExit
                      >
                        <List
                          className={`bg-white text-dark m-3 shadow rounded ${
                            open ? "" : "d-none"
                          }`}
                          disablePadding
                        >
                          {subMenu.map((subItem) => {
                            const { subItemText, subItemOnClick } = subItem;
                            return (
                              <ListItem
                                button
                                key={subItemText}
                                onClick={subItemOnClick}
                              >
                                <ListItemText>{subItemText}</ListItemText>
                              </ListItem>
                            );
                          })}
                        </List>
                      </Collapse>
                    </>
                  ) : (
                    <ListItem button key={name} onClick={onClick}>
                      <ListItemIcon className="text-light">{icon}</ListItemIcon>
                      <ListItemText>{name}</ListItemText>
                    </ListItem>
                  )}
                </div>
              );
            })}
          </List>
        </div>
      </Drawer>
    </>
  );
};
export default SideBar;
