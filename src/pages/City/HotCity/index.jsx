import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../../../store/actions'

import './style.less'

class HotCity extends React.Component {
    constructor() {
        super()
        this.state = {
            currentCity: ''
        }
       
    }

   
    onCityClick(city) {
        this.props.cityActions.add_city(city)
        // 在本地缓存中存储一份, 在页面刷新的时候获取, 避免数据丢失
        localStorage.setItem('city', city)
        window.history.back(-1)
    }

    render() {
        const { city } = this.props

        return (
            <div className="hot_city_container">
                <div className="hot_city_title">热门城市</div>
                <div className="hot_city_wrapper">
                    {
                        city.map((element, index) => {
                            return (
                                <div className="hot_city_name" key={index} onClick={this.onCityClick.bind(this, element)}>
                                    {element}
                                </div>
                            )
                        })
                    }
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

const mapDispatchToProps = (dispatch) => {
    return {
        cityActions: bindActionCreators(actions.city, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotCity)