import * as React from 'react';

// ASSETS
import houseIcon from '../../icons/house-saving-goal.svg';

// HOOKS
import { useGoalPlanner } from '../../hooks/useGoalPlanner';

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
  const {
    goalMonth,
    goalYear,
    handleDateChange,
    handleTotalAmountChange,
    monthlyAmount,
    monthsUntilGoal,
    totalAmount
  } = useGoalPlanner();

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
                value: totalAmount.toString()
              }}
            />

            <FormField
              id="reachGoalBy"
              label="Reach goal by"
              type="date"
              onChange={handleDateChange}
              inputConfig={{
                min: '02-15-2021',
                max: '02-15-2050',
                step: '30'
              }}
            />

            <Result
              label="Monthly amount"
              value={monthlyAmount}
              text={
                <>
                  You{"'"}re planning
                  <strong> {monthsUntilGoal} monthly deposits </strong>
                  to reach your <strong>${totalAmount}</strong> goal by{' '}
                  <strong>
                    {goalMonth} {goalYear}.
                  </strong>
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
