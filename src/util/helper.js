let monthPrint = function(){
    const date = new Date();
    const month = date.getMonth()
 return month
}
let datePrint = function(){
    const date = new Date();
    return date

}
let getBatchInfo = function (){
  let obj = { batchnm : "Lithium-",
    week : "W3D5",
    topic : "the topic for today is Nodejs module system",}
    return (obj)
}

module.exports.batchInfo=getBatchInfo
module.exports.itsPublic=datePrint
module.exports.itsMonth=monthPrint