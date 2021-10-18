import React from 'react';
import cn from 'classnames';
import styles from './Button.module.scss';

interface IButton {
  children: React.ReactNode;
  variant?: 'primary' | 'transparent' | 'text';
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  children,
  variant = 'primary',
  disabled,
  className,
  onClick,
}) => {
  return (
    <button
      type="button"
      className={cn(className, styles.button, styles[variant])}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
