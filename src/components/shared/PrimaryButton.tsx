import React from "react";

export const PrimaryButton = (props: any) => {
  return (
    <button data-testid={props.id} id={props.id} className={props.className} onClick={props.onClick} disabled={props.disabled}>
      <p className="flex">
        {props.icon ? <span className="mb-1 ml-3">{props.icon}</span> : null}
        <span className="m-4">{props.label}</span></p>
    </button>
  );
};
