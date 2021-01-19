import React from "react";
import SideBar from "./sidebar";
import Main from "./main";
import useStyles from "./styles";
import Navbar from "./navbar";

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <Navbar open={open} setOpen={setOpen} />

        <SideBar close={() => setOpen(!open)} open={open} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Main />
        </main>
      </div>
    </>
  );
}
