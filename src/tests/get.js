const r = require('../helpers/request')

exports.test = async() => {
    const response = await r.request({
        uri: '/hello',
        method: 'GET'
    })

    if (response !== 'world') {
        throw new Error('Wrong response.')
    }

    return true
}