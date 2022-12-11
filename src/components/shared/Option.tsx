import React from "react";

export const Option = (props: any) => {
  return (
    <>
      {props.sizes.map((size: string, i: number) => {
        return (
          <option
            id={size}
            data-testid={size}
            key={"key" + size}
            defaultValue={size}
          >
            Size: {size}
          </option>
        );
      })}
    </>
  );
};
