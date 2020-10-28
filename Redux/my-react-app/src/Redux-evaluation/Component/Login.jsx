import React from "react"
import {postLoginData} from "../Redux/Action"
import {connect} from "react-redux"
import {Redirect} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            uName:"",
            pass:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render(){
        const {uName,pass} = this.state
        const {postData,isLoading,isAuth,errMsg} = this.props
       if(isAuth){
            return(
                    <Redirect to="/dashboard"/>)
        }

        return(
        <div style={{margin:"200px",backgroundColor:"pink",height:"150px",width:"250px",padding:"80px"}}>
                <label htmlFor=""> UserName </label>
                <input type="text" name="uName" value={uName} onChange={this.handleChange}/> <br/><br/>
                <label htmlFor=""> Password </label>
                <input type="text" name="pass" value={pass} onChange={this.handleChange}/><br/><br/>
                <button style={{width:"100px"}} onClick={()=>postData({uName,pass})}> <h3>Login</h3> </button>
        <p>{errMsg?"Wrong credentials..!!":null}</p>
                {isLoading?"Loading...":null}
        </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoading:state.isLoading,
    token:state.token,
    isAuth:state.isAuth,
    errMsg:state.errMsg
})

const mapDispatchToProps = dispatch => ({postData:(payload)=>dispatch(postLoginData(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(Login)