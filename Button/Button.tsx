import React, { PropsWithChildren } from 'react';
import './Button.css';
import { arrayToString } from '../Utilities/utilities';

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'reset' | 'submit';
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  autoFocus: boolean;
  props: any;
}
/**
 * @props
 *
 * className: adds classname to the HTML element
 *
 * id: add id to the HTML element
 *
 * style: adding custom styles to the HTML element
 *
 * type: type of button: 'button' | 'reset' | 'submit'
 *
 * onClick: onClick handler for button
 *
 * autoFocus: boolean
 *
 * props: provide addition props via this object
 */
function Button({
  children = '',
  className = '',
  id = '',
  style = {},
  onClick = () => null,
  props = {},
  autoFocus = false,
}: ButtonProps) {
  return (
    <React.Fragment>
      <button
        id={id}
        className={arrayToString(['btn', className ?? ''])}
        style={{ ...style }}
        onClick={onClick}
        autoFocus={autoFocus}
        {...props}
      >
        {children}
      </button>
    </React.Fragment>
  );
}

export default Button;
