import React from "react"
import {Route,Switch} from "react-router-dom"
import Dashboard from "../Component/Dashboard"
import Login from "../Component/Login"
// import Navbar from "../Component/Navbar"
import Edit from "../Component/Edit"


class Router extends React.Component{
    render(){
        return(
            <div>
                <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/dashboard" exact component={Dashboard}/>
                <Route path="/dashboard/edit/:id" render={(props)=><Edit {...props}/>}/>     
                </Switch>           
            </div>
        )
    }
}

export default Router