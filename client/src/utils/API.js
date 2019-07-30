import axios from "axios";

export default {

    register: newUser => {
        return axios.post("/api/register", {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            password: newUser.password,
            phoneNumber: newUser.phoneNumber
        })
        .then(Response => {
            console.log(Response)
            console.log("_______________")
            console.log("Registered!!!!!!")
        })
    },

    login: user => {
        return axios.post("api/login", {
            email: user.email,
            password: user.password
        })
        .then(Response => {
            localStorage.setItem('usertoken', Response.data)
            return Response.data
        })
        .catch(err => {
            console.log(err)
        })
    }
}