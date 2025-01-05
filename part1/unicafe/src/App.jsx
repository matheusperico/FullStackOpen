import { useState } from "react";

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const averageScore = (good * 1 + bad * -1) / all || 0;
  const positiveValue = (good / all) * 100 || 0;

  if (all > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={averageScore} />
          <StatisticLine text="positive" value={positiveValue} />
        </tbody>
      </table>
    );
  }
  return <div> No feedback given</div>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const setToNeutral = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const setToBad = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={setToGood} text="good"></Button>
      <Button handleClick={setToNeutral} text="neutral"></Button>
      <Button handleClick={setToBad} text="bad"></Button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
