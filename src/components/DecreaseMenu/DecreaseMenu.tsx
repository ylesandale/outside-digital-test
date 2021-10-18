import React, { useState } from 'react';
import cn from 'classnames';
import Tag from 'components/ui-kit/Tag/Tag';
import styles from './DescreaseMenu.module.scss';

interface IDecreaseMenuProps {
  className?: string;
}

const DecreaseMenu: React.FC<IDecreaseMenuProps> = ({ className }) => {
  const [activeItem, setActiveItem] = useState(0);
  const menuItems = ['Платеж', 'Срок'];
  return (
    <div className={cn(styles.container, className)}>
      <p className={styles.title}>Что уменьшаем?</p>
      <div className={styles.tags}>
        {menuItems.map((item, index) => (
          <Tag
            onClick={() => setActiveItem(index)}
            key={index}
            active={activeItem === index}
          >
            {item}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default DecreaseMenu;
