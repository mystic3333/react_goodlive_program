import React from 'react'
import {withRouter} from 'react-router-dom'
import './style.less'

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    searchInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    searchInputKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.props.history.push('/search')
        }
    }

    render () {
        return (
            <div className="search_input_container">
                <input type="text" name="keyword" 
                className="search_input" 
                value={this.state.keyword} 
                onKeyUp={this.searchInputKeyUp}
                onChange={this.searchInputChange}/>
            </div>
        )
    }
}

export default withRouter(SearchInput)