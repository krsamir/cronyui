import React, { forwardRef } from "react";
import { arrayToString } from "../Utilities/utilities";
import "./Input.css";

export interface InputProps extends React.HTMLProps<HTMLInputElement> {}

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>((props, ref) => (
  <React.Fragment>
    <input
      ref={ref}
      {...props}
      className={arrayToString(["inp", props.className ?? ""])}
    />
  </React.Fragment>
));

export default Input;
