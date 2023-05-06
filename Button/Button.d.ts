import React, { PropsWithChildren } from 'react';
import './Button.css';
export interface ButtonProps extends PropsWithChildren, React.HTMLProps<HTMLButtonElement> {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    type?: 'button' | 'reset' | 'submit';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    autoFocus?: boolean;
    props?: any;
}
declare const Button: React.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export default Button;
