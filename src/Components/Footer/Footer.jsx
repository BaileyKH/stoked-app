import React, { useState } from 'react';
import './Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        setEmail("")
    }

    return(
        <div className="footer-container">
            <h3>Newsletter</h3>
            <div className="email-container">
                <input type="email" 
                       placeholder="your@email" 
                       className="email-input" 
                       value={email} 
                       onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" className="email-btn" onClick={handleSubmit}>Subscribe</button>
            </div>
            <div className="footer-content">
                <p>About</p>
                <p>FAQs</p>
                <p>News</p>
                <p>Careers</p>
                <p>Contact Us</p>
            </div>
            <div className="personal-content">
                <p>© {year} BaileyKH. All Rights Reserved.</p>
                <p>This website is for demonstration purposes only</p>
            </div>
        </div>
    );
}