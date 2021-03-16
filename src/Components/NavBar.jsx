import React from "react";

const style = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '40%',
    margin: 'auto',
    borderBottom: '1px solid black'

  },
  navTitles: {
    display: 'flex'

  },
  navLogo: {
    margin: 'none'
  },
  margins: {
    margin: "10% 4px 15px 4px"
  }
};

export default function NavBar() {
  return (
    <nav style={style.nav}>
      <div style={style.navLogo}>
        <h1 style={style.margins}>Komly</h1>
      </div>
      <div style={style.navTitles}>
        <h4 style={style.margins}>Home |</h4>

        <h4 style={style.margins}>Create Event |</h4>
        <h4 style={style.margins}>My Events</h4>
      </div>
    </nav>
  );
}
