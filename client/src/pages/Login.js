import React, { Component } from 'react';
import { IntroNav } from "../components/Nav"
// import { withRouter } from "react-router-dom";
// import SignIn from "../components/SignIn";
// import Register from "../components/Register";
import API from "../utils/API"
import "../assets/css/index.css"

class Login extends Component {
    state = {
        isLogged: false,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: ""
    }

    changeForm = () => {
        if (this.state.isLogged === false) {
            this.setState({ isLogged: true })
        } else if (this.state.isLogged === true) {
            this.setState({ isLogged: false })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onRegistration = event => {
        event.preventDefault()

        // console.log("inside onRegistration()");

        const newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber
        }

        console.log(newUser);
        console.log("__________________")
        // console.log(localStorage)
        console.log("__________________")

        API.register(newUser).then(res => {
            console.log(res.data);
            if (res.data === "User already exists") {
                console.log(res.data);
                window.confirm(res.data)
                this.setState({ isLogged: false }, () => {
                    this.props.history.push("/")
                })
            } else {
                this.props.history.push("/portal")
            }

        })
    }

    onLogin = event => {
        event.preventDefault()
        const currentUser = {
            email: this.state.email,
            password: this.state.password
        }

        API.login(currentUser).then(res => {
            if (res.data === "User does not exist") {
                window.confirm(res.data)
                this.setState({ isLogged: true }, () => {
                    this.props.history.push("/")
                })
            } else {
                console.log(res.data);
                this.props.history.push("/portal");
            }

        })
    }


    // const { firstName, lastName, email, password, phoneNumber } = event.target.elements;

    // const creatingUser = {
    // firstName: firstName.value,
    // lastName: lastName.value,
    // email: email.value,
    // password: password.value,
    // phoneNumber: phoneNumber
    // }

    // API.register(creatingUser).then(res => {
    //     if (res) {
    //         this.props.history.push("/portal")
    //     }
    // }

    render() {
        const SignIn = (
            <div>
                <IntroNav />
                <form id="Form">
                    <h3>Sign-In</h3>
                    <div className="inputDiv">
                        <i className="fas fa-envelope-square"></i>
                        <input
                            className="Input"
                            type="email"
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                            className="Input"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success" onClick={this.onLogin}>SignIn</button>
                    <h3>Don't have an account?</h3>
                    <button type="button" className="btn btn-success" onClick={this.changeForm}>Create Account</button>
                </form>
            </div>

        )

        const Register = (
            <div>
                <IntroNav />
                <form onSubmit={this.onRegistration} id="Form">
                    <h3>Register</h3>
                    <div className="inputDiv">
                        <input
                            type="text"
                            className="Input"
                            placeholder="First name"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                            type="text"
                            className="Input"
                            placeholder="Last name"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                            type="email"
                            className="Input"
                            placeholder="Email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                            type="password"
                            className="Input"
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className="inputDiv">
                        <input
                            type="tel"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            className="Input"
                            placeholder="Phone (XXX) XXX-XXXX"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success" id="registerBtn">Register</button>
                    <button type="button" className="btn btn-success" id="registerBtn" onClick={this.changeForm}>Return to Login</button>
                </form>
            </div>

        )

        return (
            <div className="test">
                {!this.state.isLogged ? (SignIn) : (Register)}
            </div>
        )
    }
}

export default Login;

// const Login = ({ history }) => {
//     // add state here to switch from the use of hooks and 
//     // look at components you might be able to switch them from hooks too 
//     // (look at hooks video!!!!!!!)

//     const [newUser, setNewUser] = useState(false);

//     const createNewUser = useCallback(async event => {
//         event.preventDefault();
//         const { firstName, lastName, email, password, phoneNumber } = event.target.elements;

//         const creatingUser = {
//             firstName:
//             lastName:
//             email:
//             password:
//             phoneNumber:
//         }

//         API.register(creatingUser).then(res => {
//             if (res) {
//                 this.props.history.push("/portal")
//             }
//         })
//     }, [])

//     return (
//         <div>
//             {/* change newUser to fit the state (this.state newUser = false) */}
//             {!newUser ? (<SignIn onSubmit={createNewUser} setNewUser={setNewUser} />) : (<Register newUser={newUser} setNewUser={setNewUser} />)}
//         </div>
//     )
// };