import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [amount, setAmount] = useState(0);
  const [loanedAmount, setLoanedAmount] = useState(0);
  const [borrowedAmount, setBorrowedAmount] = useState(0);
  const [users, setUsers] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onLoanClick = () => {
    setLoanedAmount((prevLoanedAmount) => prevLoanedAmount + amount);
  };

  const onBorrowClick = () => {
    setBorrowedAmount((prevBorrowedAmount) => prevBorrowedAmount + amount);
  };

  const result = loanedAmount - borrowedAmount;

  useEffect(() => {
    if (result > 0) {
      setLoanedAmount(result);
      setBorrowedAmount(0);
    } else if (result < 0) {
      setBorrowedAmount(Math.abs(result));
      setLoanedAmount(0);
    }
  }, [result]);

  const renderResult = () => {
    if (result > 0) {
      return <p className="green-text">${result}</p>;
    } else if (result < 0) {
      return <p className="red-text">${result}</p>;
    } else {
      return <p className="neutral-text">${result}</p>;
    }
  };

  const handleLogin = (userID, password) => {
    if (users[userID] === password) {
      setIsLoggedIn(true);
    } else {
      alert('Invalid login credentials');
    }
  };

  const handleSignUp = (userID, password) => {
    if (users[userID]) {
      alert('This user ID has been taken');
    } else {
      setUsers({ ...users, [userID]: password });
      setIsSignUp(false);
    }
  };

  if (!isLoggedIn) {
    if (isSignUp) {
      return <SignUpForm onSignUp={handleSignUp} />;
    } else {
      return (
        <>
          <LoginForm onLogin={handleLogin} />
          <button onClick={() => setIsSignUp(true)}>Sign Up</button>
        </>
      );
    }
  }

  return (
    <div className="App">
      <p>Welcome, admin!</p>
      <Input
        placeholder="Your name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <Input
        placeholder="Your partner"
        onChange={(e) => setFriendName(e.target.value)}
      />
      <Input
        placeholder="Amount"
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <p>User: {userName}</p>
      <p>Partner: {friendName}</p>
      <p>Money: ${amount}</p>
      <Button
        text={`Lend ${friendName} money`}
        color="green"
        onClick={onLoanClick}
      />
      <Button
        text={`Borrow ${friendName} money`}
        color="red"
        onClick={onBorrowClick}
      />
      {renderResult()}
    </div>
  );
}

export default App;
