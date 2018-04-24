import * as React from "react";

export default function Footer() {
  return (
    <div className="wrap row small-up-1 medium-up-3">
      <div className="column">
        <h4>Contact Me</h4>
        <hr />
        <a href="#"><span>Email</span> dave@davethings.com</a>
        <a href="#"><span>Address</span> Brighton</a>
      </div>

      <div className="column">
        <h4>Site Map</h4>
        <hr />
        <a href="#">About</a>
        <a href="#">Skills</a>
        <a href="#">Projects</a>
      </div>

      <div className="column">
        <h4>Social Media</h4>
        <hr />
        <a href="https://www.facebook.com/iamdavelewis">Facebook</a>
        <a href="https://www.linkedin.com/in/dave-lewis-84586873/">LinkedIn</a>
      </div>
    </div>
  )
}