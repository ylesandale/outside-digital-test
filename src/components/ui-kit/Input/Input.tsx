import React from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

interface IInputProps {
  placeholder: string;
  id: string;
  label?: string;
  error?: string | null;
  value: string | number;
  onChange: (value: string | number) => void;
  disabled?: boolean;
  type?: string;
}

const Input: React.FC<IInputProps> = ({
  id,
  placeholder,
  label,
  error,
  value,
  onChange,
  disabled,
  type = 'text',
  ...props
}) => {
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    let inputValue = event.currentTarget.value;

    onChange(inputValue);
  };

  return (
    <div
      className={cn(styles.inputContainer, {
        [styles.error]: error,
      })}
    >
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={handleChange}
        className={styles.input}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};

export default Input;
