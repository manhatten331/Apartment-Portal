import React from 'react';

const SignIn = ({ onSubmit, setNewUser }) => {
    
    const createAccount = event => {
        event.preventDefault()
        setNewUser(true);
    }

    return (
        <form onSubmit={onSubmit}>
            <h3>SignIn</h3>
            <div className="form-group">
                <label for="fname">Email:</label>
                <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
                <label for="fname">Password:</label>
                <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="btn btn-success">SignIn</button>
            <h3>Don't have an account?</h3>
            <button type="button" className="btn btn-success" onClick={event => createAccount(event)}>Create Account</button>
        </form>
    )
}

export default SignIn;