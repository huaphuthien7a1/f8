import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
const tabs = ["posts", "comments", "albums"];
const courses = [
  { id: 1, name: "HTML,CSS" },
  { id: 2, name: "UX/UI" },
  { id: 3, name: "ReacJS" },
];
const Content = () => {
  const [open, setOpen] = useState(false);
  const [mess, setMess] = useState("");
  const [transition, setTransition] = React.useState(undefined);

  const handleClick = (Transition) => () => {
    setTransition(() => Transition);
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const action = (
    <React.Fragment>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
      <Button onClick={handleClick(TransitionUp)}>Show notification</Button>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={2000}
        TransitionComponent={transition}
        message="Add user successfully"
        key={transition ? transition.name : ""}
        action={action}
      />
    </div>
  );
};

const TestComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: "32px" }}>
      <button
        onClick={() => setShow(!show)}
        className="rounded-md border-2 p-3 text-xl"
      >
        toggle
      </button>
      {show && <Content />}
    </div>
  );
};
export default TestComponent;
