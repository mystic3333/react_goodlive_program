import React from 'react'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils';
import Dots from './Dots'
import './index.less'

const AutoSwipeableViews = autoPlay(SwipeableViews)

export default class MyComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0
        }
    }

    handleChangeIndex = (index) => {
        this.setState({
            currentIndex: index
        })
    }

    render () {
        const bannerImages = this.props.bannerImages

        return (
            <div className="swiper_container">
                <AutoSwipeableViews className="swiper" onChangeIndex={this.handleChangeIndex}>
                    {
                        bannerImages.map((element, index) => {
                            return (
                                <div key={index} className="image_wrapper">
                                    <img src={element} alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoSwipeableViews>
                <Dots dots={bannerImages.length} currentIndex={this.state.currentIndex} onChangeIndex={this.handleChangeIndex}/>
            </div>
            
        )
    }
}
