import React, { useState } from 'react';
import Checkbox from 'components/ui-kit/Checkbox/Checkbox';
import styles from './CalculatedList.module.scss';

interface ICalculatedListProps {
  items: number[];
}

const CalculatedList: React.FC<ICalculatedListProps> = ({ items }) => {
  const [checkedItems, setCheckedItems] = useState([0, 1, 2]);

  const onClickCheckbox = (checkbox: number) => {
    if (checkedItems.includes(checkbox)) {
      setCheckedItems(checkedItems.filter((item) => item !== checkbox));
    } else {
      setCheckedItems([...checkedItems, checkbox]);
    }
  };

  const getYearName = (year: number) => {
    if (year === 1 || year === 4 || year === 5 || year === 9 || year === 10) {
      return `${year}-ый`;
    } else if (year === 2 || year === 6 || year === 7 || year === 8) {
      return `${year}-ой`;
    } else if (year === 3) {
      return '3-ий';
    }
  };

  if (items.length) {
    return (
      <div className={styles.container}>
        <p className={styles.title}>
          Итого можете внести в качестве досрочных:
        </p>
        {items.map((item, index) => (
          <Checkbox
            key={index}
            id={`payment${index + 1}`}
            checked={checkedItems.includes(index)}
            label={
              <p className={styles.checkboxText}>
                {item} рублей <span>в {getYearName(index + 1)} год</span>
              </p>
            }
            onChange={() => onClickCheckbox(index)}
            className={styles.checkbox}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default CalculatedList;
