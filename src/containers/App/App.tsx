import * as React from 'react';

// ASSETS
import houseIcon from '../../icons/house-saving-goal.svg';

// COMPONENTS
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { Form, FormField } from '../../components/Form';
import { Result } from '../../components/Result/Result';
import { Topbar } from '../../components/Topbar/Topbar';

// STYLES
import { StyleReset } from '../../styles/reset';

const App: React.FunctionComponent = () => {
  const [totalAmount, setTotalAmount] = React.useState(0);
  const [monthsUntilGoal, setMonthsUntilGoal] = React.useState(0);
  const [monthlyAmount, setMonthlyAmount] = React.useState(0);

  const calculateMonthlyValue = () => {
    if (monthsUntilGoal === 0) return;

    setMonthlyAmount(totalAmount / monthsUntilGoal);
  };

  const handleTotalAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setTotalAmount(Number(value));
    calculateMonthlyValue();
  };

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    const date = new Date(value);
    const now = new Date();
    let months = (date.getFullYear() - now.getFullYear()) * 12;
    months -= date.getMonth();
    months += now.getMonth();

    setMonthsUntilGoal(months);
    calculateMonthlyValue();
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  return (
    <>
      <StyleReset />

      <Topbar />

      <Container>
        <Card
          header={{
            icon: houseIcon,
            title: 'Buy a house',
            subtitle: 'Saving goal'
          }}
        >
          <Form onSubmit={handleFormSubmit}>
            <FormField
              id="totalAmount"
              label="Total Amount"
              type="money"
              onChange={handleTotalAmountChange}
              inputConfig={{
                placeholder: '0'
              }}
            />

            <FormField
              id="reachGoalBy"
              label="Reach goal by"
              type="date"
              onChange={handleDateChange}
              inputConfig={{
                min: '15-02-2021',
                max: '15-02-2050',
                step: '30'
              }}
            />

            <Result
              label="Monthly amount"
              value={monthlyAmount}
              text={
                <>
                  You{"'"}re planning <strong>48 monthly deposits</strong> to
                  reach your <strong>$25,000</strong> goal by
                  <strong> October 2020</strong>.
                </>
              }
            />

            <Button buttonConfig={{ type: 'submit' }}>Confirm</Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export { App };
