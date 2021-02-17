import * as React from 'react';

const useGoalPlanner = (): {
  goalYear: number;
  goalMonth: string;
  handleDateChange: (e: React.FormEvent<HTMLInputElement>) => void;
  handleTotalAmountChange: (e: React.FormEvent<HTMLInputElement>) => void;
  monthlyAmount: number;
  monthsUntilGoal: number;
  totalAmount: number;
} => {
  const now = new Date();
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const [totalAmount, setTotalAmount] = React.useState(0);
  const [monthsUntilGoal, setMonthsUntilGoal] = React.useState(0);
  const [goalYear, setGoalYear] = React.useState(now.getFullYear());
  const [goalMonth, setGoalMonth] = React.useState(monthNames[now.getMonth()]);
  const [monthlyAmount, setMonthlyAmount] = React.useState(0);

  const calculateMonthlyValue = React.useCallback(() => {
    if (monthsUntilGoal <= 0 || totalAmount <= 0) return;

    const monthlyDeposit = totalAmount / monthsUntilGoal;

    setMonthlyAmount(Math.ceil(monthlyDeposit));
  }, [totalAmount, monthsUntilGoal]);

  React.useEffect(() => {
    calculateMonthlyValue();
  }, [calculateMonthlyValue]);

  const handleTotalAmountChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    setTotalAmount(Number(value));
  };

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    const date = new Date(value);
    const now = new Date();
    let months = (date.getFullYear() - now.getFullYear()) * 12;
    months -= date.getMonth() + 1;
    months += now.getMonth() + 1;

    setMonthsUntilGoal(months);
    setGoalYear(date.getFullYear());
    setGoalMonth(monthNames[date.getMonth()]);
  };

  return {
    goalYear,
    goalMonth,
    handleDateChange,
    handleTotalAmountChange,
    monthlyAmount,
    monthsUntilGoal,
    totalAmount
  };
};

export { useGoalPlanner };
