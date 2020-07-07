import React from 'react'
import './index.less'

export default class Dots extends React.Component {
    

    render () {
        const currentIndex = this.props.currentIndex
        const dotsNum = this.props.dots
        const dotArrLength = new Array(dotsNum).fill(1)

        return (
                <ul className="dot_wrapper">
                    {
                        dotArrLength.map((element, index) => (
                            <li key={index} className={ currentIndex == index ? 'select' : ''}></li>
                        ))
                    }
                </ul>

        )
    }
}