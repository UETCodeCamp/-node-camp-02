const get = require('./get')
const post = require('./post')
const put = require('./put')
const del = require('./delete')


exports.tests = async() => {
    console.log('Run all tests.')

    await get.test()
    await post.test()
    await put.test()
    await del.test()
}
