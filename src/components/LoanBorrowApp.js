import React, { useState, useEffect, useContext } from "react";
import Input from "./Input";
import Button from "./Button";
import GoogleOut from './GoogleLogout';
import Folder from "./Folder";
import { conversion } from "../helpers/conversion";
import { loginContext } from "../context/loginContext";

function LoanBorrowApp() {
    const { user, onGoogleLogout } = useContext(loginContext);

    const [friendName, setFriendName] = useState("");
    const [currency, setCurrency] = useState("USD");
    const [partnerLocation, setPartnerLocation] = useState("");
    const [amount, setAmount] = useState(0);
    const [loanedAmount, setLoanedAmount] = useState(0);
    const [borrowedAmount, setBorrowedAmount] = useState(0);
    const [receipts, setReceipts] = useState([]);
    const [folders, setFolders] = useState([]);
    const [selectedFolder, setSelectedFolder] = useState(null);

    // debug
    useEffect(() => {
        console.log(folders)
    }, [folders])

    const addReceiptToFolder = (type, newReceipt) => {
        const color = type === "loan" ? "green" : "red";

            const existingFolder = folders.find(item => {
                if (item.name === friendName && item.color === color) {
                    return true;
                } else {
                    return false;
                }
            });

            if (existingFolder) {
                setFolders(folders.map((item) => {
                    if (item.name === friendName && item.color === color) {
                        const newItem = {
                            name: item.name,
                            color: item.color,
                            receipts: [...item.receipts, newReceipt]
                        }

                        return newItem;
                    } else {
                        return item;
                    }
                }))
            } else {
                setFolders([...folders, { name: friendName, color: color, receipts: [newReceipt] }]);
            }
        };

    const renderResultAmount = (result) => {
        if (result > 0) {
            return <p className="green-text">${result}</p>;
          } else if (result < 0) {
            return <p className="red-text">${result}</p>;
          } else {
            return <p className="neutral-text">${result}</p>;
          }
    }

    // useEffect(() => {
    //     fetch('http://worldtimeapi.org/api/timezone/PST8PDT').then((res) => res).then((r) => r.json()).then((d) => console.log(d))
    // }, [])

    const onLoanClick = () => {
        // const newLoanedAmount = loanedAmount + amount;
        console.log("HERE", loanedAmount, amount)
        const newLoanedAmount = conversion(loanedAmount + amount, currency);
        // setLoanedAmount(newLoanedAmount);
        setLoanedAmount(newLoanedAmount);
        console.log(user)
        const transaction = {
            from: user.givenName,
            to: friendName,
            amount: amount,
            currency: currency,
            location: "USA",
            time: new Date().toLocaleString()
        };

        const newReceipt = `Receipt: User ${transaction.from} in ${transaction.location} has lent ${transaction.amount} ${transaction.currency}  to ${transaction.to} in ${partnerLocation} at ${transaction.time}. Total lent so far: $${newLoanedAmount}`;
        console.log(newReceipt);
        setReceipts([...receipts, newReceipt]);
        addReceiptToFolder("loan", newReceipt);
    };

    const onBorrowClick = () => {
        const newBorrowedAmount = borrowedAmount + amount;
        // setBorrowedAmount(newBorrowedAmount);
        setBorrowedAmount(conversion(newBorrowedAmount, currency));


        const transaction = {
            from: friendName,
            to: user.givenName,
            amount: amount,
            currency: currency,
            location: partnerLocation,
            time: new Date().toLocaleString()
        };
    
        const receipt = `Receipt: ${transaction.from} at ${transaction.location} lent ${transaction.amount} ${transaction.currency} to ${transaction.to} in USA on ${transaction.time}. Total borrowed so far: $${newBorrowedAmount} ${transaction.currency}`;
        setReceipts(prevReceipts => [...prevReceipts, receipt]);
        addReceiptToFolder("borrow", receipt);
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
        <div className="user-info">
            <img src={user.imageUrl} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.birthday}</p>
            <GoogleOut onGoogleLogout={onGoogleLogout} />
        </div>

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

        {/* <CurrencyConverter amount={amount} currency={currency} setAmountAfterConversion={setAmountAfterConversion} /> */}
        <p>Approximate value in USD: ${conversion(amount, currency)}</p>

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
        <p>Money: {amount}</p>
        {renderResultAmount(result)}

        {/* {receipts.map((receipt, index) => (
            <p key={index}>{receipt}</p>
        ))} */}

        {folders?.length > 0 && folders.map((folder, index) => (
            <Folder 
                key={index} 
                name={folder.name} 
                color={folder.color} 
                receipts={folder.receipts} 
                onClick={() => setSelectedFolder(index)}
            />
        ))}
        
        {selectedFolder !== null && (
            <div>
                {folders[selectedFolder].receipts.map((receipt, index) => (
                    <p key={index}>{receipt}</p>
                ))}
            </div>
        )}
    </div>
    );
}

export default LoanBorrowApp;