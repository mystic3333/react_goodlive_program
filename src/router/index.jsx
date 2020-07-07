import React from 'react'
import {HashRouter as Router, Route, Switch}  from 'react-router-dom'

import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Mine from '../pages/Mine'
import Life from '../pages/Life'
import City from '../pages/City'
import Search from '../pages/Search'
import NotFound from '../pages/NotFound'


export default class Routes extends React.Component {
    render () {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/shop" component={Shop}></Route>
                    <Route exact path="/mine" component={Mine}></Route>
                    <Route exact path="/life" component={Life}></Route>
                    <Route exact path="/city" component={City}></Route>
                    <Route exact path="/search" component={Search}></Route>
                    <Route path="*" component={NotFound}></Route>
                </Switch>
            </Router>
        )
    }
}