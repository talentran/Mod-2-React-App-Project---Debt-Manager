import React, { useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { renderResultAmount } from "../helpers/renderResultAmount";

function LoanBorrowApp({ userName }) {
    const [friendName, setFriendName] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [partnerLocation, setPartnerLocation] = useState("");
    const [amount, setAmount] = useState(0);
    const [loanedAmount, setLoanedAmount] = useState(0);
    const [borrowedAmount, setBorrowedAmount] = useState(0);
    const [receipts, setReceipts] = useState([]);

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/timezone/PST8PDT').then((res) => res).then((r) => r.json()).then((d) => console.log(d))
    }, [])

    const onLoanClick = () => {
    const newLoanedAmount = loanedAmount + amount;
    setLoanedAmount(newLoanedAmount);

    const transaction = {
      from: userName,
      to: friendName,
      amount: amount,
      currency: currency,
      location: "USA",
      time: new Date().toLocaleString()
    };

    const newReceipt = `Receipt: User ${transaction.from} in ${transaction.location} has lent ${transaction.amount} ${transaction.currency} to ${transaction.to} in ${partnerLocation} at ${transaction.time}. Total lent so far: ${newLoanedAmount} ${transaction.currency}`;
    console.log(newReceipt);
    setReceipts([...receipts, newReceipt]);
    };

    const onBorrowClick = () => {
    const newBorrowedAmount = borrowedAmount + amount;
    setBorrowedAmount(newBorrowedAmount);

    const transaction = {
      from: friendName,
      to: userName,
      amount: amount,
      currency: currency,
      location: partnerLocation,
      time: new Date().toLocaleString()
    };
    
    const receipt = `Receipt: ${transaction.from} at ${transaction.location} lent ${transaction.amount} ${transaction.currency} to ${transaction.to} in USA on ${transaction.time}. Total borrowed so far: ${newBorrowedAmount} ${transaction.currency}`;
    setReceipts(prevReceipts => [...prevReceipts, receipt]);
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

    return (
    <div className="App">
      <p>Please add your client or partner</p>
      
      <Input
        placeholder="Name of your client or partner"
        onChange={(e) => setFriendName(e.target.value)}
      />

      <select onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">US Dollar (USD)</option>
        <option value="VND">Vietnamese Dong (VND)</option>
        <option value="RUB">Russian Ruble (RUB)</option>
        <option value="INR">Indian Rupee (INR)</option>
        <option value="GOLD">GOLD (1 oz)</option>
      </select>

      <Input
        placeholder="Location of your client or partner"
        onChange={(e) => setPartnerLocation(e.target.value)}
      />

      <Input  
        placeholder="Amount"
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
      />

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

      <p><u>Summary:</u></p>
      <p>Partner: {friendName}</p>
      <p>Money: ${amount}</p>
      {renderResultAmount(result)}

      {receipts.map((receipt, index) => (
        <p key={index}>{receipt}</p>
      ))}
      {/* <History history={history} /> */}

    </div>
    );
}

export default LoanBorrowApp;