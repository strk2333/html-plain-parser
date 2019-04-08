// import XMLParser from './xml-parser/xmlParser'

const XMLParser = require('../xmlParser')
const indexRes = require('./indexSrc')
const customRes = require('./customSrc')
// const testRes = `<div class='root'><div class='content'>1<div>0</div></div><div class='content'>2</div></div>`


const parser = new XMLParser()
// const xml = parser.parseFromString(testRes, '(<br \/>|<br\/>|<br>|<br >)')
const xml = parser.parseFromString(customRes, '(<br \/>|<br\/>|<br>|<br >)')
const arr = xml.getElementsByTagName('td')
const arr2 = arr.filter((it) => {
    return it.attributes && it.attributes.class && it.attributes.class.indexOf('content') !== -1
})

console.log(parser.toString(xml))
// console.log(arr)
// console.log(arr2)
console.log(arr[0])

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

