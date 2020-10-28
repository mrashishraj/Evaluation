import React from "react"
import { connect } from "react-redux"
import { postUserData } from "../Redux/Action"

class Register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: "",
            username: "",
            mobile: "",
            description: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { name, email, password, username, mobile, description } = this.state
        const {postData,isRegister,msg} = this.props
        return (
            <div>
                <h1>Registration Form</h1>
                <label htmlFor="">Name</label>
                <input type="text" name="name" value={name} onChange={this.handleChange} /><br/><br/>

                <label htmlFor="">Email</label>
                <input type="text" name="email" value={email} onChange={this.handleChange} /><br/><br/>

                <label htmlFor="">Username</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} /><br/><br/>

                <label htmlFor="">Password</label>
                <input type="text" name="password" value={password} onChange={this.handleChange} /><br/><br/>

                <label htmlFor="">Mobile No.</label>
                <input type="text" name="mobile" value={mobile} onChange={this.handleChange} /><br/><br/>
                
                <label htmlFor="">Description</label>
                <input type="text" name="description" value={description} onChange={this.handleChange} /><br/><br/>
                <button onClick={() => postData({ name, email, password, username, mobile, description })}>Register Now</button>
                <p>{msg}</p>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    isLoading:state.isLoading,
    isAuth:state.isAuth,
    isRegister:state.isRegister,
    msg:state.msg,
    isError:state.isError
})

const mapDispatchToProps = dispatch => ({postData:(payload)=>dispatch(postUserData(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(Register)

// export default Register