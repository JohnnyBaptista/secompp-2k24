import React, { ReactElement } from "react";
import { CounterContainer, CounterButton, CounterValue } from "./CounterStyles";

const Counter: React.FC<{
  label?: string;
  icon?: ReactElement;
  startingValue?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}> = ({ label, icon, startingValue, onDecrement, onIncrement }) => {
  const [count, setCount] = React.useState(startingValue || 0);

  const increment = () => {
    setCount(count + 1);
    if (onIncrement) onIncrement();
  };
  const decrement = () => {
    setCount(count - 1);
    if (onDecrement) onDecrement();
  };

  return (
    <CounterContainer>
      <div style={{ display: "flex", gap: "5px" }}>
        {icon}
        <span style={{ fontSize: "24px" }}>{label}</span>
      </div>
      <CounterValue>{count}</CounterValue>
      <div>
        <CounterButton onClick={decrement} disabled={count <= 0}>
          -
        </CounterButton>
        <CounterButton onClick={increment}>+</CounterButton>
      </div>
    </CounterContainer>
  );
};

export default Counter;
