import React from "react";
import "./TextInput.css";
export interface TextInputProps extends React.HTMLProps<HTMLInputElement> {
}
declare const TextInput: React.ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default TextInput;
