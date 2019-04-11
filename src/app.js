const tests = require('./tests/index')
const s = require('./submit')

exports.run  = async () => {
    try {
        const results = await tests.tests()

        s.submit({
            is_pass: true,
        })
    } catch (error) {
        s.submit({
            is_pass: false,
            message: error.message || ''
        })
    }
}
