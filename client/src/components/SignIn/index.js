import React from 'react';

function SignIn() {

    return (
        <form>
            <h3>SignIn</h3>
            <div className="form-group">
                <label htmlFor="fname">Email:</label>
                <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="form-group">
                <label htmlFor="fname">Password:</label>
                <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <button type="submit" className="btn btn-success">SignIn</button>
            <h3>Don't have an account?</h3>
            <button type="button" className="btn btn-success">Create Account</button>
        </form>
    )
}

export default SignIn;