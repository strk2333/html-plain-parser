const fetch = require('node-fetch')

const HTMLParser = require('../htmlParser')
const indexRes = require('./data/indexSrc')
const lrcRes = require('./data/lrcSrc')
const customRes = require('./data/customSrc')


const parser = new HTMLParser()
const html = parser.parseFromString(lrcRes)
const arr = html.getElementsByTagName('a')
const arr2 = arr.filter((it) => {
    return it.attributes && it.attributes.class && it.attributes.class.indexOf('content') !== -1
})

// const fetchRes = fetch('http://stage48.net/studio48/singles_nogizaka46.html')
// .then(res => res.text())
// .then(res => {
//     const html = parser.parseFromString(res)
//     const arr = html.getElementsByTagName('a')
//     const arr2 = arr.filter((it) => {
//         return it.attributes && it.attributes.class && it.attributes.class.indexOf('content') !== -1
//     }) 
//     console.log(arr.length)
// })
// .catch(res => console.log(res))


// console.log(parser.textBeautify(parser.toString(arr2[0])))
// console.log(arr)
// console.log(arr[0])
const {filterConfig, outputConfig, boo} = parser
const {FilterType, FilterOpt, OutputType} = HTMLParser
const configs = [
    parser.filterConfig(FilterType.TAG, FilterOpt.EQUAL, 'a'),
    parser.filterConfig(FilterType.ATTR, FilterOpt.NOT_START_WITH, ['href', 'http']),
    // parser.filterConfig(FilterType.CLASS, FilterOpt.END_WITH, 't'),
    // parser.filterConfig(FilterType.ID, FilterOpt.EQUAL, 'page')
]
const config = parser.filterConfig(FilterType.TAG, FilterOpt.EQUAL, 'a')
const res = parser.select(html, configs, parser.outputConfig(OutputType.TAG))
// console.log('0:' + arr.length)
// console.log('0:' + res)

// for (i of arr) {
//     console.log(i)
// }
 
// const arr3 = arr[1].getElementsByTagName('a')

// index
// for (i of arr) {
//     if (i.attributes.href && i.attributes.href.match(/(.*html)/g))
//         console.log(i.attributes.href)
//         // console.log(i)
// }

var expect = require('chai').expect;

describe('test01', function () {

    describe('#run', function () {
        it('seconds', function () {
            expect(1).to.not.eq(0);
        })
    });

});