import React from 'react';

const Register = ({ onSubmit, setNewUser }) => {
    const returnLogin = () => {
        setNewUser(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label for="fname">First Name:</label>
                <input type="text" className="form-control" placeholder="First name" name="firstName" />
            </div>
            <div className="form-group">
                <label for="fname">Last Name:</label>
                <input type="text" className="form-control" placeholder="Last name" name="lastName" />
            </div>
            <div className="form-group">
                <label for="fname">Email:</label>
                <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
                <label for="fname">Password:</label>
                <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <div className="form-group">
                <label for="fname">Phone Number: 123-123-1234</label>
                <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="form-control" placeholder="Cell, Home, or Work Phone Number" name="phoneNumber" />
            </div>
            <button type="submit" className="btn btn-success">Register</button>
            <button type="button" className="btn btn-success" onClick={returnLogin}>Return to Login</button>
        </form>
    )
}

export default Register;