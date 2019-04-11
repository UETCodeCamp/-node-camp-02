const request = require('request-promise-native')

const hostApp = process.env.HOST || 'http://localhost:8888'
console.log('Start running with host app:', hostApp)

const instance  = request.defaults({
    baseUrl: hostApp
})

const _request = async (options = {}) => {
    const defaultOpts = {
        uri: '/',
        method: 'GET',
    }    
    const opts = Object.assign({}, defaultOpts, options)

    try {
        const response = await instance(opts)

        return response
    } catch(error ) {
        throw error
    }
}

exports.request = (options) => {
    return _request(options)
}

