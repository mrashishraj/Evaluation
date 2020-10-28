import React from "react"
import { connect } from "react-redux"
import axios from "axios"
import {edit} from "../Redux/Action"
import { Link } from "react-router-dom"

class Edit extends React.Component{
    constructor(props){
        super(props)
        this.state={
            cityData:"",
            cityName:"",
            population:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    componentDidMount(){
        axios.get("http://localhost:3000/city")
        .then(res=>(this.setState({cityData:res})))
    }

    render(){
        const {cityData,cityName,population} = this.state
        const {editData} = this.props
        const { id } = this.props.match.params
        return(
            <div >
            <h2>Edit page for this data</h2>
            <table border="1">
                    <thead>
                <tr key="head">
                    <td>Country Code</td>
                    <td>City Name</td>
                    <td>Population</td>
                    <td>Edit</td>
                </tr>  
                    </thead>
                <tbody>
                    {cityData.data && cityData.data.filter(item=>item.id===Number(id)).map(item=>(<tr key={item.id}>
                    <td>{item.country_code}</td>
                    <td>{item.name}</td>
                    <td><input type="text" name="population" value={population} onChange={this.handleChange}/></td>
                    <td><Link to="/dashboard"><button onClick={()=>editData({cityName,population,id})}>Done</button></Link></td>                    
                    </tr>))}
                </tbody>               
                </table>          
         </div>      
        )
    }
}

const mapStateToProps = state =>({
city:state.city
})

const mapDispatchToProps = dispatch => ({
    editData:(payload)=>dispatch(edit(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Edit)