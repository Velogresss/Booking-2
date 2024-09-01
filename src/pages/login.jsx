import React from 'react';
import './login.css';

function Login() {
    
    return (
        <div className="login-form-container">
        <h1>Вхід</h1>
        <form>
            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    // value={email}
                    // onChange={handleEmailChange}
                    placeholder="Введіть ваш email"
                    required
                />
            </div>
            <div className="social-login">
                <img src="facebook-logo-url" alt="Facebook" />
                <img src="google-logo-url" alt="Google" />
                <img src="apple-logo-url" alt="Apple" />
            </div>
            <button type="submit" className="submit-button">Увійти</button>
        </form>
        </div>
    );
}

export default Login;