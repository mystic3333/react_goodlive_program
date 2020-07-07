import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import SearchInput from '../../../components/SearchInput'


import './index.less'

class HomeHeader extends React.Component {

    onCityClick = (e) => {
        this.props.history.push('/city')
    }

    render () {
        return (
            <div className="home_header_container">
                <div className="home_header_left" onClick={this.onCityClick}>
                <div className="city">{ this.props.cityName.city }</div>
                    <i className="iconfont icon-jiantouxia"></i>
                </div>
                <div className="home_header_middle">
                    <i className="iconfont icon-sousuo"></i>
                    <SearchInput/>
                </div>
                <div className="home_header_right">
                    <i className="iconfont icon-tubiaolunkuo-"></i>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.city
    }
}


export default connect(mapStateToProps)(withRouter(HomeHeader))