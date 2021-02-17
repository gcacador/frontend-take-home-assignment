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

  const totalAmountRef = React.useRef<HTMLDivElement | null>(null);
  const reachGoalByRef = React.useRef<HTMLDivElement | null>(null);
  const resultRef = React.useRef<HTMLDivElement | null>(null);
  const buttonRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <StyleReset />

      <Topbar />

      <Container
        title={
          <>
            Let{"'"}s plan your <strong>saving goal.</strong>
          </>
        }
      >
        <Card
          header={{
            icon: houseIcon,
            title: 'Buy a house',
            subtitle: 'Saving goal'
          }}
        >
          <Form
            onSubmit={handleFormSubmit}
            elements={[totalAmountRef, reachGoalByRef, resultRef, buttonRef]}
          >
            <FormField
              id="totalAmount"
              label="Total Amount"
              type="money"
              onChange={handleTotalAmountChange}
              elRef={totalAmountRef}
              inputConfig={{
                value: totalAmount.toString()
              }}
            />

            <FormField
              id="reachGoalBy"
              label="Reach goal by"
              type="date"
              onChange={handleDateChange}
              elRef={reachGoalByRef}
              inputConfig={{
                min: '02-15-2021',
                max: '02-15-2050',
                step: '30'
              }}
            />

            <Result
              label="Monthly amount"
              value={monthlyAmount}
              elRef={resultRef}
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

            <Button buttonConfig={{ type: 'submit' }} elRef={buttonRef}>
              Confirm
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export { App };
