import React, { useState, useEffect } from "react";
import { actFetchListUser } from "../redux/actions/userAction";
import { useSelector, useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { makeStyles, withStyles, useTheme } from "@mui/styles";
import Users from "./Users";
import ModalUser from "./Modal";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    transform: "scale(3)",
  },
}));
const UserManagement = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userReducer.loading);
  const data = useSelector((state) => state.userReducer.data);
  useEffect(() => {
    dispatch(actFetchListUser());
  }, []);
  //----------------------------------------------------------------
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  //----------------------------------------------
  const renderTable = () => {
    if (loading) return <CircularProgress className={classes.loading} />;
    if (data && data.length > 0) {
      return (
        <div>
          <Button variant="contained" onClick={handleOpen}>
            ADD USER
          </Button>
          <Users data={data} />
          <ModalUser isOpen={open} handleClose={handleClose} />
        </div>
      );
    }
  };

  return (
    <div className="">
      <h1>USER MANAGEMENT REDUX</h1>
      {renderTable()}
    </div>
  );
};

export default UserManagement;
