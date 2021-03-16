import React, { useState, useEffect } from "react";
import axios from "axios";
import { Paper } from "@material-ui/core";
import EventDetails from "./EventDetails";

const style = {
  paper: {
    padding: 1,
    margin: 5,
  },
  eventContainer: {
    width: "25%",
    margin: "auto",
    marginTop: "5%",
  },
};
export default function MyEvents() {
  const [events, setEvents] = useState([]);
  const [shownEvent, setShownEvent] = useState({});
  const [viewEvent, setViewEvent] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/604461283dca7f17814267a2`)
      .then((res) => {
        setEvents(res.data.data.events);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showAnEvent = (event) => {
    setShownEvent(event);
    setViewEvent(true);
  };

  const userEvents = events.map((event) => {
    return (
      <Paper
        elevation={3}
        style={style.paper}
        onClick={() => showAnEvent(event)}
      >
        <h1>{event.name}</h1>
      </Paper>
    );
  });

  if (viewEvent) {
    return <EventDetails event={shownEvent} />;
  }
  return (
    <>
      <div style={style.eventContainer}>{userEvents}</div>
    </>
  );
}
