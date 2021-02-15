import * as React from 'react';

// ASSETS
import logo from '../icons/logo.svg';

const App: React.FunctionComponent = () => {
  return (
    <>
      <header>
        <img src={logo} />
      </header>

      <main>
        <h1>
          Let{"'"}s plan your <strong>saving goal.</strong>
        </h1>

        <div>
          <h2>Buy a house</h2>
          <h3>Saving goal</h3>
        </div>

        <form>
          <div>
            <label htmlFor="totalAmount">Total Amount</label>
            <input id="totalAmount" type="number" placeholder="0" />
          </div>

          <div>
            <label htmlFor="reachGoalBy">Reach goal by</label>
            <input
              id="reachGoalBy"
              min="15-02-2021"
              max="15-02-2050"
              step="31"
              type="date"
            />
          </div>

          <div>
            <span>Monthly amount</span>
            <input type="number" value={521} readOnly />

            <div>
              <p>
                You{"'"}re planning 48 monthly deposits to reach your $25,000
                goal by October 2020.
              </p>
            </div>
          </div>

          <button type="submit">Confirm</button>
        </form>
      </main>
    </>
  );
};

export default App;
