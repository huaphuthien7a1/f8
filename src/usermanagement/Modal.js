import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  input: {
    margin: "10px 0 !important",
  },
});
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};
const ModalUser = ({ isOpen, handleClose }) => {
  const classes = useStyle();
  const [input, setInput] = useState({
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    type: "",
  });
  const [error, setError] = useState({
    name: "",
    userName: "",
    email: "",
    phoneNumber: "",
    type: "",
  });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h1 className="underline-offset-1">ADD USER</h1>
        <form>
          <TextField
            size="small"
            className={classes.input}
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            name="userName"
            value={input.userName}
            onChange={handleOnChange}
            fullWidth
          />
          <TextField
            size="small"
            className={classes.input}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            name="name"
            value={input.name}
            onChange={handleOnChange}
            fullWidth
          />
          <TextField
            size="small"
            className={classes.input}
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={input.email}
            onChange={handleOnChange}
            fullWidth
          />
          <TextField
            size="small"
            className={classes.input}
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleOnChange}
            fullWidth
          />
          <TextField
            size="small"
            className={classes.input}
            id="outlined-basic"
            label="Type"
            variant="outlined"
            name="type"
            value={input.type}
            onChange={handleOnChange}
            fullWidth
          />
          <Button type="submit" onClick={handleClose} variant="contained">
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};
export default ModalUser;
