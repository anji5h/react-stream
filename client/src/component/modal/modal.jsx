import React from "react";

export default function Modal(props) {
  return (
    <div>
      <div className="ui active inverted dimmer" id="modal">
        <div className="ui active tiny modal">
          <div className="header">{props.header}</div>
          <div className="content">{props.content}</div>
          {props.button}
        </div>
      </div>
    </div>
  );
}
