import React from "react"
import { Link } from "react-router-dom"

export default class Navbar extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <>
            <Link to="/">Login</Link>
            <Link to="/dashboard">Dashboard</Link>
            </>
        )
    }
}