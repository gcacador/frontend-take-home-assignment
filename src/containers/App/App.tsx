import * as React from 'react';

// ASSETS
import houseIcon from '../../icons/house-saving-goal.svg'

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
