import React, { useState, useEffect, useRef } from "react";
import Grid from "./components/Grid";
import axios from "axios";
import User from "./components/User";
import Button from "@material-ui/core/Button";
import bgimage from "./components/bgimage.jpeg";
function App() {
  const [insta, setInsta] = useState({});
  useEffect(() => {
    (async () => {
      const userObject = (
        await axios.get(`https://www.instagram.com/aniruddh.gs/?__a=1`)
      ).data.graphql.user;

      setInsta(userObject);
    })();
  }, []);
  return (
    <div className="app">
      {/* <img src={bgimage} alt="" className="bg-img" /> */}
      <img
        src="https://pbs.twimg.com/profile_images/1212755657352454144/MxoBSxXW_400x400.jpg"
        alt=""
        className="bg-img"
      />
      <User user={insta} />
      <div className="grid">
        <Grid
          edges={
            insta.edge_owner_to_timeline_media
              ? insta.edge_owner_to_timeline_media.edges
              : ""
          }
        />
      </div>
      {window.innerWidth <= 600 ? <DesktopWarn /> : <></>}
    </div>
  );
}
function DesktopWarn() {
  const [state, setState] = useState(true);

  useEffect(() => {
    // setTimeout(() => setState(false), 5000);
  }, []);

  return (
    <div
      className="mobile-warning"
      style={{ opacity: state ? "1" : "0", pointerEvents: state ? "" : "none" }}
    >
      <p>View on desktop for best view</p>
      <Button
        onClick={() => setTimeout(() => setState(false), 400)}
        variant="outlined"
      >
        view anyway
      </Button>
    </div>
  );
}

export default App;
