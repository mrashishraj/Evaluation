import React from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { fetchUserData } from "../Redux/Action"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            pass: ""
        }
    }

    handleChange = (e) => {
        // e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { email, pass } = this.state
        const { fetchData, token, isLoading, isAuth,msg } = this.props
        console.log(isAuth)
        if(isAuth){
            return(
                <>
                <Redirect to="/dashboard"/>
                </>
            )
        }

        
        return (
            <>
                <div >
                    <h1>Login </h1>
                    <label htmlFor="">Username</label>
                    <input type="text" name="email" value={email} onChange={this.handleChange} /><br/><br/>
                    <label htmlFor="">Password</label>
                    <input type="text" name="pass" value={pass} onChange={this.handleChange} /><br/><br/>
                    <button onClick={() => fetchData({ email, pass })} >Login</button>
        <div>{msg}</div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => (console.log(state),{
    token: state.token,
    isLoading: state.isLoading,
    isAuth: state.isAuth,
    msg:state.msg   
})

const mapDispatchToProps = dispatch => ({ fetchData: (payload) => dispatch(fetchUserData(payload)) })

export default connect(mapStateToProps, mapDispatchToProps)(Login)