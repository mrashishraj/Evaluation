import React from "react"
import { connect } from "react-redux"
import { addCountryData,postAllData,deleteData } from "../Redux/Action"
// import axios from "axios"
import { Link, Redirect } from "react-router-dom"

class Dashboard extends React.Component{
constructor(props){
    super(props)
    this.state={
        countryList:"",
        data:"",
        country:"",
        city:"",
        population:"",
        dataCity:"",
        isCountry:false,
    }
}

handleChange = (e) => {  
    this.setState({
        [e.target.name]:e.target.value
    })
}

handleToggle=(e)=>{
    this.setState({
        isCountry:!this.state.isCountry
    })
}

    render(){
        const {addCountryData,cityData,submit,deleteData,countryList,isAuth,token } = this.props

        const {country,city,population,isCountry} = this.state

        if(!isAuth){
            return(
            <Redirect to="/"/>
)        }

        return(
            <div style={{backgroundColor:"#98AFC7"}}>
            <h1>Dashboard</h1>
            <p>Token :- {token}</p>
            <div>
                <label htmlFor="">Select Country </label>

                <select name="country" onChange={this.handleChange}>
                    <option value="">---Select Country---</option>
                    {countryList && countryList.map((item)=>(<option key={item.id} value={item.name}>{item.name}</option>))}
                </select> 

                {isCountry?
                <div>
                <label htmlFor="">Add Country</label>
                <input type="text" name="country" placeholder="Write Country Name" value={country} onChange={this.handleChange}/>
                <button onClick={()=>addCountryData({country})}>Add</button>
                </div>: <button name="isCountry" onClick={this.handleToggle}>Add New</button>}

            </div><br/>
            
            <div>
                {/* <label htmlFor="">Select City  </label>
                <select name="city" onChange={this.handleChange}>
                <option value="">---Select City---</option>
                {cityData.data && cityData.data.filter(item=>item.country_code===country).map((item)=>( <option key={item.id} value={item.name}>{item.name}</option> ))} */}
                {/* </select> */}
                <label htmlFor="">Add City</label>
                <input type="text" placeholder="Write City Name" name="city" value={city} onChange={this.handleChange}/>
            </div><br/>

            <div>
                <label>Add Population</label>
                <input type="text" name="population"  value={population} onChange={this.handleChange}/>                
            </div><br/>
            <div>
            <button onClick={()=>submit({city,country,population})}>Submit</button>
            </div><br/><br/><br/>
            <div style={{backgroundColor:"pink",display:"flex"}}>
                <table border="1" style={{flex:"1"}}>
                    <thead>
                <tr key="head">
                    <td>Country</td>
                    <td>City Name</td>
                    <td>Population</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>  
                    </thead>
                <tbody>
                    {cityData.data && cityData.data.map(item=>(<tr key={item.id}>
                    <td>{item.country_code}</td>
                    <td>{item.name}</td>
                    <td>{item.population}</td>
                    <td> <Link to={`/dashboard/edit/${item.id}`}> <button>Edit</button></Link> </td>
                    <td> <button onClick={()=>deleteData(item.id)}>Delete</button> </td>
                    </tr>))}
                </tbody>               
                </table>
            </div> 
            </div>
        )
    }
}

const mapStateToProps = state =>({
    isCity:state.isCity,
    cityData:state.city,
    countryList:state.country.data,
    isAuth:state.isAuth,
    token:state.token
})

const mapDispatchToProps = dispatch => ({
    addCountryData:(payload)=>dispatch(addCountryData(payload)),
    City:(payload)=>dispatch(payload),
    submit:(payload)=>dispatch(postAllData(payload)),
    deleteData:(payload)=>dispatch(deleteData(payload))
})

export default connect(mapStateToProps,mapDispatchToProps)(Dashboard)