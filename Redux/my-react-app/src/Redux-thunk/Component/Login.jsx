import React from "react"
import {connect} from "react-redux"
import {fetchUserData} from "../Redux/loginAction"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uname:"",
            pass:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {uname,pass} = this.state
        const {fetchData,token} = this.props
        console.log(token)
        return(
            <>
            <label htmlFor="">username</label>
            <input type="text" name="uname" value={uname} onChange={this.handleChange}/>
            <label htmlFor="">Password</label>
            <input type="text" name="pass" value={pass} onChange={this.handleChange}/>
            <button onClick={()=>fetchData({uname,pass})}>Login</button>
            </>
        )
    }
}

const mapStateToProps = state =>({
    token:state.token,
    isLoading:state.isLoading,
    isAuth:state.isAuth
})

const mapDispatchToProps = dispatch =>({
    fetchData:(payload)=>dispatch(fetchUserData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Login)