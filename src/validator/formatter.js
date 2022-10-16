let str = " TEJAS GADE"
const trimingstr = function(){
    let Trimed = str.trim()
    return Trimed

}
trimingstr(str)

const hardstr = "~TEJAS GADE~"
let changetoLowerCase = function(){
    let change = hardstr.toLowerCase().trim()
    return change
}
changetoLowerCase(hardstr)
let strUp = "~tejas gade [funtion-up]~"
function changeToUpperCase(){
    let changeUp=strUp.toUpperCase().trim()
     return changeUp
}
changeToUpperCase(strUp)
module.exports.trim=trimingstr
module.exports.lower = changetoLowerCase
module.exports.upper = changeToUpperCase