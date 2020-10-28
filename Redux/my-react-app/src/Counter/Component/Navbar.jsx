import React from "react"
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    render() {
        return (
            <>
                <Link to="/"> <button>Login</button> </Link>
                <Link to="/register"> <button>Registration</button> </Link>
                
            </>
        )
    }
}

export default Navbar