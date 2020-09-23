import React from 'react';
import './Button.scss';

export const Button: React.FC< React.ButtonHTMLAttributes<HTMLButtonElement> > = ( { type, className, ...rest } ) => {
  let classes = "btn ";
  if ( className ) {
    classes += className;
  }

  if ( !type ) {
    type = "button";
  }

  return <button type={ type } className={ classes.trim() } { ...rest } />;
};
