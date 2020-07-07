const qs = require('querystring')

export function getData(url) {
    const result = fetch(url)
    return result
}

export function postData(url, params) {
    
    const result = fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: qs.stringify(params)
    })

    return result
}