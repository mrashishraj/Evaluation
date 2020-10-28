import React from "react"
import {Route,Switch} from "react-router-dom"
import Login from "./Component/Form"
import Navbar from "./Component/Navbar"
import Register from "./Component/Registration"
import Dashboard from "./Component/Dashboard"


class Router extends React.Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
            <div>
                <Route path="/" render={()=> <Navbar/>}/>
                <Switch>
                <Route path="/" exact render={()=><Login/>}/>
                <Route path="/Register" render={()=><Register/>}/>
                <Route path="/dashboard" render={()=><Dashboard/>}/>
                </Switch>
            </div>
        )
    }
}

export default Router