import React from "react";

function Message(props) {
  let returnmessage = "";
  {
    props.message
      ? (returnmessage = "The state is True")
      : (returnmessage = "The state is False");
  }
  return <div>{returnmessage}</div>;
}

export default Message;
