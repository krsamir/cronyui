import React from "react";
import "./Input.css";
export interface InputProps extends React.HTMLProps<HTMLInputElement> {
}
declare const Input: React.ForwardRefExoticComponent<Omit<InputProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
