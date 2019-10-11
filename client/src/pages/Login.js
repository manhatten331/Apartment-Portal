import React, { Component } from 'react';
// import { withRouter } from "react-router-dom";
// import SignIn from "../components/SignIn";
// import Register from "../components/Register";
import API from "../utils/API"

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
            if (res.data === "User already exists"){
                console.log(res.data);
                window.confirm(res.data)
                // this.props.history.push("/")
                this.setState({ isLogged: false }, () => {
                    this.props.history.push("/")
                    // alert("User Already Exist Please Login")
                })
                // alert("User Already Exist Please Login")
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
                this.setState({ isLogged: true }, () =>{
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
            <form>
                <h3>SignIn</h3>
                <div className="form-group">
                    <label htmlFor="fname">Email:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Password:</label>
                    <input 
                    type="password" 
                    className="form-control" 
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
        )

        const Register = (
            <form onSubmit={this.onRegistration}>
                <h3>Register</h3>
                <div className="form-group">
                    <label htmlFor="fname">First Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="First name" 
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Last Name:</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                    required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Email:</label>
                    <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Email" 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    required 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Password:</label>
                    <input 
                    type="password" 
                    className="form-control" 
                    placeholder="Password" 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange} 
                    required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">Phone Number: 123-123-1234</label>
                    <input 
                    type="tel" 
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" 
                    className="form-control" 
                    placeholder="Cell, Home, or Work Phone Number" 
                    name="phoneNumber"
                    value={this.state.phoneNumber}
                    onChange={this.handleInputChange} 
                    required
                    />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
                <button type="button" className="btn btn-success" onClick={this.changeForm}>Return to Login</button>
            </form>
        )

        return (
            <div>
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