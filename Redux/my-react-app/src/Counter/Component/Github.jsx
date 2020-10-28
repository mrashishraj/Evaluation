import React from "react"
import { connect } from "react-redux"
import { fetchUserData } from "../Redux/Action"

class Github extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
    }

    render() {
        const { userData, fetchUserData } = this.props
        const { value } = this.state
        return (
            <>
                <div>Github</div>
                <input type="text" name="value" value={value} onChange={e => this.setState({ value: e.target.value })} />
                <button onClick={() => fetchUserData(value)}>Search</button>
            </>

        )
    }
}

const mapStateToProps = state => ({
    userData: state.app.userData
})

const mapDispatchToProps = dispatch => ({
    fetchUserData: payload => dispatch(fetchUserData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Github)