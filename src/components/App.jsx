import React from "react";
import "../../public/styles.css";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        phone="9999999"
        email="b@b.com"
      />
      <Card
        name="Jack Bauer"
        img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        phone="9999999"
        email="b@b.com"
      />
      <Card
        name="Chuck Noia"
        img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        phone="9999999"
        email="b@b.com"
      />
    </div>
  );
}

export default App;
