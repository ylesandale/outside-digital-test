import React from 'react';
import cn from 'classnames';
import styles from './Tag.module.scss';

interface ITagProps {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
}

const Tag: React.FC<ITagProps> = ({ children, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={cn(styles.tag, { [styles.active]: active })}
    >
      {children}
    </div>
  );
};

export default Tag;
