import React from "react";
import { Button, TextField } from "@material-ui/core";

const style = {
  createContainer: {
    width: "25%",
    margin: "auto",
    marginTop: "5%",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
};
export default function CreateEvent() {
  return (
    <>
      <div style={style.createContainer}>
        <TextField label="Event Name" variant="outlined" />
        <TextField
        style={{marginTop: '1.1%'}}
          label="Event Description"
          multiline
          rows={4}
          variant="outlined"
        />
        <Button variant="contained" color="primary" style={{ marginTop: "1%" }}>
          Create Event
        </Button>
      </div>
    </>
  );
}
