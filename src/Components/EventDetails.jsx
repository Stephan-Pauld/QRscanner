import React from "react";
import { Card } from "@material-ui/core";


const style = {
  eventContainer: {
    display: 'flex',
    width: '80%',
    margin: 'auto',
    marginTop: '2%',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  atendees: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  }
}

export default function EventDetails({ event }) {
  return (
    <div style={style.eventContainer}>

      <div>
        <h1>{event.name}</h1>
        <h3>{event.description}</h3>
      </div>

      <div style={style.atendees}>
        {event.atendees.map(atendee => (
          <h4>{atendee}</h4>
        ))}
      </div>

    </div>
  );
}
