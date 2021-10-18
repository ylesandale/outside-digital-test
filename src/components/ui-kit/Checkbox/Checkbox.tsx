import React from 'react';
import cn from 'classnames';
import styles from './Checkbox.module.scss';
import { ReactComponent as CheckboxIcon } from 'assets/Checkbox.svg';

interface ICheckboxProps {
  id: string;
  checked: boolean;
  disabled?: boolean;
  onChange: () => void;
  label?: React.ReactNode;
  className?: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({
  id,
  checked,
  disabled,
  onChange,
  label,
  className,
}) => {
  return (
    <label
      htmlFor={id}
      className={cn(styles.label, className, {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
    >
      <input
        id={id}
        checked={checked}
        disabled={disabled}
        type="checkbox"
        onChange={onChange}
      />

      <div className={styles.checkbox}>
        <CheckboxIcon className={styles.checkboxIcon} />
      </div>
      {label}
    </label>
  );
};

export default Checkbox;
