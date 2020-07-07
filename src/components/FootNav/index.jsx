import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

export default class FootNav extends React.Component {
    render() {
        return (
            <div className="foot_nav_container">
                <div className="foot_nav_item_wrapper">
                    <div className="foot_nav_item">
                        <NavLink exact to="/" className="foot_nav_item_link">
                            <i className="iconfont icon-shouye" />
                            首页
                        </NavLink>
                    </div>
                    <div className="foot_nav_item">
                        <NavLink to="/shop" className="foot_nav_item_link">
                            <i className="iconfont icon-shop" />
                            商城
                        </NavLink>
                    </div>
                    <div className="foot_nav_item">
                        <NavLink to="/life" className="foot_nav_item_link">
                            <i className="iconfont icon-life" />
                            生活
                        </NavLink>
                    </div>
                    <div className="foot_nav_item">
                        <NavLink to="/mine" className="foot_nav_item_link">
                            <i className="iconfont icon-wode2" />
                            我的
                        </NavLink>
                    </div>
                </div>



            </div>
        )
    }
}