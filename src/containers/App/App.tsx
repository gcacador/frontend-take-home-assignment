import * as React from 'react';

// COMPONENTS
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import { Form, FormField } from '../../components/Form';
import { Result } from '../../components/Result/Result';
import { Topbar } from '../../components/Topbar/Topbar';

const App: React.FunctionComponent = () => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault();

  return (
    <>
      <Topbar />

      <Container>
        <Card
          header={
            <div>
              <h2>Buy a house</h2>
              <h3>Saving goal</h3>
            </div>
          }
        >
          <Form onSubmit={handleFormSubmit}>
            <FormField
              id="totalAmount"
              label="Total Amount"
              inputConfig={{
                type: 'number',
                placeholder: '0'
              }}
            />

            <FormField
              id="reachGoalBy"
              label="Reach goal by"
              inputConfig={{
                type: 'date',
                min: '15-02-2021',
                max: '15-02-2050',
                step: '30'
              }}
            />

            <Result
              label="Monthly amount"
              value={521}
              text="You're planning 48 monthly deposits to reach your $25,000 goal by October 2020."
            />

            <Button buttonConfig={{ type: 'submit' }}>Confirm</Button>
          </Form>
        </Card>
      </Container>
    </>
  );
};

export { App };
