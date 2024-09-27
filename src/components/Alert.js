import React from "react";

export default function Alert(props) {
  if (!props.msg) {
    return null; 
  }

  return (
    <div
      className={`alert alert-warning alert-dismissible fade show`}
      role="alert"
    >
      <strong>{props.msg.type}</strong>: {props.msg.msg}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={props.onClose}
      ></button>
    </div>
  );
}
