import React from "react";

export const Input = (props: any) => {
  return (
    <input
      data-testid={props.id}
      id={props.id}
      className={props.className}
      onChange={props.onChange}
      disabled={props.disabled}
      placeholder={props.placeholder}
    >
    </input>
  );
};
