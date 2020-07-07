import {ADD_CITY} from '../constant'


const initialState = {
    city: '北京'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CITY: 
            return {
                city: action.city
            }
        default:
            return state
    }
}