import React, { PropsWithChildren, forwardRef } from 'react';
import './Button.css';
import { arrayToString } from '../Utilities/utilities';

export interface ButtonProps
  extends PropsWithChildren,
    React.HTMLProps<HTMLButtonElement> {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  type?: 'button' | 'reset' | 'submit';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  autoFocus?: boolean;
  props?: any;
}
/**
 * @props
 *
 * `className`: adds classname to the HTML element
 *
 * props: provide addition props via this object
 */
type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => (
  <React.Fragment>
    <button
      className={arrayToString(['btn', props.className ?? ''])}
      {...props}
    >
      {props.children}
    </button>
  </React.Fragment>
));

export default Button;
