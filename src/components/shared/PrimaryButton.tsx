import React from "react";

export const PrimaryButton = (props: any) => {
  return (
    <button data-testid={props.id} id={props.id} className={props.className} onClick={props.onClick} disabled={props.disabled}>
      <p className="flex">&nbsp;&nbsp;<span className="mb-1 ml-2">{props.icon}</span>&nbsp;&nbsp;{props.label}</p>
    </button>
  );
};
