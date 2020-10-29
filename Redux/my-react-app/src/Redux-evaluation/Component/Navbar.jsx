import React from "react"
import { Link } from "react-router-dom"

export default class Navbar extends React.Component{
    render(){
        return(
            <>
            <Link to="/">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            </>
        )
    }
}