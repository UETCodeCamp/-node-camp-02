const r = require('../helpers/request')

exports.test = async () => {
    const response = await r.request({
        uri: '/hello',
        method: 'POST'
    })

    if (response !== 'world created') {
        throw new Error('Wrong response.')
    }

    return true
}