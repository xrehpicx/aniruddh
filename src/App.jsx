import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";
import axios from "axios";
import User from "./components/User";

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
    </div>
  );
}

export default App;
