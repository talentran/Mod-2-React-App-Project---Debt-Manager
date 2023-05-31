import React, { useState, useEffect } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import "./App.css";
import { renderResultAmount } from "./helpers/renderResultAmount";

function App() {
  const [userName, setUserName] = useState("");
  const [friendName, setFriendName] = useState("");
  const [amount, setAmount] = useState(0);
  const [loanedAmount, setLoanedAmount] = useState(0);
  const [borrowedAmount, setBorrowedAmount] = useState(0);
  const [users, setUsers] = useState({});
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [history, setHistory] = useState([]);

  // const obj = {
  //   from: 'Tri',
  //   to: 'Vitalii',
  //   amount: -500,
  //   date: Date.now()
  // }

  useEffect(() => {
    fetch('http://worldtimeapi.org/api/timezone/PST8PDT').then((res) => res).then((r) => r.json()).then((d) => console.log(d))
  }, [])

  const onLoanClick = () => {
    setLoanedAmount((prevLoanedAmount) => prevLoanedAmount + amount);

    const transaction = {
      from: userName,
      to: friendName,
      amount: amount
    }
    setHistory([...history, transaction])

  };

  const onBorrowClick = () => {
    setBorrowedAmount((prevBorrowedAmount) => prevBorrowedAmount + amount);
    const transaction = {
      from: userName,
      to: friendName,
      amount: amount
    }
    setHistory([...history, transaction])
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

  const handleLogin = (userID, password) => {
    if (userID === 'Tri' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Sorry, in this version only Tri is allowed to login');
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
      return <LoginForm onLogin={handleLogin} onSignUpClick={() => setIsSignUp(true)} />;
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
      {renderResultAmount(result)}
      {history.map((item, index) => (
        <div key={index} style={{border: '1px solid black', marginTop: 10}}>
          <p>From: {item.from}</p>
          <p>To: {item.to}</p>
          <p>Amount: {item.amount}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
