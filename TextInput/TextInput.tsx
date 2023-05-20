import React, { forwardRef } from "react";
import { arrayToString } from "../Utilities/utilities";
import "./TextInput.css";

export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {}

type Ref = HTMLInputElement;

const TextInput = forwardRef<Ref, TextInputProps>((props, ref) => (
  <React.Fragment>
    <input
      type="text"
      ref={ref}
      {...props}
      className={arrayToString(["inp", props.className ?? ""])}
    />
  </React.Fragment>
));

export default TextInput;
