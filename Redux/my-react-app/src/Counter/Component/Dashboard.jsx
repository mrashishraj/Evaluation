import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { fetchData } from "../Redux/Action"

class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            value:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    render(){
        const {value} = this.state
        const {fetchGitData,data} = this.props
        // console.log(data)
        return(
            <div>
                <h1>this is dashboard page</h1>
                <input type="text" name="value" value={value} onChange={this.handleChange}/>
                <button onClick={() => fetchGitData({value})}>search</button>
        <div>{data && data.map(item=> <p>{item.login}</p> )}</div>
            </div>
        )
    }
}

const mapStateToProps = state =>({
    data:state.data
})

const mapDispatchToProps = dispatch => ({fetchGitData:(payload)=>dispatch(fetchData(payload))})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)