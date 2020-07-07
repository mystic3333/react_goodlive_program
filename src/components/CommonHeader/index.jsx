import React from 'react'
import './style.less'

export default class CommonHeader extends React.Component {

    onBackClick = () => {
        window.history.back(-1)
    }

    render() {
        return (
            <div className="common_header_container">
                <div className="common_header_container_back" onClick={this.onBackClick}>返回</div>
                <div className="common_header_container_title">城市列表</div>
            </div>
        )
    }
}