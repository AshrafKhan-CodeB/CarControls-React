import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useContext, useEffect } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import {
  BsFillArrowRightSquareFill,
  BsArrowUpSquareFill,
  BsArrowDownSquareFill,
  BsArrowLeftSquareFill,
} from "react-icons/bs";
import { WebsocketContext } from "../contexts/WebsocketContext";

import { socket, WebsocketProvider } from "../contexts/WebsocketContext";

export default function Controller() {
  const socket = useContext(WebsocketContext);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected!");
    });

    return () => {
      console.log("Unregistering Events");
      socket.off("connect");
    };
  }, []);

  const goForward = () => {
    socket.emit("ctrlInput", { body: "forward" });
  };

  const stopForward = () => {
    socket.emit("ctrlInput", { body: "stop" });
  };

  const goRight = () => {
    socket.emit("ctrlInput", { body: "right" });

  };

  const stopRight = () => {
    socket.emit("ctrlInput", { body: "stop" });

  };

  const goBack = () => {
    socket.emit("ctrlInput", { body: "rev" });

  };

  const stopBack = () => {
    socket.emit("ctrlInput", { body: "stop" });

  };

  const goLeft = () => {
    socket.emit("ctrlInput", { body: "left" });

  };

  const stopLeft = () => {
    socket.emit("ctrlInput", { body: "stop" });

  };

  const [value, setValue] = React.useState(70);
  return (
    <div className="mt-5">
      <WebsocketProvider value={socket}>
        <div className="slider">
          <RangeSlider
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValue(+e.target.value)
            }
            variant="info"
          />
        </div>
        <div className="remote-container">
          <div className="top-btn-container">
            <button
              className="button--arrows"
              onMouseDown={goForward}
              onMouseUp={stopForward}
            >
              <BsArrowUpSquareFill size={80} />
            </button>
          </div>

          <div className="middle-btn-container">
            <button
              className="left-btn button--arrows"
              onMouseDown={goLeft}
              onMouseUp={stopLeft}
            >
              <BsArrowLeftSquareFill size={80} />
            </button>

            <button className="right-btn button--arrows">
              <BsFillArrowRightSquareFill
                size={80}
                onMouseDown={goRight}
                onMouseUp={stopRight}
              />
            </button>
          </div>

          <div className="bottom-btn-container">
            <button className="button--arrows">
              <BsArrowDownSquareFill
                size={80}
                onMouseDown={goBack}
                onMouseUp={stopBack}
              />
            </button>
          </div>
        </div>
      </WebsocketProvider>
    </div>
  );
}
