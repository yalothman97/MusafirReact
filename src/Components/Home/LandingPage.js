import React, { Component } from "react";
import Iframe from "react-iframe";
import { Player } from "video-react";

export default class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-5 mx-auto">
          <div className="col-12 align-center text-center">
            {/* <video className="videoTag" autoPlay loop muted>
              <source
                src={"https://player.vimeo.com/video/368470724"}
                type="video/mp4"
              />
            </video> */}
            {/* <Player
              playsInline
              src="https://player.vimeo.com/video/368470724"
            /> */}
            <Iframe
              src="https://www.youtube.com/embed/9POqgzKIpIo?controls=0&autoplay=1&showinfo=0"
              width="1000"
              height="440"
              frameBorder="0"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    );
  }
}
