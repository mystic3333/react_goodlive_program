import React from 'react'

import './style.less'

export default class HomeList extends React.Component {
    

    render() {
        const { data, title } = this.props

        return (
            <div className="container">
                <div className="titleText">{ title }</div>
                <div className="container_wrapper">
                    {
                        data.map((element, index) => {
                            return (
                                <div className="img_wrapper" key={element.id}>

                                    <div className="img"></div>
                                    <div className="title">{element.title}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}