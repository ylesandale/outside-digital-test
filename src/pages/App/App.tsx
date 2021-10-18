import React, { useState } from 'react';
import cn from 'classnames';
import { Form, Field } from 'react-final-form';
import Button from 'components/ui-kit/Button/Button';
import Modal from 'components/ui-kit/Modal/Modal';
import Input from 'components/ui-kit/Input/Input';
import DecreaseMenu from 'components/DecreaseMenu/DecreaseMenu';
import CalculatedList from 'components/CalculatedList/CalculatedList';
import { FormError, FormValues } from 'components/types/form';
import styles from './App.module.scss';

const MAX_TAX_DEDUCTION = 260000;
const LIMIT_SALARY = 170000;

const App: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [yearsTaxs, setYearsTaxs] = useState<number[]>([]);

  const validateForm = (values: FormValues) => {
    const errors: FormError = {};

    if (!values.salary) {
      errors.salary = 'Поле обязательно для заполнения';
    }

    return errors;
  };

  const onSubmitForm = (values: FormValues) => {
    let taxs: number[] = [];
    const taxForOneYear = Number(values.salary) * 12 * 0.13;

    if (taxForOneYear < LIMIT_SALARY) {
      do {
        taxs.push(taxForOneYear);
      } while (
        taxs.reduce((a, b) => a + b, 0) + taxForOneYear <
        MAX_TAX_DEDUCTION
      );

      const sumOfTaxs = taxs.reduce((a, b) => a + b, 0);
      const sumDifference = MAX_TAX_DEDUCTION - sumOfTaxs;

      if (sumDifference > 0) {
        taxs.push(sumDifference);
      }

      setYearsTaxs(taxs);
    } else {
      setYearsTaxs([MAX_TAX_DEDUCTION]);
    }
  };

  return (
    <div className={cn('container', styles.container)}>
      <Button onClick={() => setModalOpen(true)} variant="transparent">
        Налоговый вычет
      </Button>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <>
          <h1 className={styles.modalTitle}>Налоговый вычет</h1>
          <p className={styles.modalSubtitle}>
            {
              'Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет \n не более 13% от своего официального годового дохода.'
            }
          </p>
          <Form
            validate={validateForm}
            onSubmit={onSubmitForm}
            render={({ handleSubmit }) => (
              <form onSubmit={handleSubmit}>
                <Field name="salary">
                  {({ input, meta }) => (
                    <Input
                      id="salary"
                      placeholder="Введите данные"
                      label="Ваша зарплата в месяц"
                      type="number"
                      error={meta.touched && meta.error}
                      {...input}
                    />
                  )}
                </Field>
                <Button
                  onClick={handleSubmit}
                  className={styles.calculateButton}
                  variant="text"
                >
                  Рассчитать
                </Button>
                <CalculatedList items={yearsTaxs} />
                <DecreaseMenu className={styles.menu} />
                <Button>Добавить</Button>
              </form>
            )}
          />
        </>
      </Modal>
    </div>
  );
};

export default App;
