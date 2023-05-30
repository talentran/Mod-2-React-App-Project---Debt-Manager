import React, { useState } from 'react';
import './SignUpForm.css';

const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Professor", "Master", "Sir", "Madam", 
"Lady", "Lord", "King", "Queen", "Prince", "Princess", "Baron", "Baroness", "Count", "Countess", "Duchess", "Emperor", "Empress", 
"Captain", "Commander", "Admiral", "Colonel", "General", "Vice President", "President", "Mayor", 
"Mother", "Father", "Ambassador", "Messenger", "Savior", "Other..."];
const suffixes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", 
"XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "Jr", "Sr", 
"of Light", "of Darkness", "from Heaven", "from Hell", "from The Void", "from another World", "Other..."];
const races = ["Black", "White", "Yellow", "Brown", "Red", "Purple", "Green", "Blue", "Pink", "Orange", "Cyan", 
"Human", "Beastman", "Dwarf", "Orc", "Ogre", "Goblin", "Troll", "Undead", 
"Night Elf", "Dark Elf", "Blood Elf", "Wood Elf", "High Elf", "Khajiit", "Argonian", "Vampire", "Grot", "Angel", "Demon", "Other..."];
const sexes = ["Female", "Male", "Intersex", "Trans Female", "Trans Male", "Genderqueer", "She-male", "He-female", "Non-binary", "Universal", "Other..."];

function SignUpForm({ onSignUp }) {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [givenName, setGivenName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [surname, setSurname] = useState("");
  const [suffix, setSuffix] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [race, setRace] = useState("");
  const [sex, setSex] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [securityNumber, setSecurityNumber] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [signature, setSignature] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      onSignUp(userID, password);
    }
  };

  return (
    <form className="signUpForm" onSubmit={handleSubmit}>

        <div className="form-section">
        <h2>Information</h2>
            <label>Title:</label>
            <input type="text" onChange={(e) => setTitle(e.target.value)} />
            <label>Given Name:</label>
            <input type="text" onChange={(e) => setGivenName(e.target.value)} />
            <label>Middle Name:</label>
            <input type="text" onChange={(e) => setMiddleName(e.target.value)} />
            <label>Surname:</label>
            <input type="text" onChange={(e) => setSurname(e.target.value)} />
            <label>Suffix:</label>
            <input type="text" onChange={(e) => setSuffix(e.target.value)} />
            <label>Date of Birth:</label>
            <input type="date" onChange={(e) => setDob(e.target.value)} />
            <label>Address:</label>
            <input type="text" onChange={(e) => setAddress(e.target.value)} />
            <label>Race:</label>
            <input type="text" onChange={(e) => setRace(e.target.value)} />
            <label>Sex:</label>
            <input type="text" onChange={(e) => setSex(e.target.value)} />
        </div>

        <div className="form-section">
        <h2>Transaction</h2>
            <label>Account Number:</label>
            <input type="text" onChange={(e) => setAccountNumber(e.target.value)} />
            <label>Expire Date:</label>
            <input type="date" onChange={(e) => setExpireDate(e.target.value)} />
            <label>3-Digit Security Number:</label>
            <input type="text" onChange={(e) => setSecurityNumber(e.target.value)} />
            <label>Card Holder Name:</label>
            <input type="text" onChange={(e) => setCardHolderName(e.target.value)} />
            <label>Billing Address:</label>
            <input type="text" onChange={(e) => setBillingAddress(e.target.value)} />
            <label>Phone:</label>
            <input type="tel" onChange={(e) => setPhone(e.target.value)} />
            <label>Signature:</label>
            <input type="text" onChange={(e) => setSignature(e.target.value)} />
        </div>

        <div className="form-section">
        <h2>Account</h2>
            <label>Email:</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
            <label>User ID:</label>
            <input type="text" onChange={(e) => setUserID(e.target.value)} />
            <label>Password:</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            <label>Confirm Password:</label>
            <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>

        <input type="submit" value="Sign Up" />
    </form>
  );
}

export default SignUpForm;
