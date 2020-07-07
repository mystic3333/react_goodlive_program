import React from 'react'
import CommonHeader from '../../components/CommonHeader'
import CurrentCity from './CurrentCity'
import HotCity from './HotCity'

import './style.less'

export default class City extends React.Component {
    constructor() {
        super()
        this.state = {
            city_list:['北京', '上海', '杭州', '广州', '深圳', '成都', '苏州', '南京', '天津', '重庆', '厦门', '武汉', '西安'],
            currentCity: '北京'
        }
    }

    render () {
        return (
            <div className="city_container">
                <CommonHeader/>
                <CurrentCity currentCity={this.state.currentCity}/>
                <HotCity city={this.state.city_list} getCurrentCity={(city) => {this.setState({currentCity: city})}}/>
            </div>
        )
    }
}