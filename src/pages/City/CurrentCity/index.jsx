import React from 'react'
import { connect } from 'react-redux'

import './style.less'

class CurrentCity extends React.Component {
    render() {
        return (
        <div className="city_container_current_city">当前城市: {this.props.cityName.city}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.city
    }
}

export default connect(mapStateToProps)(CurrentCity)