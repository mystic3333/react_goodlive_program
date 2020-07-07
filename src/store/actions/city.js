import {ADD_CITY} from '../constant'

export const add_city = (city) => {
    return {
        type: ADD_CITY,
        city
    }
}