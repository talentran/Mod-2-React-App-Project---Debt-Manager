import React, { useState } from 'react';
// import SignatureCanvas from './SignatureCanvas';
import './SignUpForm.css';

const titles = ["Mr", "Mrs", "Miss", "Ms", "Dr", "Professor", "Master", "Sir", "Madam", 
"Lady", "Lord", "King", "Queen", "Prince", "Princess", "Baron", "Baroness", "Count", "Countess", "Duchess", "Emperor", "Empress", 
"Captain", "Commander", "Admiral", "Colonel", "General", "Vice President", "President", "Mayor", 
"Mother", "Father", "Ambassador", "Messenger", "Savior", "Other..."];
const suffixes = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", 
"XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", 
"XXI", "XXII", "XXIII", "XXIV", "XXV", "XXVI", "XXVII", "XXVIII", "XXIX", "XXX", "Jr", "Sr", 
"of Light", "of Darkness", "from Heaven", "from Hell", "from The Void", "from another World", "Other..."];
const races = ["Asian", "Caucasian", "African", "Hispanic", 
"Black", "White", "Yellow", "Brown", "Red", "Purple", "Green", "Blue", "Pink", "Orange", "Cyan", 
"Human", "Beastman", "Dwarf", "Orc", "Ogre", "Goblin", "Troll", "Undead", 
"Night Elf", "Dark Elf", "Blood Elf", "Wood Elf", "High Elf", "Khajiit", "Argonian", "Vampire", "Grot", "Angel", "Demon", "Other..."];
const sexes = ["Female", "Male", "Intersex", "Trans Female", "Trans Male", "Genderqueer", 
"She-male", "He-female", "Non-binary", "Universal", "Other..."];

function SignUpForm({ onSignUp }) {
    const [title, setTitle] = useState("");
    const [givenName, setGivenName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [surname, setSurname] = useState("");
    const [suffix, setSuffix] = useState("");
    const [dob, setDob] = useState("");
    const [address, setAddress] = useState({ number: "", street: "", city: "", country: "", zip: "" });
    const [race, setRace] = useState("");
    const [sex, setSex] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [expireDate, setExpireDate] = useState("");
    const [securityNumber, setSecurityNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [signature, setSignature] = useState("");
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    // const currentYear = new Date().getFullYear();

    const handleSelectChange = (e, setter) => {
        const { value } = e.target;
        setter(value);
    };
    
    const handleInputChange = (e, setter) => {
        const { value } = e.target;
        setter(value);
    };
    
    const handleAddressChange = (e, field) => {
        const { value } = e.target;
        setAddress(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
        alert('Passwords do not match');
        } else {
        onSignUp(
            title, givenName, surname, middleName, suffix, dob, address, race, sex, 
            accountNumber, expireDate, securityNumber, cardHolderName, billingAddress, phone, signature,
            id, password, confirmPassword, email
            );
        }
    };

    return (
        <form className="signUpForm" onSubmit={handleSubmit}>
          <div className="form-section">

            <h2>Information</h2>

            <div>
                <label htmlFor="title">Title:</label>
                <select id="title" value={title} onChange={e => handleSelectChange(e, setTitle)}>
                    {titles.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {title === "Other..." && <input type="text" onChange={e => handleInputChange(e, setTitle)} />}
            </div>

            <div>
                <label htmlFor="givenName">Given Name:</label>
                <input type="text" id="givenName" onChange={e => handleInputChange(e, setGivenName)} />
            </div>

            <div>
                <label htmlFor="middleName">Middle Name:</label>
                <input type="text" id="middleName" onChange={(e) => handleInputChange(e, setMiddleName)} />
            </div>

            <div>
                <label htmlFor="surname">Surname:</label>
                <input type="text" id="surname" onChange={(e) => handleInputChange(e, setSurname)} />
            </div>
            
            <div>
                <label htmlFor="suffix">Suffix:</label>
                <select id="suffix" value={suffix} onChange={e => handleSelectChange(e, setSuffix)}>
                    {suffixes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {suffix === "Other..." && <input type="text" onChange={e => handleInputChange(e, setSuffix)} />}
            </div>
        
            <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" onChange={e => handleInputChange(e, setDob)} />
            </div>

            <div>
                <label htmlFor="number">Address Number:</label>
                <input type="text" id="number" onChange={e => handleAddressChange(e, "number")} />
                <div>
                    <label htmlFor="street">Street:</label>
                    <input type="text" id="street" onChange={e => handleAddressChange(e, "street")} />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input type="text" id="city" onChange={e => handleAddressChange(e, "city")} />
                </div>
                <div>
                    <label htmlFor="country">Country:</label>
                    <input type="text" id="country" onChange={e => handleAddressChange(e, "country")} />
                </div>
                <div>
                    <label htmlFor="zip">ZIP Code:</label>
                    <input type="text" id="zip" onChange={e => handleAddressChange(e, "zip")} />
                </div>
            </div>

            <div>
                <label htmlFor="race">Race:</label>
                <select id="race" value={race} onChange={e => handleSelectChange(e, setRace)}>
                    {races.map(r => <option key={r} value={r}>{r}</option>)}
                </select>
                {race === "Other..." && <input type="text" onChange={e => handleInputChange(e, setRace)} />}
            </div>

            <div>
                <label htmlFor="sex">Sex:</label>
                <select id="sex" value={sex} onChange={e => handleSelectChange(e, setSex)}>
                    {sexes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
                {sex === "Other..." && <input type="text" onChange={e => handleInputChange(e, setSex)} />}
            </div>

        </div>
        
        <div className="form-section">

            <h2>Transaction</h2>

            <div>
                <label htmlFor="accountNumber">Account Number:</label>
                <input type="number" id="accountNumber" maxLength="10" onChange={e => handleInputChange(e, setAccountNumber)} />
            </div>

            <div>
                <label>Expire Date:</label>
                <input type="date" onChange={(e) => setExpireDate(e.target.value)} />
            </div>

            <div>
                <label htmlFor="securityNumber">3-Digit Security Number:</label>
                <input type="number" id="securityNumber" maxLength="3" onChange={e => handleInputChange(e, setSecurityNumber)} />
            </div>

            <div>
                <label htmlFor="cardHolderName">Card Holder Name:</label>
                <input type="text" id="cardHolderName" onChange={e => handleInputChange(e, setCardHolderName, true)} />
            </div>

            <div>
                <label>Billing Address:</label>
                <input type="text" onChange={(e) => setBillingAddress(e.target.value)} />
            </div>
                
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="number" id="phone" maxLength="10" onChange={e => handleInputChange(e, setPhone)} />
            </div>

            <div>
                <label htmlFor="signature">Signature:</label>
                <input type="signature" onChange={(e) => setSignature(e.target.value)} />
                {/* <SignatureCanvas /> */}
                {/* <canvas id="signature" /> */}
                
            </div>

        </div>

        <div className="form-section">

            <h2>Account</h2>

            <div>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" onChange={e => handleInputChange(e, setEmail)} />
            </div>

            <div>
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" onChange={e => handleInputChange(e, setId)} />
            </div>

            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" onChange={e => handleInputChange(e, setPassword)} />
            </div>

            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" onChange={e => handleInputChange(e, setConfirmPassword)} />
            </div>

        </div>

        <input type="submit" value="Sign Up" />
        </form>
    );
}

export default SignUpForm;
