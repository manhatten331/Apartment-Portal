import React, { useCallback, useState } from 'react';
import { withRouter } from "react-router-dom";
import SignIn from "../components/SignIn";
import Register from "../components/Register";
import API from "../utils/API"

const Login = ({ history }) => {
    // add state here to switch from the use of hooks and 
    // look at components you might be able to switch them from hooks too 
    // (look at hooks video!!!!!!!)

    const [newUser, setNewUser ] = useState(false);

    const createNewUser = useCallback(async event => {
        event.preventDefault();
        const { firstName, lastName, email, password, phoneNumber } = event.target.elements;

        const creatingUser = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
            phoneNumber: phoneNumber
        }

        API.register(creatingUser).then(res => {
            if (res) {
                this.props.history.push("/portal")
            }
        })
    },[])

    return (
        <div>
            {/* change newUser to fit the state (this.state newUser = false) */}
            {!newUser ? (<SignIn onSubmit={createNewUser} setNewUser={setNewUser}/>) : (<Register newUser={newUser} setNewUser={setNewUser}/>)}
        </div>
    )
};

export default withRouter(Login);