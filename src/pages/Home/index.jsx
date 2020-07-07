import React from 'react'
import HomeHeader from './HomeHeader'
import FootNav from '../../components/FootNav'
import HomeList from './HomeList'
import Swiper from '../../components/Swiper'
import api from '../../api'

import image1 from '../../static/images/banner/1.png'
import image2 from '../../static/images/banner/2.jpg'
import image3 from '../../static/images/banner/3.jpg'

export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            bannerImages: [image1, image2, image3],
            homehot1Data: [],
            homehot2Data: []
        }
    }

    componentDidMount() {
        api.home.homehot1Data()
            .then(res => res.json())
            .then(data => {
                this.setState({
                    homehot1Data: data.data
                })
            })


        api.home.homehot2Data()
            .then(res => res.json())
            .then(data => {
                this.setState({
                    homehot2Data: data.data
                })
            })
    }

    render() {
        return (
            <div>
                <HomeHeader/>
                <Swiper bannerImages={this.state.bannerImages}/>
                <HomeList title="每日精选" data={this.state.homehot1Data}/>
                <HomeList title="爆款推荐" data={this.state.homehot2Data}/>
                <FootNav/>
            </div>
        )
    }
}